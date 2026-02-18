/**
 * Field function for: Y-tunnus
 * Field name: Y-tunnus
 * Field ID: 68f74c6cda248873fd8896d7
 */

interface Dependencies {
  company_ytunnus: string | null;
  old_kyc_ytunnus: string | null;
}

export function ytunnus_6d7(dep: Dependencies): any {
return dep.old_kyc_ytunnus || dep.company_ytunnus
}