# Invoice Manager API

## 📦 Tech Stack

Node.js + NestJS (API framework)

PostgreSQL (Relational DB)

Prisma (ORM)

Zod (Request validation)

Passport + JWT (Authentication)

Docker (Local dev environment)

## 🚀 Getting Started

### 1. Navigate to server dir

``cd server``

### 2. Install Dependencies

``npm install``

### 3. Setup Environment Variables

Create a .env file based on the example:

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/invoice_db"

JWT_SECRET="supersecret"

### 4. Run the Development Server


Make sure Docker is installed and running.
1. Start the PostgreSQL container:

``docker-compose up -d``

2. Push the Prisma schema to the database:

``npx prisma db push ``    

3. Seed the database:

``npx prisma db seed ``

4. Start the NestJS development server:

``npm run start:dev``


## 🧪 Running Tests

``npm test``

## Demo login:

Email: demo@example.com

Password: password123

## 🧾 API Endpoints

### 🔐 Auth

POST /auth/loginAuthenticates a user and returns a JWT.

### 📄 Invoices

GET /invoicesReturns a paginated list of invoices.Supports ?page=1&limit=10 query parameters.

GET /invoices/:idReturns details of a specific invoice.



## 📚 Resources

NestJS Docs : https://nestjs.com/

Prisma Docs : https://www.prisma.io/docs

Zod Docs : https://zod.dev/

Passport + JWT : https://www.passportjs.org/