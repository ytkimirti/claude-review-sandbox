import { pageSize } from "./page";

export type Order = { id: string; total: number };

// Lists one page of orders for the dashboard.
export async function listOrders(baseUrl: string, limit: number, cursor?: string): Promise<Order[]> {
  const url = `${baseUrl}/orders?limit=${pageSize(limit)}${cursor ? `&cursor=${cursor}` : ""}`;
  const res = await fetch(url);
  const body = await res.json();
  return body.orders;
}
