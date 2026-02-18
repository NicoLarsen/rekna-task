// Get first day of month as Unix timestamp (ms)
export function getMonthStart(year: number, month: number): number {
  return new Date(year, month, 1, 0, 0, 0, 0).getTime();
}

// Get last day of month as Unix timestamp (ms)
export function getMonthEnd(year: number, month: number): number {
  return new Date(year, month + 1, 0, 23, 59, 59, 999).getTime();
}

import { translations, Language } from '../i18n/translations';

// Format month for display (e.g., "February 2026" or "Helmikuu 2026")
export function formatMonthDisplay(year: number, month: number, language: Language = 'en'): string {
  const monthNames = translations[language].months;
  return `${monthNames[month]} ${year}`;
}

// Format month for activity name (e.g., "2026-02")
export function formatMonthActivityName(year: number, month: number): string {
  const monthStr = String(month + 1).padStart(2, '0');
  return `${year}-${monthStr}`;
}

// Check if an activity's starts date falls within a given month
export function isInMonth(startsTimestamp: number, year: number, month: number): boolean {
  const activityDate = new Date(startsTimestamp);
  return activityDate.getFullYear() === year && activityDate.getMonth() === month;
}
