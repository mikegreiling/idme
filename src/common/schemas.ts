import { z } from 'zod';

export const purchaseSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
  purchaseDate: z.string().datetime({ offset: true }),
  category: z.string(),
  description: z.string(),
  price: z.number(),
});

export const purchasesSchema = z.array(purchaseSchema);

export type Purchase = z.infer<typeof purchaseSchema>;
