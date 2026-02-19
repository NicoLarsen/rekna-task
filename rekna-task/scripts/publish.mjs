import { Client } from '@hailer/cli';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

const clientConfigs = JSON.parse(process.env.CLIENT_CONFIGS || '[]');
const creds = clientConfigs[0] || {};

async function main() {
  // Read manifest
  const manifestPath = path.join(__dirname, '../dist/manifest.json');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  console.log('Publishing app:', manifest.appId);
  console.log('Version:', manifest.version);
  console.log('Description:', manifest.versionDescription);

  if (!manifest.appId || !manifest.version || !manifest.versionDescription) {
    console.error('Missing required manifest fields: appId, version, or versionDescription');
    process.exit(1);
  }

  // Connect to Hailer to get session key
  console.log('\nConnecting to Hailer...');
  const client = await Client.create({
    host: creds.apiBaseUrl || 'https://api.hailer.com',
    username: creds.email,
    password: creds.password,
  });
  console.log('Connected');

  // Get session key from the client
  const sessionKey = client.sessionKey;
  if (!sessionKey) {
    console.error('Failed to get session key');
    process.exit(1);
  }

  // Get the .tgz file
  const tgzFile = process.argv[2];
  if (!tgzFile || !tgzFile.endsWith('.tgz')) {
    console.error('Please provide .tgz file path as argument');
    process.exit(1);
  }

  console.log('Reading package:', tgzFile);
  const content = readFileSync(tgzFile);

  // Upload using HTTP POST to /app/publish
  console.log('Uploading to Hailer...');

  const form = new FormData();
  form.append('file', content, { filename: path.basename(tgzFile) });
  form.append('appId', manifest.appId);
  form.append('publishMarket', 'false');

  const host = new URL(creds.apiBaseUrl || 'https://api.hailer.com');

  await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: host.hostname,
      port: host.port || 443,
      path: '/app/publish',
      method: 'POST',
      headers: {
        ...form.getHeaders(),
        'hlrkey': sessionKey,
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log('Response status:', res.statusCode);
        try {
          const response = JSON.parse(body);
          console.log('Response:', JSON.stringify(response, null, 2));
        } catch {
          console.log('Response body:', body);
        }
        if (res.statusCode === 200) {
          resolve();
        } else {
          reject(new Error('Upload failed: ' + res.statusCode));
        }
      });
    });

    req.on('error', reject);
    form.pipe(req);
  });

  console.log('\nApp published successfully!');
  console.log('URL: https://apps.hailer.com/675b24f38a5aeaa8084153e2/' + manifest.appId + '/');

  client.disconnect();
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
