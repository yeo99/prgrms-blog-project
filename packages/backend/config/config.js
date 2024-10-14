// /packages/backend/config/config.js
const path = require('path');
require('dotenv').config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === 'production'
      ? '../../../.env.production'
      : '../../../.env.local'
  ),
});

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.PROD_DB_DIALECT,
  },
};
