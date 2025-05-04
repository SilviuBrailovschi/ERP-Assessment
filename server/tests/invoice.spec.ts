import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let testUserId: string;
let testInvoiceId: string;

beforeAll(async () => {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      password: 'testpassword',
    },
  });

  testUserId = user.id;

  const invoice = await prisma.invoice.create({
    data: {
      vendor_name: 'Test Vendor',
      amount: 123.45,
      due_date: new Date(),
      description: 'Test invoice',
      userId: testUserId,
      paid: false,
    },
  });

  testInvoiceId = invoice.id;
});

afterAll(async () => {
  await prisma.invoice.deleteMany({ where: { userId: testUserId } });
  await prisma.user.delete({ where: { id: testUserId } });
  await prisma.$disconnect();
});

describe('Invoice Tests', () => {
  it('should find invoice by ID', async () => {
    const invoice = await prisma.invoice.findUnique({
      where: { id: testInvoiceId },
    });

    expect(invoice).toBeDefined();
    expect(invoice?.vendor_name).toBe('Test Vendor');
  });
});
