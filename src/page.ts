// Returns page `page` (1-based) of `items`, `size` items per page,
// and whether another page follows.
export function paginate<T>(items: T[], page: number, size: number) {
  const start = page * size;
  const slice = items.slice(start, start + size);
  return { items: slice, hasMore: start + size <= items.length };
}
