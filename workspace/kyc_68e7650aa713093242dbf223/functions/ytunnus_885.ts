/**
 * Field function for: Y-tunnus
 * Field name: Y-tunnus
 * Field ID: 68e8a6b81a3abc7125e4d885
 */

interface Dependencies {
  company_ytunnus: string | null;
  old_kyc_ytunnus: string | null;
}

export function ytunnus_885(dep: Dependencies): any {
return dep.old_kyc_ytunnus || dep.company_ytunnus
}