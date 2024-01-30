# ☕ Jay's Coffee

My web app for Apple's take-home project.

You can try out the web app [🔗here](https://jayscoffee.vercel.app).

![](./public/web-app%20screenshot.png)


## Usage
> Prerequisites: Node.js

> Setup environment and run backend first, then frontend.

### Backend setup 
Git clone repository
```
git clone https://github.com/JinnyWong/JaysCoffee-backend.git
```

Install packages
```
npm i 
```

Setup & modify `.env` file
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXTHAUTH_SECRET= 

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

Connect to Prisma & Supabase. Then, config `.env` file & `schema.prisma` to setup `DATABASE_URL` & `DIRECT_URL` as [shown here](https://supabase.com/partners/integrations/prisma). Then in terminal:
```
npx prisma init
npx prisma generate
npx prisma db push
```
Setup Cloudinary and get cloud name for `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` for in `.env`. Then, go to Cloudinary settings, and setup a new **unsigned** upload preset. Import the upload preset name into:
```typescript
//image-upload.tsx

<CldUploadWidget onUpload={onUpload} uploadPreset="ENTER_UPLOAD_PRESET_NAME_HERE ">
```


Setup Stripe & webhook to get `STRIPE_API_KEY` & `STRIPE_WEBHOOK_SECRET` for `.env`

Then in Stripe dashboard settings, setup Stripe webhooks for local listeners (to run locally) or hosted endpoints (deploying to the cloud).
![](./public/webhook.PNG)

```typescript 
// in root file terminal 

stripe listen --forward-to localhost:3000/api/webhook
```


Start the app
```
npm run dev
```
The app will start running now in `localhost:3000`

### Frontend setup

Git clone repository
```
git clone https://github.com/JinnyWong/JaysCoffee.git
```

Install packages
```
npm i
```

Setup `.env` file and get the `NEXT_PUBLIC_API_URL=` from backend dashboard settings.

Start the app
```
npm run dev
```

### Deploying to Vercel
Commit all changes to GitHub project repository.

Then, connect Vercel project to your GitHub project repository.

Go to [https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32) to generate `NEXTAUTH_SECRET` in `.env` for both the backend and frontend.

Add your environment variables in the Vercel project settings. 

## App Features

User functions: 
- View and pre-order drinks
- Make secure payments
- In-app map navigation to the shop

Admin functions: 
- Admin authentication
- Dashboard to show sales report
- Content manageres

## Tech Stack

- `Tailwind CSS` 
- `Radix` + `Shadcn` UI
- `TypeScript`
- `Next.js`
- `Cloudinary` image hosting 
- `Clerk` authentication
- `PostgreSQL` + `Supabase` database 
- `Prisma` ORM
- `Stripe` payments
- `MappedIn Web SDK` in-mall map navigation
- `Vercel` cloud deployment 

## License 
Copyright © 2024 JinnyWong

Licensed under the [MIT License](https://github.com/JinnyWong/JaysCoffee/blob/main/LICENSE).
