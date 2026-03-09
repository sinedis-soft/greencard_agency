const ipCache = new Map<string, number>();
const WINDOW_MS = 60_000;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const lastHit = ipCache.get(ip);

  if (lastHit && now - lastHit < WINDOW_MS) {
    return false;
  }

  ipCache.set(ip, now);
  return true;
}
