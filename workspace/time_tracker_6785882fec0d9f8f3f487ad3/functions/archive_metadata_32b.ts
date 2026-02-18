/**
 * Field function for: Archive metadata
 * Field name: Archive metadata
 * Field ID: 68e50bd93c8fc577bdc6f32b
 */

interface Dependencies {
  activity_metadata: null;
  Archive metadata: string;
  company_name: string | number | boolean | null;
}

export function archive_metadata_32b(dep: Dependencies): any {
return `{
    client: ${dep.company_name},
    date: ${new Date().toLocaleString("fi-FI")}
}`
}