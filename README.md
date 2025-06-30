# About Me Backend

This backend is designed to store Playwright test run history.

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
- `GET /api/test-runs/summary` - List a summary of recent test runs (supports `limit` query parameter)

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

#### Example: Get a summary of the last N test runs

`GET /api/test-runs/summary?limit=5`

- **limit** (optional): Number of records to return. Defaults to 10 if not provided or invalid.

**Example response:**
```json
[
  {
    "_id": "665f1c2e1a2b3c4d5e6f7a8b",
    "project": "my-playwright-project",
    "status": "passed",
    "startedAt": "2025-06-20T10:00:00Z",
    "finishedAt": "2025-06-20T10:05:00Z",
    "results": { "passed": 10, "failed": 0 }
  },
  // ...more test runs
]
```
