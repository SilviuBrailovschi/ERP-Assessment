import {
  PipeTransform,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { ZodTypeAny, ZodError } from 'zod';

@Injectable()
export class ZodValidationPipe<T extends ZodTypeAny>
  implements PipeTransform<unknown, T['_output']>
{
  constructor(private schema: T) {}

  transform(value: unknown): T['_output'] {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      const formatted = (result.error as ZodError).flatten().fieldErrors;
      throw new BadRequestException({ validationErrors: formatted });
    }
    // result.data is typed as the inferred output of T
    return result.data;
  }
}
