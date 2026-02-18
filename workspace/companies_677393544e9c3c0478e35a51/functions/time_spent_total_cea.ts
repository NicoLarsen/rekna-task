/**
 * Field function for: Time spent total
 * Field name: Time spent total
 * Field ID: 67858dd46bf2986d19693cea
 */

interface Dependencies {
  timeSpent: Array<number>;
}

export function time_spent_total_cea(dep: Dependencies): any {
function round(input) {
    return Math.round(input * 100) / 100;
}

let total = 0;

total += dep.timeSpent.length > 0 && dep.timeSpent.reduce((x, y) => (x || 0) + (y || 0));

return round(total) || 0;
}