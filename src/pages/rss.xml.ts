import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '~/data/site';
import { cleanVenue } from '~/lib/format';

export async function GET(context: APIContext) {
  const pubs = await getCollection('publications');
  const sorted = pubs.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${site.nameShort} — Publications`,
    description: `Peer-reviewed publications by ${site.name}.`,
    site: context.site ?? site.url,
    items: sorted.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description:
        p.data.abstract ??
        `${p.data.authors.join(', ')} — ${cleanVenue(p.data.venue)}, ${p.data.year}.`,
      link: `/research/${p.slug}/`,
      categories: p.data.tags,
    })),
    customData: `<language>en-au</language>`,
  });
}
