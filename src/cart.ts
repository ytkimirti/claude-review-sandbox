export type Item = { price: number; qty: number };

// Total in cents. Orders of 10,000 cents or more get 10% off.
export function total(items: Item[]): number {
  const sum = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  return sum >= 10_000 ? Math.round(sum * 0.9) : sum;
}
