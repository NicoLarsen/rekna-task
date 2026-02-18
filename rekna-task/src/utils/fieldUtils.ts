// Extract raw field value from activity - handles multiple response formats:
// v1 SDK: fields[id] = { value: X } or fields[id] = X
// v3 API: fieldsAndValues[id] = { value: X }
export function getRawFieldValue(activity: any, fieldId: string): any {
  // Try fields first
  const f = activity.fields?.[fieldId];
  if (f !== undefined) {
    // Could be wrapped { value: X } or direct value
    if (f && typeof f === 'object' && 'value' in f) return f.value;
    return f;
  }

  // Try fieldsAndValues
  const fv = activity.fieldsAndValues?.[fieldId];
  if (fv !== undefined) {
    if (fv && typeof fv === 'object' && 'value' in fv) return fv.value;
    return fv;
  }

  return undefined;
}

// Extract checkbox field value (1 = checked, 0/null/undefined = unchecked)
export function getCheckboxValue(activity: any, fieldId: string): boolean {
  const value = getRawFieldValue(activity, fieldId);
  return value === 1 || value === '1' || value === true;
}

// Extract activitylink field value (can be string ID or object with _id)
export function getActivityLinkId(activity: any, fieldId: string): string | null {
  const value = getRawFieldValue(activity, fieldId);
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && '_id' in value) return value._id;
  return null;
}

// Extract text/enum field value
export function getTextValue(activity: any, fieldId: string): string | null {
  const value = getRawFieldValue(activity, fieldId);
  if (value === undefined || value === null) return null;
  return String(value);
}
