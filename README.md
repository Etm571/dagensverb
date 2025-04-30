# Dagens Verb 2.0

Dagens Verb is a web application that displays a new verb every day to help users expand their vocabulary. The app is built using **Next.js**, **TypeScript**, and **Prisma ORM** for a modern and efficient development experience.

## Features

- **Daily Verb Display**: A new verb is showcased every day.
- **Modern Stack**: Built with Next.js for server-side rendering and TypeScript for type safety.
- **Database Integration**: Powered by Prisma ORM for seamless database management.

## Tech Stack

- **Frontend**: Next.js
- **Language**: TypeScript
- **Database**: Prisma ORM with PostgreSQL

## Installation (Without Docker Compose)

1. Clone the repository:
    ```bash
    git clone https://github.com/etm571/dagensverb2.0.git
    cd dagensverb2.0
    ```

2. Set up your `.env` file with your database credentials
   - Example configuration for a local Postgres installation with username "username" and password "password".

    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/dagensverb"
    
    ```
   

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the database:
    - Configure your `.env` file with the PostgreSQL database connection string.
    - Run Prisma migrations:
      ```bash
      npx prisma migrate dev
      ```
    - The database will be seeded automaticly with some Swedish verbs. If you want to skip the seeding process(not recommended), use the following command instead:
      ```bash
      npx prisma migrate dev --skip-seed
      ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Installation (With Docker Compose)

1. Clone the repository:
    ```bash
    git clone https://github.com/etm571/dagensverb2.0.git
    cd dagensverb2.0
    ```

2. Start the development server:
    ```bash
    docker-compose up --build
    ```

3. Open your browser and navigate to `http://localhost:3000`.

**Important:** When rebooting the container, please remove the old container storage before booting it up again:

    docker-compose down -v
   

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm start`: Start the production server.
- `npx prisma studio`: Open Prisma Studio to manage your database.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---  
