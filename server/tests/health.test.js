const request = require('supertest');
const { createApp } = require('../src/app');

describe('GET /api/health', () => {
  it('returns 200 and status ok', async () => {
    const res = await request(createApp({ verifyToken: async () => null })).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('returns 404 JSON for unknown routes', async () => {
    const res = await request(createApp({ verifyToken: async () => null })).get('/api/nope');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});
