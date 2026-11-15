/**
 * Creates the authentication middleware.
 * `verifyToken(token)` must resolve to a user object ({ id, email }) or null.
 * Injecting it keeps the middleware testable without a real Supabase project.
 */
function createAuthMiddleware(verifyToken) {
  return async function requireAuth(req, res, next) {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ error: 'Missing or malformed Authorization header' });
    }

    try {
      const user = await verifyToken(token);
      if (!user) {
        return res.status(401).json({ error: 'Invalid or expired token' });
      }
      req.user = user;
      return next();
    } catch (err) {
      return next(err);
    }
  };
}

module.exports = { createAuthMiddleware };
