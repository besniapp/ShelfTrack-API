export function parsePositiveInt(value, fallback, max) {
  if (value === undefined) return fallback;
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) return fallback;
  return Math.min(number, max);
}

export function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function paginationMeta({ page, limit, totalItems }) {
  const totalPages = Math.ceil(totalItems / limit);
  return {
    page, limit, totalItems, totalPages,
    hasPreviousPage: page > 1,
    hasNextPage: page < totalPages,
  };
}
