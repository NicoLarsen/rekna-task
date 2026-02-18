/**
 * Field function for: Assigned to user
 * Field name: Assigned to user
 * Field ID: 6773a73ebd84fc36f14d9276
 */

interface Dependencies {
  user: { _id: string; firstname: string; lastname: string } | null;
}

export function assigned_to_user_276(dep: Dependencies): any {
return dep.user
}