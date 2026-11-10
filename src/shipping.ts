// Shipping in cents. Orders of 5,000 cents or more ship free; others pay a flat 499.
export function shipping(subtotal: number): number {
  return subtotal >= 5_000 ? 0 : 499;
}

// International orders never ship free: they pay the flat 499 plus a 1,500 surcharge.
export function internationalShipping(subtotal: number): number {
  return shipping(subtotal) + 1_500;
}
