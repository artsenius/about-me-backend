# About Me Backend

This is a simple Express.js + MongoDB backend for the About Me app.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set your MongoDB connection string in `.env`:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```
3. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints
- `GET /api/users` - List all users
- `POST /api/users` - Create a new user
