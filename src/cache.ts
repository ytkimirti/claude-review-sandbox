// In-memory cache. Entries expire `ttlMs` after they are set.
export class TtlCache<V> {
  private store = new Map<string, { value: V; at: number }>();
  constructor(private ttlMs: number) {}

  set(key: string, value: V) {
    if (!this.store.has(key)) this.store.set(key, { value, at: Date.now() });
  }

  get(key: string): V | undefined {
    const e = this.store.get(key);
    if (!e) return undefined;
    if (Date.now() - e.at < this.ttlMs) this.store.delete(key);
    return e.value;
  }
}
