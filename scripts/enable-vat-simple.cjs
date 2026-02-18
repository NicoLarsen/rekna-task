const https = require('https');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const COMPANIES_WORKFLOW_ID = '677393544e9c3c0478e35a51';
const CUSTOMERS_PHASE_ID = '677393544e9c3c0478e35a60';

const VAT_CALCULATION_CREATED = '699607cc941c1a93e9fe1618';
const VAT_REPORT_SENT = '699607cd941c1a93e9fe161b';
const VAT_PAID = '699607cd941c1a93e9fe161f';

let sessionId = null;

function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.hailer.com',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    if (sessionId) {
      options.headers['Cookie'] = `session_id=${sessionId}`;
    }

    const req = https.request(options, (res) => {
      let data = '';
      
      // Capture session cookie
      const cookies = res.headers['set-cookie'];
      if (cookies) {
        for (const cookie of cookies) {
          if (cookie.startsWith('session_id=')) {
            sessionId = cookie.split(';')[0].split('=')[1];
          }
        }
      }
      
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve(data);
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  console.log('Logging in...');
  const loginResult = await makeRequest('POST', '/api/v1/login', {
    email: config.email,
    password: config.password
  });
  
  if (!loginResult || loginResult.error) {
    console.error('Login failed:', loginResult);
    process.exit(1);
  }
  console.log('Logged in successfully');

  console.log('Fetching companies...');
  const companies = await makeRequest('GET', 
    `/api/v1/activities?processId=${COMPANIES_WORKFLOW_ID}&phaseId=${CUSTOMERS_PHASE_ID}&limit=100`);
  
  if (!companies || !Array.isArray(companies)) {
    console.error('Failed to fetch companies:', companies);
    process.exit(1);
  }
  
  console.log(`Found ${companies.length} companies`);

  let updated = 0;
  for (const company of companies) {
    console.log(`Updating ${company.name}...`);
    const result = await makeRequest('PUT', `/api/v1/activities/${company._id}`, {
      fields: {
        [VAT_CALCULATION_CREATED]: 1,
        [VAT_REPORT_SENT]: 1,
        [VAT_PAID]: 1,
      }
    });
    
    if (result && !result.error) {
      updated++;
    } else {
      console.error(`Failed to update ${company.name}:`, result);
    }
  }

  console.log(`Done! Updated ${updated} companies.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
