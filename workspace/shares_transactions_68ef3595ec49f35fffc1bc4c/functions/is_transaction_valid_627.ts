/**
 * Field function for: Is transaction valid
 * Field name: Is transaction valid
 * Field ID: 68ef80701982f0531c4e6627
 */

interface Dependencies {
  action: string;
  active_position: string | null;
  company: { _id: string; name: string };
  from_share_range: number;
  number_of_shares: number;
  to_share_range: number;
}

export function is_transaction_valid_627(dep: Dependencies): any {
// This gets executed on activity create, which update the "active_position" field in the seller metadata which make this field to change, from positive to negative or vice-versa

if(!dep.number_of_shares) return "🟥";

if(dep.action === "issuing") return "🟩";

// Check if seller has active positions
if(!dep.active_position) return "🔴 No seller positions found";

const sellerPositions = JSON.parse(dep.active_position);

// Check if seller has positions in this specific company
if(!sellerPositions[dep.company._id]) {
  return "🔴 Seller has no shares in this company";
}

const sellerCompanyPosition = sellerPositions[dep.company._id];

// Check if seller has any ranges at all
if(!sellerCompanyPosition.ranges || sellerCompanyPosition.ranges.length === 0) {
  return "🔴 Seller has no share ranges in this company";
}

// Validate the entered range matches actual shareholdings
const fromRange = dep.from_share_range;
const toRange = dep.to_share_range;

if(!fromRange || !toRange) {
  return "🟥 Please enter from and to share ranges";
}

// Check if the entered range is valid (from <= to)
if(fromRange > toRange) {
  return "🟥 From range must be less than or equal to To range";
}

// Check if the exact range or containing range exists in seller's holdings
let rangeIsValid = false;

for(const range of sellerCompanyPosition.ranges) {
  // Check if the entered range falls completely within this seller's range
  if(fromRange >= range.start && toRange <= range.end) {
    rangeIsValid = true;
    break;
  }
}

if(!rangeIsValid) {
  return `🟥 Seller does not own shares ${fromRange}-${toRange}`;
}

// Check if the number matches the range
const enteredShareCount = toRange - fromRange + 1;
if(enteredShareCount !== dep.number_of_shares) {
  return `🟥 Range size (${enteredShareCount}) doesn't match number of shares (${dep.number_of_shares})`;
}

return "🟩";
}