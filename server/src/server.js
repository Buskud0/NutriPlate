const config = require('./config');
const { createApp } = require('./app');

createApp().listen(config.port, () => {
  console.log(`NutriPlate API listening on http://localhost:${config.port}`);
});
