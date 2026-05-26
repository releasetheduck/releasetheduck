import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Music-specific fields
			artist: z.string().optional(),
			album: z.string().optional(),
			rating: z.number().min(1).max(10).optional(),
			genre: z.array(z.string()).optional(),
			type: z.enum(['review', 'journal', 'essay']).default('journal'),
		}),
});

export const collections = { blog };
