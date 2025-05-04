import { z } from 'zod';

export const InvoiceParamsSchema = z.object({
  id: z.string().uuid(),
});
export type InvoiceParams = z.infer<typeof InvoiceParamsSchema>;
