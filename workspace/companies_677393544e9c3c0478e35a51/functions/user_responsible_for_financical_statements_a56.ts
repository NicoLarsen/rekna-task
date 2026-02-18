/**
 * Field function for: User responsible for financical statements
 * Field name: User responsible for financical statements
 * Field ID: 677393544e9c3c0478e35a56
 */

interface Dependencies {
  user: { _id: string; firstname: string; lastname: string } | null;
}

export function user_responsible_for_financical_statements_a56(dep: Dependencies): any {
return dep.user
}