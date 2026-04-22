import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    venue: z.string(),
    venueShort: z.string().optional(),
    year: z.number(),
    date: z.coerce.date(),
    doi: z.string().optional(),
    url: z.string().optional(),
    publicationType: z
      .enum(['journal', 'conference', 'preprint', 'review', 'book-chapter'])
      .default('journal'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    fwci: z.number().optional(),
    citations: z.number().optional(),
    impactFactor: z.number().optional(),
    firstAuthor: z.boolean().default(false),
    coFirstAuthor: z.boolean().default(false),
    role: z.string().optional(), // e.g. "Co-author", "External examiner"
    abstract: z.string().optional(),
    summary: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    projectSlug: z.string().optional(),
    award: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      image: image().optional(),
      imageAlt: z.string().optional(),
      github: z.string().optional(),
      paper: z.string().optional(),
      url: z.string().optional(),
      status: z.enum(['active', 'completed', 'archived']).default('completed'),
    }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string().optional(),
    date: z.coerce.date(),
    type: z.enum(['invited', 'oral', 'poster', 'seminar', 'media']).default('oral'),
    url: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyShort: z.string().optional(),
    companyUrl: z.string().optional(),
    logo: z.string().optional(),
    location: z.string().optional(),
    dateStart: z.string(),
    dateEnd: z.string().optional(), // empty = present
    current: z.boolean().default(false),
    description: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { publications, projects, talks, experience };
