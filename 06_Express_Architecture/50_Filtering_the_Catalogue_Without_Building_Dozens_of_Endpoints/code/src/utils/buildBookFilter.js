export function buildBookFilter(query) {
  const filter = {};

  if (typeof query.category === "string" && query.category.trim()) {
    filter.category = query.category.trim().toLowerCase();
  }

  if (typeof query.language === "string" && query.language.trim()) {
    filter.language = query.language.trim();
  }

  if (query.year !== undefined) {
    const year = Number(query.year);
    if (Number.isInteger(year)) {
      filter.publishedYear = year;
    }
  }

  if (query.minAvailable !== undefined) {
    const min = Number(query.minAvailable);
    if (Number.isInteger(min) && min >= 0) {
      filter.availableCopies = { $gte: min };
    }
  }

  return filter;
}
