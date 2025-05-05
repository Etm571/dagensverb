# Dagens Verb

Dagens Verb is a web application inspired by "Dagens sak"(https://dagenssak.se) that displays a new verb every day to help users expand their vocabulary. The app is built using **Next.js**, **TypeScript**, and **Prisma ORM** for a modern and efficient development experience. Users can also contribute by adding their own verbs to a queue which will then be displayed.

## Features

- **Daily Verb Display**: A new verb is showcased every day.
- **Modern Stack**: Built with Next.js for server-side rendering and TypeScript for type safety.
- **Database Integration**: Powered by Prisma ORM for seamless database management.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Language**: TypeScript
- **Database**: Prisma ORM with PostgreSQL

## Installation (Without Docker Compose)

1. Clone the repository:

   ```bash
   git clone https://github.com/etm571/dagensverb.git
   cd dagensverb2.0
   ```

2. Set up your `.env` files with your database credentials and credentials

   - Example configuration for a local Postgres installation with username "`username`" and password "`password`".

     ```bash
     #.env:
     DATABASE_URL="postgresql://username:password@localhost:5432/dagensverb"
     ```

   - There is an admin GUI for managing responses for "verbs" inputed in the text field. To set up a username and a password for the account, it's **<u>strongly reccomended</u>** to create a new `.env.local` file and inserting your credentials there.

     ```bash
     #.env.local:

     ADMIN_USER="username"
     ADMIN_PASS="password"
     NEXTAUTH_SECRET="secret_string"
     NEXTAUTH_URL="http://localhost:3000"
     ```

     The `NEXTAUTH_SECRET` can be generated with:

     ```bash
     openssl rand -hex 16
     ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

- Generate the Prisma Client:

- ```bash
  npx prisma generate
  ```

- Run Prisma migrations:

  ```bash
  npx prisma migrate dev
  ```

- The database will be seeded automaticly with some Swedish verbs. If you want to skip the seeding process(not recommended), use the following command instead:

  ```bash
  npx prisma migrate dev --skip-seed
  ```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`.

---

## Installation (With Docker Compose, not up-to-date)

1. Clone the repository:

   ```bash
   git clone https://github.com/etm571/dagensverb.git
   cd dagensverb2.0
   ```

2. Start the development server:

   ```bash
   docker-compose up --build
   ```

3. Open your browser and navigate to `http://localhost:3000`.

**Important:** When rebooting the container, please remove the old container storage before booting it up again:

    docker-compose down -v

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm start`: Start the production server.
- `npx prisma studio`: Open Prisma Studio to manage your database.

## Todo

1. Various frontend fixes.

2. Expand the functionality of the admin panel. The ability to see the upcoming verbs, override the queue, creating subadmins and more...

3. Better error handling and correct status codes.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [Apache License 2.0](LICENSE).

---
