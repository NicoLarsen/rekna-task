/**
 * Field function for: Shares listing
 * Field name: Shares listing
 * Field ID: 68ef4753ec49f35fffc22d5f
 */

interface Dependencies {
  action: Array<string>;
  date: Array<number>;
  from_share_range: Array<number>;
  from_shareholders: Array<{ _id: string; name: string }>;
  shares_transactions_data: Array<{
      _id: string;
      name: string;
      process: string;
      phase: string;
      active?: boolean;
      created: number;
      updated: number;
      completed: number | null;
      processName: string;
      phaseName: string;
      sequence: number;
    }>;
  to_share_range: Array<number>;
  to_shareholders: Array<{ _id: string; name: string }>;
}

export function shares_listing_d5f(dep: Dependencies): any {
const transactions = [];

if (!dep.to_shareholders)
  return "No shareholder data available.";

for (let i = 0; i < dep.to_shareholders.length; i++) {
  if(dep.shares_transactions_data[i].phaseName !== "Realized") continue;
  transactions.push({
    owner_name: dep.to_shareholders[i].name,
    owner_id: dep.to_shareholders[i]._id,
    seller_name: dep.from_shareholders[i]?.name,
    seller_id: dep.from_shareholders[i]?._id,
    from_range: dep.from_share_range[i],
    to_range: dep.to_share_range[i],
    action: dep.action[i],
    date: dep.date[i],
  });
}

const shareholderRanges = {};

for (const trans of transactions) {
  if (!shareholderRanges[trans.owner_id]) {
    shareholderRanges[trans.owner_id] = {
      name: trans.owner_name,
      ranges: [],
    };
  }

  if (trans.action === "issuing") {
    shareholderRanges[trans.owner_id].ranges.push({
      start: trans.from_range,
      end: trans.to_range,
      action: "issuing",
      date: trans.date,
    });
  }
  else if (trans.action === "transfer") {
    if (trans.seller_id && shareholderRanges[trans.seller_id]) {
      shareholderRanges[trans.seller_id].ranges = removeRange(
        shareholderRanges[trans.seller_id].ranges,
        trans.from_range,
        trans.to_range,
      );
    }
    else if (trans.seller_id) {
      shareholderRanges[trans.seller_id] = {
        name: trans.seller_name,
        ranges: [],
      };
    }

    shareholderRanges[trans.owner_id].ranges.push({
      start: trans.from_range,
      end: trans.to_range,
      action: "transfer",
      date: trans.date,
    });
  }
}

function removeRange(existingRanges, removeStart, removeEnd) {
  const result = [];

  for (const range of existingRanges) {
    if (range.end < removeStart || range.start > removeEnd) {
      result.push(range);
      continue;
    }

    if (range.start < removeStart) {
      result.push({
        start: range.start,
        end: removeStart - 1,
        action: range.action,
        date: range.date,
      });
    }

    if (range.end > removeEnd) {
      result.push({
        start: removeEnd + 1,
        end: range.end,
        action: range.action,
        date: range.date,
      });
    }
  }

  return result;
}

// Calculate total shares in company
let companyTotalShares = 0;
const shareholderShares = {};

for (const [id, data] of Object.entries(shareholderRanges)) {
  if (data.ranges.length === 0)
    continue;

  const totalShares = data.ranges.reduce((sum, r) =>
    sum + (r.end - r.start + 1), 0);

  shareholderShares[id] = {
    name: data.name,
    totalShares,
    ranges: data.ranges,
  };

  companyTotalShares += totalShares;
}

// Format output
let output = `SHAREHOLDERS\n${"=".repeat(30)}\n`;
output += `Total Company Shares: ${companyTotalShares}\n\n`;

for (const [id, data] of Object.entries(shareholderShares)) {
  const percentage = ((data.totalShares / companyTotalShares) * 100).toFixed(2);

  output += `${data.name} - ${data.totalShares} shares (${percentage}%)\n`;
  output += `${"-".repeat(30)}\n`;

  data.ranges.sort((a, b) => a.start - b.start);

  for (const range of data.ranges) {
    const numShares = range.end - range.start + 1;
    output += `  Shares ${range.start}-${range.end} (${numShares} shares) [${range.action}] - ${new Date(range.date).toLocaleDateString("fi-FI")}\n`;
  }
  output += "\n";
}

return output
}