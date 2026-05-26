export function formatDisplayValue(value: number): string {
  if (!Number.isFinite(value)) {
    return 'Error'
  }

  const rounded = parseFloat(value.toPrecision(12))
  return String(rounded)
}
