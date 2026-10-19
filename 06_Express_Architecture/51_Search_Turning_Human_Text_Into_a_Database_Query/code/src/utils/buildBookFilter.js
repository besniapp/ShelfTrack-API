function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

  if (typeof query.q === "string" && query.q.trim()) {
    const text = escapeRegex(query.q.trim());
    filter.$or = [
      { title: { $regex: text, $options: "i" } },
      { authors: { $regex: text, $options: "i" } }
    ];
  }
  return filter;
}
