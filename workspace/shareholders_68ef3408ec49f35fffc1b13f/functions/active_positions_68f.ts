/**
 * Field function for: Active positions
 * Field name: Active positions
 * Field ID: 68ef81ec1982f0531c4e768f
 */

interface Dependencies {
  action: Array<string>;
  company: Array<{ _id: string; name: string }>;
  data: {
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
    };
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
  to_shareholder: Array<{ _id: string; name: string }>;
}

export function active_positions_68f(dep: Dependencies): any {
// Get the current shareholder's ID from the record's data
const currentShareholderId = dep.data._id;
const currentShareholderName = dep.data.name;

// Build list of all transactions involving this shareholder, grouped by company
const transactionsByCompany = {};

for (let i = 0; i < dep.to_shareholder.length; i++) {
  if(dep.shares_transactions_data[i].phaseName !== "Realized") continue;
  const isReceiver = dep.to_shareholder[i]._id === currentShareholderId;
  const isSender = dep.from_shareholders[i]?._id === currentShareholderId;

  // Only include transactions where this shareholder is involved
  if (isReceiver || isSender) {
    const companyId = dep.company[i]._id;
    const companyName = dep.company[i].name;

    if (!transactionsByCompany[companyId]) {
      transactionsByCompany[companyId] = {
        name: companyName,
        transactions: [],
      };
    }

    transactionsByCompany[companyId].transactions.push({
      isReceiver,
      isSender,
      to_name: dep.to_shareholder[i].name,
      from_name: dep.from_shareholders[i]?.name,
      from_range: dep.from_share_range[i],
      to_range: dep.to_share_range[i],
      action: dep.action[i],
      date: dep.date[i],
    });
  }
}

// Helper function to remove range
function removeRangeFromArray(ranges, removeStart, removeEnd) {
  const toAdd = [];
  const toRemove = [];

  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];

    if (range.end < removeStart || range.start > removeEnd) {
      continue;
    }

    toRemove.push(i);

    if (range.start < removeStart) {
      toAdd.push({
        start: range.start,
        end: removeStart - 1,
        action: range.action,
        from: range.from,
        date: range.date,
      });
    }

    if (range.end > removeEnd) {
      toAdd.push({
        start: removeEnd + 1,
        end: range.end,
        action: range.action,
        from: range.from,
        date: range.date,
      });
    }
  }

  for (let i = toRemove.length - 1; i >= 0; i--) {
    ranges.splice(toRemove[i], 1);
  }

  ranges.push(...toAdd);
}

// Build the result object
const result = {
  
};

// Process each company separately
for (const [companyId, companyData] of Object.entries(transactionsByCompany)) {
  // Calculate current holdings for this company
  const currentRanges = [];

  for (const txn of companyData.transactions) {
    if (txn.isReceiver && (txn.action === "issuing" || txn.action === "transfer")) {
      currentRanges.push({
        start: txn.from_range,
        end: txn.to_range,
        action: txn.action,
        from: txn.from_name || "Initial issue",
        date: txn.date,
      });
    }

    if (txn.isSender && txn.action === "transfer") {
      removeRangeFromArray(currentRanges, txn.from_range, txn.to_range);
    }
  }

  // Calculate total shares
  const totalShares = currentRanges.reduce((sum, r) => 
    sum + (r.end - r.start + 1), 0
  );

  // Sort ranges by start position
  currentRanges.sort((a, b) => a.start - b.start);

  // Add company data to result
  result[companyId] = {
    company_id: companyId,
    company_name: companyData.name,
    total_shares: totalShares,
    ranges: currentRanges.map(range => ({
      start: range.start,
      end: range.end,
      num_shares: range.end - range.start + 1,
      action: range.action,
      acquired_from: range.from,
      date: range.date
    }))
  };
}

return JSON.stringify(result);
}