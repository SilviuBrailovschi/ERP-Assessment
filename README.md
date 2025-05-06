# ERP Assessment

## 1. Server setup instructions

### Navigate to server directory : ``cd server``
### Install server dependencies : ``npm install``
### Create a file named ".env" in server directory with the following :
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/invoice_db"

    JWT_SECRET="supersecret"

### Make sure you have docker installed and running then start PostgreSQL : ``docker-compose up -d``
### Push Prisma schema : ``npx prisma db push``
### Seed the database : ``npx prisma db seed``
### Start NestJS dev server : ``npm run start:dev``


## 2. Client setup instructions 

### Using a different terminal than the one server is running in navigate to client directory : ``cd client``
### Install client dependencies : ``npm install``
### Start Vite dev server : ``npm run dev``
### Access the application using the url from terminal output :
Example 

 ![img.png](img.png)
### Use demo credentials to sign in :
    email: demo@example.com
    password: password123

## 📚 Tech Stack
### Backend:

Node.js + NestJS

PostgreSQL (Dockerized)

Prisma ORM

Zod (Validation)

Passport + JWT (Auth)

### Frontend:

React + TypeScript + Vite

Redux Toolkit

React Query

Tailwind CSS + Flowbite UI
 
## 📖 Useful Links :
[NestJS Docs](https://nestjs.com/)

[Prisma Docs](https://www.prisma.io/docs)

[Zod Docs](https://zod.dev/)

[Passport.js](https://www.passportjs.org/)

[Flowbite](https://flowbite.com/)
