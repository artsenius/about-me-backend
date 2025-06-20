# About Me Backend

This backend is designed to store Playwright test runs history.

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

### Playwright Test Runs
- `GET /api/test-runs` - List all test runs (sorted by start time, newest first)
- `POST /api/test-runs` - Create a new test run

#### Example payload for creating a test run:
```json
{
  "project": "my-playwright-project",
  "status": "passed",
  "startedAt": "2025-06-20T10:00:00Z",
  "finishedAt": "2025-06-20T10:05:00Z",
  "duration": 300000,
  "results": { "passed": 10, "failed": 0 }
}
```
