export function cleanVenue(venue: string): string {
  return venue.replace(/^In\s+/i, '').trim();
}

export function cleanDoi(doi?: string): string | undefined {
  if (!doi) return undefined;
  return doi.replace(/^(https?:\/\/)?(dx\.)?doi\.org\//, '').trim();
}

export function doiUrl(doi?: string): string | undefined {
  const clean = cleanDoi(doi);
  return clean ? `https://doi.org/${clean}` : undefined;
}

export function formatDate(date: Date | string, opts: Intl.DateTimeFormatOptions = {}): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'short',
    ...opts,
  });
}

export function formatMonthYear(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'short' });
}

export function formatFullMonthYear(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'long' });
}

export function authorRole(pub: { firstAuthor?: boolean; coFirstAuthor?: boolean; role?: string }): string | undefined {
  if (pub.coFirstAuthor) return 'Co-first author';
  if (pub.firstAuthor) return 'First author';
  return pub.role;
}

export function formatAuthors(authors: string[], self = 'Zhaoxiang Cai', max = 6): string {
  const highlight = (a: string) => (a === self ? `<strong>${a}</strong>` : a);
  if (authors.length <= max) return authors.map(highlight).join(', ');
  const first = authors.slice(0, 3).map(highlight);
  const last = authors.slice(-1).map(highlight);
  return `${first.join(', ')}, …, ${last.join(', ')}`;
}

export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
