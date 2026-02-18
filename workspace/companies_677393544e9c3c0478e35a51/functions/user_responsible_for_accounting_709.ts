/**
 * Field function for: User responsible for accounting
 * Field name: User responsible for accounting
 * Field ID: 68d943285303baa12167b709
 */

interface Dependencies {
  user: { _id: string; firstname: string; lastname: string } | null;
}

export function user_responsible_for_accounting_709(dep: Dependencies): any {
return dep.user;
}