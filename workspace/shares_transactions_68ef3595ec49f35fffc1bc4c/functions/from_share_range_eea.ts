/**
 * Field function for: From share range
 * Field name: From share range
 * Field ID: 68ef4eaf7d4d64184e6c2eea
 */

interface Dependencies {
  action: string;
  active_position: string | null;
  company: { _id: string; name: string };
  number_of_shares: number;
}

export function from_share_range_eea(dep: Dependencies): any {
if(!dep.number_of_shares || dep.action === "issuing") return 0;

const sellerPositions = JSON.parse(dep.active_position)
const sellerCompanyPosition = sellerPositions[dep.company._id]
const sortRanges = sellerCompanyPosition.ranges
  .filter(range => range.num_shares >= dep.number_of_shares)
  .sort((a, b) => a.start - b.start);

if (sortRanges.length === 0) return 0;

return sortRanges[0].start;

}