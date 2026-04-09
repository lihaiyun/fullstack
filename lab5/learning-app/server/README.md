# Server

## Setup

1) Create the environment file:

- Copy .env.example to **.env** and update the environment variables as needed.

- To generate a random secret key for JWT or other secrets, you can run the following command in your terminal:
```bash
    node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

- Copy the generated value and use it for your `APP_SECRET` in the `.env` file.

2) Install dependencies:
```bash
npm install
```

3) Start the server:

- For development:
```bash
   npm run dev
```

- For production:
```bash
   npm start
```

- The server will run by default on [http://localhost:3001](http://localhost:3001).

## Notes

- Run `npm update` to fix vulnerabilities and update dependencies to their latest versions.
