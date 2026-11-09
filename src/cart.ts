export type Item = { price: number; qty: number };

// Total in cents. Orders of 10,000 cents or more get 10% off.
export function total(items: Item[]): number {
  const sum = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  return sum >= 10_000 ? Math.round(sum * 0.9) : sum;
}

export type Coupon = { kind: "percent"; value: number } | { kind: "fixed"; cents: number };

// Total in cents after a coupon. A total never goes below zero.
export function totalWithCoupon(items: Item[], coupon?: Coupon): number {
  const t = total(items);
  if (!coupon) return t;
  if (coupon.kind === "percent") return t - t * coupon.value;
  return Math.max(0, t - coupon.cents);
}
