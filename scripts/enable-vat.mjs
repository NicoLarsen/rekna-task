import { Client } from '@hailer/cli';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const COMPANIES_WORKFLOW_ID = '677393544e9c3c0478e35a51';

// All phases in Companies workflow
const ALL_PHASES = [
  { id: '677393544e9c3c0478e35a5b', name: 'Leads' },
  { id: '677393544e9c3c0478e35a5c', name: 'Active contact' },
  { id: '677393544e9c3c0478e35a60', name: 'Customers' },
  { id: '677393544e9c3c0478e35a5e', name: 'Churn' },
];

const VAT_CALCULATION_CREATED = '699607cc941c1a93e9fe1618';
const VAT_REPORT_SENT = '699607cd941c1a93e9fe161b';
const VAT_PAID = '699607cd941c1a93e9fe161f';

const clientConfigs = JSON.parse(process.env.CLIENT_CONFIGS || '[]');
const creds = clientConfigs[0] || {};

async function main() {
  console.log('Connecting and logging in...');
  const client = await Client.create({
    host: creds.apiBaseUrl || 'https://api.hailer.com',
    username: creds.email,
    password: creds.password,
  });
  console.log('Connected and logged in');

  // Get companies from ALL phases with pagination
  console.log('Fetching companies from all phases...');
  const companies = [];

  for (const phase of ALL_PHASES) {
    console.log(`  Fetching from ${phase.name}...`);
    let skip = 0;
    let phaseTotal = 0;

    while (true) {
      // Original format that works - single object with processId and phaseId
      const query = { processId: COMPANIES_WORKFLOW_ID, phaseId: phase.id };

      const result = await client.request('v3.activity.list', [query, { skip }]);

      // Handle both formats: {activities: [...]} or direct array
      const batch = Array.isArray(result) ? result : (result?.activities || []);

      if (batch.length === 0) break;

      companies.push(...batch);
      phaseTotal += batch.length;
      console.log(`      Fetched ${batch.length} (total: ${phaseTotal})...`);

      if (batch.length < 20) break; // Default page size is 20
      skip += batch.length;

      // Rate limiting
      await new Promise(r => setTimeout(r, 100));
    }

    console.log(`    Found ${phaseTotal} in ${phase.name}`);
  }
  console.log(`Found ${companies.length} companies total`);

  // Update each company to enable VAT checkboxes
  let updated = 0;
  for (const company of companies) {
    console.log(`Updating ${company.name}...`);
    try {
      // Use v3.activity.updateMany with array of update objects
      // Format: [[{ _id, fields }]] (double array for socket API)
      await client.request('v3.activity.updateMany', [[{
        _id: company._id,
        fields: {
          [VAT_CALCULATION_CREATED]: 1,
          [VAT_REPORT_SENT]: 1,
          [VAT_PAID]: 1,
        }
      }]]);
      updated++;
      console.log(`  ✓ Updated ${company.name}`);
    } catch (err) {
      console.error(`  ✗ Failed to update ${company.name}:`, err.msg || err);
      // Only fail on first one to see the error
      if (updated === 0) throw err;
    }
  }

  console.log(`Done! Updated ${updated} companies.`);
  client.disconnect();
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
