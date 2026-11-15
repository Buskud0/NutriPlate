const express = require('express');
const { getMe } = require('../controllers/meController');

/** All API routes. Everything except /health requires a logged-in user. */
function createRouter(requireAuth) {
  const router = express.Router();

  router.get('/health', (req, res) => res.json({ status: 'ok' }));

  router.get('/me', requireAuth, getMe);

  // Later sprints: /foods, /recipes, /tags, /profile, /meal-plans

  return router;
}

module.exports = { createRouter };
