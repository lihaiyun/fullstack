# Server

## Setup

1) Create the environment file:

- Copy .env.example to **.env** and update the environment variables as needed.

2) Install dependencies (including sqlite3):
```bash
npm install sqlite3
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
- Update DB_FILE value if you want to change the SQLite database file name and location.
- For testing the API endpoints, refer to [curl-commands.md](curl-commands.md).