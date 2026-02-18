import { Client } from '@hailer/cli';
import * as fs from 'fs';

const CONFIG_PATH = './config.json';
const COMPANIES_WORKFLOW_ID = '677393544e9c3c0478e35a51';
const CUSTOMERS_PHASE_ID = '677393544e9c3c0478e35a60';

// VAT checkbox field IDs
const VAT_CALCULATION_CREATED = '699607cc941c1a93e9fe1618';
const VAT_REPORT_SENT = '699607cd941c1a93e9fe161b';
const VAT_PAID = '699607cd941c1a93e9fe161f';

async function main() {
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

  const client = new Client({
    apiUrl: config.apiUrl || 'https://api.hailer.com',
  });

  console.log('Authenticating...');
  await client.login(config.email, config.password);
  console.log('Authenticated');

  // Get all companies from Customers phase
  console.log('Fetching companies...');
  const companies: any[] = [];
  let skip = 0;
  while (true) {
    const opts = skip > 0 ? { skip } : {};
    const result = await client.call('activity.list', COMPANIES_WORKFLOW_ID, CUSTOMERS_PHASE_ID, opts);
    const page = Array.isArray(result) ? result : (result as any)?.activities || [];
    companies.push(...page);
    if (page.length < 20) break;
    skip += page.length;
  }
  console.log(`Found ${companies.length} companies`);

  // Update each company to enable VAT checkboxes
  let updated = 0;
  for (const company of companies) {
    console.log(`Updating ${company.name}...`);
    await client.call('activity.update', [{
      _id: company._id,
      fields: {
        [VAT_CALCULATION_CREATED]: 1,
        [VAT_REPORT_SENT]: 1,
        [VAT_PAID]: 1,
      }
    }], {});
    updated++;
  }

  console.log(`Done! Updated ${updated} companies with VAT checkboxes enabled.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
