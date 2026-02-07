import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ja', 'en']).default('ja'),
    description: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const prerequisitesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    arxiv: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  notes: notesCollection,
  prerequisites: prerequisitesCollection,
};
