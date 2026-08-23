export type RelatedRouteCandidate = {
  origin: string;
  destination: string;
  priority?: number;
  href: string;
};

export function selectRelatedRouteCandidates<T extends RelatedRouteCandidate>(
  current: RelatedRouteCandidate,
  candidates: readonly T[],
  limit = 5,
): T[] {
  const unique = new Map<string, T>();

  for (const candidate of candidates) {
    const isRelated =
      candidate.origin === current.origin ||
      candidate.destination === current.destination;

    if (isRelated && candidate.href !== current.href && !unique.has(candidate.href)) {
      unique.set(candidate.href, candidate);
    }
  }

  return [...unique.values()]
    .sort((a, b) => {
      const score = (route: RelatedRouteCandidate) =>
        (route.origin === current.origin ? 100 : 0) +
        (route.destination === current.destination ? 80 : 0);
      return (
        score(b) - score(a) ||
        (b.priority ?? 0) - (a.priority ?? 0) ||
        a.href.localeCompare(b.href)
      );
    })
    .slice(0, Math.max(0, Math.min(limit, 5)));
}
