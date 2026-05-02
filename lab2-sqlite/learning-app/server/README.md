# Server

## Setup

1) Install the following VS Code extensions:

- **REST Client** - send HTTP requests from `.http` files
- **SQLite Viewer** - browse the SQLite database file

2) Create the environment file:

- Copy .env.example to **.env** and update the environment variables as needed.

3) Install dependencies (including sqlite3):
```bash
npm install sqlite3
```

4) Start the server:

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
