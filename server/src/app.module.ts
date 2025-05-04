import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    InvoicesModule,
  ],
})
export class AppModule {}
