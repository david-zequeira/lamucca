import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content model — see DESIGN-DECISIONS.md #006 (content honesty).
 * Every entry is populated only from verified sources (docs/research/).
 * `verified: false` fields render as generic copy, never invented specifics.
 */
const restaurants = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/restaurants' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    /** Which line of the group this venue belongs to */
    concept: z
      .enum(['lamucca', 'pescaderia', 'ultramarines', 'enbruto', 'club', 'makaa', 'kiosco', 'mar'])
      .default('lamucca'),
    neighborhood: z.string(),
    address: z.string(),
    city: z.string().default('Madrid'),
    /** One-line personality, in the brand's voice */
    tagline: z.string(),
    /** Editorial paragraph describing the space & vibe */
    description: z.string(),
    /** What makes this venue distinct within the group */
    character: z.array(z.string()).default([]),
    phone: z.string().optional(),
    bookingUrl: z.string().url().optional(),
    menuUrl: z.string().url().optional(),
    mapsUrl: z.string().url().optional(),
    hours: z.string().optional(),
    openedYear: z.number().optional(),
    /* --- Discovery taxonomy (Chapter 04 picker) ---------------------------
       Editorial classifications DERIVED from the verified descriptions above —
       never invented capabilities. If a venue's fitness for a tag isn't
       supported by its sourced description, the tag is omitted. */
    moods: z.array(z.enum(['animado', 'tranquilo', 'castizo', 'luminoso', 'secreto'])).default([]),
    occasions: z
      .array(z.enum(['pareja', 'amigos', 'familia', 'trabajo', 'celebracion', 'tardeo']))
      .default([]),
    zone: z
      .enum(['centro', 'malasana', 'chamberi', 'salamanca', 'norte', 'oeste', 'fuera'])
      .optional(),
    times: z.array(z.enum(['desayuno', 'comida', 'tardeo', 'cena', 'tarde'])).default([]),
    groups: z.array(z.enum(['dos', 'pocos', 'muchos', 'ninos', 'solo'])).default([]),
    features: z.array(z.string()).default([]),
    /** Display order on the site */
    order: z.number().default(99),
    /** Accent used for this venue's editorial spreads */
    accent: z.enum(['tomato', 'butter', 'olive']).default('tomato'),
    /** Every entry states where its facts came from */
    sources: z.array(z.string()).default([]),
    verified: z.boolean().default(false),
  }),
});

export const collections = { restaurants };
