import { defineCollection, z } from 'astro:content';

// Unified projects collection — professional, craft, and personal projects
// live in the same system. The `domain` field distinguishes them.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    domain: z.enum(['craft', 'code', 'road', 'table']),
    // What kind of work is this — used as a subtitle
    kind: z.string(), // e.g. "Procurement transformation", "Woodworking", "Long-distance ride"
    // When the work happened
    date: z.date(),
    dateEnd: z.date().optional(),
    status: z.enum(['active', 'complete', 'ongoing', 'shelved']).default('complete'),
    // Skills, tools, materials, themes — whatever applies
    tags: z.array(z.string()).default([]),
    // Hero image
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Order on listing (lower = earlier)
    order: z.number().default(0),
    // Hide from listings without deleting
    draft: z.boolean().default(false),
    // Optional one-line pull quote shown on the project card
    pullquote: z.string().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    kind: z.enum(['essay', 'poem', 'note', 'reflection']).default('essay'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
