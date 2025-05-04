import { z } from 'zod';

export const PaginationParamsSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).default(10),
});

export type PaginationParams = z.infer<typeof PaginationParamsSchema>;
