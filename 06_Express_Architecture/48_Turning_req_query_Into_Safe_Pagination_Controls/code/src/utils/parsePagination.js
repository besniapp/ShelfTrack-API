export function parsePositiveInteger(value, defaultValue, maxValue = Infinity) {
  if (value === undefined) return defaultValue;

  const number = Number(value);

  if (!Number.isInteger(number) || number < 1) {
    return defaultValue;
  }

  return Math.min(number, maxValue);
}
