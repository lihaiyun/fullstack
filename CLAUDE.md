# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a progressive full-stack learning repository. Each `lab*/` directory builds on the previous, culminating in `lab7/` and `learning-app/` as the most complete implementations. The stack is **React + Vite (client)** and **Express + Sequelize (server)**.

Labs progression:
- **lab1**: Express with in-memory data only
- **lab2** (+ postgresql/sqlite variants): Adds Sequelize ORM with MySQL/PostgreSQL/SQLite
- **lab3**: Adds React client (MUI, Axios, React Router)
- **lab4** (+ mockapi variant): Adds Formik forms and date pickers; mockapi uses `axios-mock-adapter`
- **lab5**: Adds JWT auth + bcrypt password hashing + User model
- **lab6**: Adds Multer file upload
- **lab7**: Complete integration of all features (Express 5, newest packages)
- **learning-app**: Latest version (React 19, MUI 7, React Router 7)

## Common Commands

### Server (all labs)
```bash
cd <lab>/learning-app/server
npm install
cp .env.example .env   # then fill in values
npm run dev            # nodemon (hot reload)
npm start              # node index.js
```

### Client (lab3+)
```bash
cd <lab>/learning-app/client
npm install
npm run dev            # Vite dev server at http://localhost:3000
npm run build
npm run lint
```

## Environment Variables

Server `.env` pattern (lab2+):
```
APP_PORT=3001
CLIENT_URL=http://localhost:3000
DB_HOST=localhost
DB_PORT=3306          # 5432 for PostgreSQL
DB_USER=learning
DB_PWD=<password>
DB_NAME=learning
APP_SECRET=<random-hex>   # labs 5+
TOKEN_EXPIRES_IN=30d      # labs 5+
```

## Architecture

### Server Structure (lab7 / learning-app as reference)
```
server/
├── index.js          # App setup: CORS, routes, db.sync({ alter: true })
├── models/
│   ├── index.js      # Sequelize init + associations
│   ├── tutorial.js   # Tutorial model
│   └── user.js       # User model (labs 5+)
├── routes/
│   ├── tutorial.js   # CRUD + search
│   ├── user.js       # register / login / auth
│   └── file.js       # upload (labs 6+)
├── middleware/
│   ├── auth.js       # JWT validation (Authorization: Bearer <token>)
│   └── upload.js     # Multer config → public/uploads/, 1MB limit, nanoid filenames
└── public/uploads/   # Stored image files
```

**Database sync:** `db.sequelize.sync({ alter: true })` — tables are auto-created/migrated on startup. No separate migration step.

**Relationships:** `User hasMany Tutorial` (cascade delete); `Tutorial belongsTo User`. The `userId` FK is set on Tutorial.

### Client Structure (lab7 / learning-app as reference)
```
client/src/
├── App.jsx           # Router, auth guard, Navbar
├── http.js           # Axios instance: adds Bearer token from localStorage, auto-logout on 401/403
├── contexts/
│   └── UserContext.js
├── pages/            # Tutorials, AddTutorial, EditTutorial, Register, Login, MyForm
├── themes/
│   └── MyTheme.js    # MUI theme
└── global.js         # Constants (e.g. API base URL)
```

**Auth flow:** Token stored in `localStorage`. `http.js` attaches it via Axios request interceptor. 401/403 responses trigger auto-logout via response interceptor.

## Key Patterns

- **Validation:** Yup schemas defined in route files, validated server-side before DB operations.
- **Password hashing:** bcrypt with 10 salt rounds; never store plaintext.
- **File uploads:** Multer saves to `public/uploads/` with nanoid(10) prefixed filename. Route returns `{ filename }`.
- **Sequelize dialect config:** MySQL uses `timezone: '+08:00'`; PostgreSQL and SQLite use defaults.
- **No test suite** — no testing framework is configured in any lab.

## Writing Style

Use `-` (hyphen) instead of `—` (em dash) in all files.
