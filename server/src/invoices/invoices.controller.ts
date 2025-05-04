import { Controller, Get, Param, Query, UseGuards  } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InvoicesService } from './invoices.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { InvoiceParamsSchema, InvoiceParams } from './dto/params.dto';
import { PaginationParamsSchema, PaginationParams } from './dto/pagination.dto';

@Controller('invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  async findAll(
    @Query(new ZodValidationPipe(PaginationParamsSchema)) pagination: PaginationParams,
  ) {
    return this.invoicesService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(
    @Param(new ZodValidationPipe(InvoiceParamsSchema)) params: InvoiceParams,
  ) {
    return this.invoicesService.findOne(params.id);
  }
}
