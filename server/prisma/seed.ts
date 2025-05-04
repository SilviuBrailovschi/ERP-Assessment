import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  await prisma.invoice.deleteMany()

  // Delete all users (you might need to delete invoices first if foreign key constraints exist)
  await prisma.user.deleteMany()

  // Optionally, you can add more deletion for other tables if needed.
  // await prisma.someOtherModel.deleteMany()

  console.log('All records have been deleted.')

  const password = await bcrypt.hash('password123', 10)
  const user = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      name: 'Demo User',
      password
    }
  })

  await prisma.invoice.createMany({
    data: [
      {
        vendor_name: 'Amazon',
        amount: 199.99,
        due_date: new Date(),
        description: 'Cloud services',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Netflix',
        amount: 15.99,
        due_date: new Date(),
        description: 'Streaming subscription',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Spotify',
        amount: 9.99,
        due_date: new Date(),
        description: 'Music subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Adobe',
        amount: 29.99,
        due_date: new Date(),
        description: 'Software subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Apple',
        amount: 49.99,
        due_date: new Date(),
        description: 'iCloud services',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Google',
        amount: 19.99,
        due_date: new Date(),
        description: 'Google Workspace subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Hulu',
        amount: 11.99,
        due_date: new Date(),
        description: 'Streaming subscription',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Dropbox',
        amount: 9.99,
        due_date: new Date(),
        description: 'Cloud storage subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Slack',
        amount: 6.67,
        due_date: new Date(),
        description: 'Team collaboration tool',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Zoom',
        amount: 14.99,
        due_date: new Date(),
        description: 'Video conferencing subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Spotify',
        amount: 9.99,
        due_date: new Date(),
        description: 'Premium music service',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Microsoft',
        amount: 69.99,
        due_date: new Date(),
        description: 'Office 365 subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Tesla',
        amount: 499.99,
        due_date: new Date(),
        description: 'Car service',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Samsung',
        amount: 999.99,
        due_date: new Date(),
        description: 'New phone',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Nike',
        amount: 120.00,
        due_date: new Date(),
        description: 'Sportswear purchase',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Spotify',
        amount: 19.99,
        due_date: new Date(),
        description: 'Spotify Family subscription',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Amazon',
        amount: 49.99,
        due_date: new Date(),
        description: 'Prime membership',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'Airbnb',
        amount: 350.00,
        due_date: new Date(),
        description: 'Vacation rental',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Uber',
        amount: 60.00,
        due_date: new Date(),
        description: 'Rideshare charges',
        userId: user.id,
        paid: true
      },
      {
        vendor_name: 'DoorDash',
        amount: 30.00,
        due_date: new Date(),
        description: 'Food delivery',
        userId: user.id,
        paid: false
      },
      {
        vendor_name: 'Shopify',
        amount: 29.99,
        due_date: new Date(),
        description: 'E-commerce platform subscription',
        userId: user.id,
        paid: false
      }
    ]
  })
}

main().finally(() => {
  prisma.$disconnect()
})
