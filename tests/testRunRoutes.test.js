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

describe('GET /api/test-runs/summary', () => {
  it('respects the limit query parameter', async () => {
    const mockSelect = jest.fn().mockReturnThis();
    const mockSort = jest.fn().mockReturnThis();
    const mockLimit = jest.fn().mockResolvedValue([{ id: 1 }, { id: 2 }]);
    TestRun.find.mockReturnValue({ select: mockSelect, sort: mockSort, limit: mockLimit });

    const res = await request(app).get('/api/test-runs/summary?limit=2');
    expect(res.status).toBe(200);
    expect(mockLimit).toHaveBeenCalledWith(2);
    expect(res.body).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('defaults to 20 if limit is not provided or invalid', async () => {
    const mockSelect = jest.fn().mockReturnThis();
    const mockSort = jest.fn().mockReturnThis();
    const mockLimit = jest.fn().mockResolvedValue([]);
    TestRun.find.mockReturnValue({ select: mockSelect, sort: mockSort, limit: mockLimit });

    await request(app).get('/api/test-runs/summary');
    expect(mockLimit).toHaveBeenCalledWith(20);

    await request(app).get('/api/test-runs/summary?limit=invalid');
    expect(mockLimit).toHaveBeenCalledWith(20);
  });
});
