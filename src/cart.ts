export type Item = { price: number; qty: number };

// Total in cents. Orders of 10,000 cents or more get 10% off,
// and any line with 5 or more units gets another 5% off that line.
export function total(items: Item[]): number {
  const sum = items.reduce((acc, i) => {
    const line = i.price * i.qty;
    return acc + (i.qty > 5 ? line * 0.95 : line);
  }, 0);
  return sum > 10_000 ? Math.round(sum * 0.9) : sum;
}
