const request = require('supertest');
const express = require('express');

jest.mock('../src/models/testRun', () => ({
  find: jest.fn(() => ({
    sort: jest.fn().mockResolvedValue([])
  }))
}));

const testRunRoutes = require('../src/routes/testRunRoutes');
const TestRun = require('../src/models/testRun');

const app = express();
app.use(express.json());
app.use('/api/test-runs', testRunRoutes);

describe('GET /api/test-runs', () => {
  it('returns 200', async () => {
    const res = await request(app).get('/api/test-runs');
    expect(res.status).toBe(200);
    expect(TestRun.find).toHaveBeenCalled();
  });
});
