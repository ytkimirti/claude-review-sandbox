export const MAX_PAGE = 100;

export function pageSize(requested: number): number {
  return Math.min(Math.max(1, requested), MAX_PAGE);
}
