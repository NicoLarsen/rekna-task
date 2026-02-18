/**
 * Field function for: User responsible for client
 * Field name: User responsible for client
 * Field ID: 68dd1c2af66abedb4d5c2908
 */

interface Dependencies {
  user: { _id: string; firstname: string; lastname: string } | null;
}

export function user_responsible_for_client_908(dep: Dependencies): any {
return dep.user
}