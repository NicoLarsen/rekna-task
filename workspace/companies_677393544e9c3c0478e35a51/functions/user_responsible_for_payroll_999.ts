/**
 * Field function for: User responsible for payroll
 * Field name: User responsible for payroll
 * Field ID: 68d9443e5303baa12167b999
 */

interface Dependencies {
  user: { _id: string; firstname: string; lastname: string } | null;
}

export function user_responsible_for_payroll_999(dep: Dependencies): any {
return dep.user;
}