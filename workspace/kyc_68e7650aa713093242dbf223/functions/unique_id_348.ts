/**
 * Field function for: Unique ID
 * Field name: Unique ID
 * Field ID: 68e8a87d1a3abc7125e4e348
 */

interface Dependencies {
  activity_data: {
      _id: string;
      name: string;
      process: string;
      phase: string;
      active?: boolean;
      created: number;
      updated: number;
      completed: number | null;
      processName: string;
      phaseName: string;
      sequence: number;
    };
}

export function unique_id_348(dep: Dependencies): any {
return dep.activity_data.created.toString().slice(-6)
}