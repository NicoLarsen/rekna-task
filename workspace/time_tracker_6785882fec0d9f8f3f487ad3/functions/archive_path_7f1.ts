/**
 * Field function for: Archive path
 * Field name: Archive path
 * Field ID: 68e4b4d39a70952d1e2517f1
 */

interface Dependencies {
  name: string | number | boolean | null;
}

export function archive_path_7f1(dep: Dependencies): any {
const today = new Date()
const year = today.getFullYear()
return `${dep.name}/invoices/${year}`
}