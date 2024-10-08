const express = require('express')
const { sequelize } = require('../models');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '../../../.env.production' : '../../../.env.local'
});

// router
const HelloRoute = require('./routes/HelloRoute.js')

const app = express();
app.use(express.json())

const port = 8080;

app.use('/', HelloRoute);

app.listen(port, () => {
  console.log(`Server is running`);
});

// Sequelize를 사용한 데이터베이스 연결 테스트
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });