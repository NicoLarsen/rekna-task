/**
 * Field function for: Number of shares
 * Field name: Number of shares
 * Field ID: 68ef362cec49f35fffc1bf45
 */

interface Dependencies {
  end_shares_range: number;
  start_shares_range: number;
}

export function number_of_shares_f45(dep: Dependencies): any {
return dep.end_shares_range - dep.start_shares_range + 1

}