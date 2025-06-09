# Learning App - Server

This is the backend server for the Learning App, built with [Express.js](https://expressjs.com/) and [Sequelize](https://sequelize.org/) for MySQL.

## Features

- RESTful API for tutorials and users
- JWT-based authentication
- Password hashing with bcrypt
- File uploads with Multer
- CORS enabled for frontend integration
- Environment variable support with dotenv

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- MySQL database

### Installation

1. Install dependencies:

    ```sh
    npm install
    ```

2. Copy .env.example to .env and update the environment variables as needed.
   
   - To generate a random secret key for JWT or other secrets, you can run the following command in your terminal:
     ```sh
     node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
     ```
   - Copy the generated value and use it for your `APP_SECRET` in the `.env` file.

3. Start the server:

    ```sh
    npm start
    ```

    The server will run by default on [http://localhost:3001](http://localhost:3001).

## Tech Stack

- Express.js
- Sequelize (MySQL)
- JWT
- Multer
- bcrypt
- dotenv
