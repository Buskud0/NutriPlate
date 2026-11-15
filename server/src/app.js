const express = require('express');
const cors = require('cors');
const config = require('./config');
const { createAuthMiddleware } = require('./middleware/auth');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const { createRouter } = require('./routes');
const { verifySupabaseToken } = require('./lib/supabase');

function createApp({ verifyToken = verifySupabaseToken } = {}) {
  const app = express();
  app.use(cors({ origin: config.clientOrigin }));
  app.use(express.json());
  app.use('/api', createRouter(createAuthMiddleware(verifyToken)));
  app.use(notFound);
  app.use(errorHandler);
  return app;
}

module.exports = { createApp };
