import type { CollectionEntry } from 'astro:content';
import { cleanDoi, cleanVenue } from './format';

function citeKey(pub: CollectionEntry<'publications'>): string {
  const first = (pub.data.authors[0] ?? 'cai').toLowerCase().split(/\s+/).slice(-1)[0];
  const slug = pub.slug.split('/').pop()!.replace(/[^a-z0-9]+/gi, '');
  return `${first}${pub.data.year}${slug}`.toLowerCase().slice(0, 40);
}

export function toBibtex(pub: CollectionEntry<'publications'>): string {
  const d = pub.data;
  const key = citeKey(pub);
  const venue = cleanVenue(d.venue);
  const entryType = d.publicationType === 'conference' ? 'inproceedings' : 'article';
  const fields: Array<[string, string | undefined]> = [
    ['title', `{${d.title}}`],
    ['author', d.authors.join(' and ')],
    [entryType === 'inproceedings' ? 'booktitle' : 'journal', venue],
    ['year', String(d.year)],
    ['doi', cleanDoi(d.doi)],
  ];
  const lines = fields
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(',\n');
  return `@${entryType}{${key},\n${lines}\n}`;
}
