import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { getPagination } from 'src/common/utils/pagination';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number = 1, limit: number = 10) {
    const pagination = getPagination({ page, limit });

    const [invoices, total] = await this.prisma.$transaction([
      this.prisma.invoice.findMany({
        skip: pagination.skip,
        take: pagination.take,
      }),
      this.prisma.invoice.count(),
    ]);

    return {
      invoices,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }
}
