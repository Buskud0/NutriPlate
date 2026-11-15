const request = require('supertest');
const { createApp } = require('../src/app');
const { createAuthMiddleware } = require('../src/middleware/auth');

const user = { id: 'user-1', email: 'test@example.com' };
const verifyToken = async (token) => (token === 'good-token' ? user : null);
const app = createApp({ verifyToken });

describe('auth middleware via GET /api/me', () => {
  it('rejects a request without a token (401)', async () => {
    const res = await request(app).get('/api/me');
    expect(res.status).toBe(401);
  });

  it('rejects a malformed Authorization header (401)', async () => {
    const res = await request(app).get('/api/me').set('Authorization', 'good-token');
    expect(res.status).toBe(401);
  });

  it('rejects an invalid token (401)', async () => {
    const res = await request(app).get('/api/me').set('Authorization', 'Bearer bad-token');
    expect(res.status).toBe(401);
  });

  it('returns the current user for a valid token', async () => {
    const res = await request(app).get('/api/me').set('Authorization', 'Bearer good-token');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(user);
  });
});

describe('createAuthMiddleware', () => {
  it('passes errors from the verifier to next()', async () => {
    const boom = new Error('supabase down');
    const mw = createAuthMiddleware(async () => { throw boom; });
    const next = jest.fn();
    await mw({ headers: { authorization: 'Bearer x' } }, {}, next);
    expect(next).toHaveBeenCalledWith(boom);
  });
});
