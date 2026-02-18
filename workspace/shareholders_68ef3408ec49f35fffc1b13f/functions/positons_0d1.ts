/**
 * Field function for: Positons
 * Field name: Positons
 * Field ID: 68ef79531982f0531c4e20d1
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

export function positons_0d1(dep: Dependencies): any {
// Get the current shareholder's ID from the record's data
const currentShareholderId = dep.data._id;
const currentShareholderName = dep.data.name;

// Build list of all transactions involving this shareholder, grouped by company
const transactionsByCompany = {};

for(let i = 0; i < dep.to_shareholder.length; i++){
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
                transactions: []
            };
        }
        
        transactionsByCompany[companyId].transactions.push({
            isReceiver: isReceiver,
            isSender: isSender,
            to_name: dep.to_shareholder[i].name,
            from_name: dep.from_shareholders[i]?.name,
            from_range: dep.from_share_range[i],
            to_range: dep.to_share_range[i],
            action: dep.action[i],
            date: dep.date[i]
        });
    }
}

// Helper function to remove range
function removeRangeFromArray(ranges, removeStart, removeEnd) {
    const toAdd = [];
    const toRemove = [];
    
    for(let i = 0; i < ranges.length; i++) {
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
                date: range.date
            });
        }
        
        if (range.end > removeEnd) {
            toAdd.push({
                start: removeEnd + 1,
                end: range.end,
                action: range.action,
                from: range.from,
                date: range.date
            });
        }
    }
    
    for(let i = toRemove.length - 1; i >= 0; i--) {
        ranges.splice(toRemove[i], 1);
    }
    
    ranges.push(...toAdd);
}

// Format output
let output = `SHAREHOLDINGS FOR: ${currentShareholderName}\n`;
output += "=".repeat(60) + "\n\n";

// Process each company separately
for(const [companyId, companyData] of Object.entries(transactionsByCompany)) {
    output += `COMPANY: ${companyData.name}\n`;
    output += "-".repeat(50) + "\n\n";
    
    // Calculate current holdings for this company
    const currentRanges = [];
    
    for(const txn of companyData.transactions) {
        if (txn.isReceiver && (txn.action === "issuing" || txn.action === "transfer")) {
            currentRanges.push({
                start: txn.from_range,
                end: txn.to_range,
                action: txn.action,
                from: txn.from_name || "Initial issue",
                date: txn.date
            });
        }
        
        if (txn.isSender && txn.action === "transfer") {
            removeRangeFromArray(currentRanges, txn.from_range, txn.to_range);
        }
    }
    
    // Show current holdings
    if (currentRanges.length === 0) {
        output += "No current shareholdings in this company\n\n";
    } else {
        const totalShares = currentRanges.reduce((sum, r) => 
            sum + (r.end - r.start + 1), 0
        );
        
        output += `Total Shares: ${totalShares}\n\n`;
        
        currentRanges.sort((a, b) => a.start - b.start);
        
        output += "Current Holdings:\n";
        
        for(const range of currentRanges) {
            const numShares = range.end - range.start + 1;
            const dateStr = new Date(range.date).toLocaleDateString("fi-FI");
            output += `  • Shares ${range.start}-${range.end} (${numShares} shares) - ${range.action} - ${dateStr}\n`;
        }
        output += "\n";
    }
    
    // Transaction history for this company
    output += "Transaction History:\n";
    
    // Sort transactions by date
    companyData.transactions.sort((a, b) => a.date - b.date);
    
    for(const txn of companyData.transactions) {
        const numShares = txn.to_range - txn.from_range + 1;
        const dateStr = new Date(txn.date).toLocaleDateString("fi-FI");
        
        if (txn.isReceiver) {
            output += `+ RECEIVED ${numShares} shares (${txn.from_range}-${txn.to_range})`;
            if (txn.from_name) {
                output += ` from ${txn.from_name}`;
            }
            output += ` [${txn.action}] - ${dateStr}\n`;
        }
        
        if (txn.isSender) {
            output += `- SOLD ${numShares} shares (${txn.from_range}-${txn.to_range}) to ${txn.to_name} [${txn.action}] - ${dateStr}\n `;
        }
    }
    
    output += "\n" + "=".repeat(60) + "\n\n";
}

return output;
}