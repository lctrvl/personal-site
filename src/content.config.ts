import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    domain: z.enum(['craft', 'code', 'road', 'table']),
    kind: z.string(),
    date: z.date(),
    dateEnd: z.date().optional(),
    status: z.enum(['active', 'complete', 'ongoing', 'shelved']).default('complete'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    pullquote: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    kind: z.enum(['professional', 'personal', 'poem']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const plants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plants' }),
  schema: z.object({
    commonName: z.string(),
    botanicalName: z.string().optional(),
    nickname: z.string().optional(),
    arrived: z.date(),
    departed: z.date().optional(),
    status: z.enum(['with-me', 'gone', 'propagated', 'rehomed']).default('with-me'),
    origin: z.string().optional(),
    location: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    pullquote: z.string().optional(),
  }),
});

const meals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/meals' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    commentary: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing, plants, meals };