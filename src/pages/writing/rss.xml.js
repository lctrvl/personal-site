import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../config';

export async function GET(context) {
  const items = (await getCollection('writing'))
    .filter((w) => !w.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${site.name} — Writing`,
    description: 'Essays, notes, and poems.',
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.subtitle || '',
      link: `/writing/${item.id}/`,
    })),
  });
}
