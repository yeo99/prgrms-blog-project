import express from 'express';
// router
import HelloRoute from './routes/HelloRoute.js';

const app = express();
const port = 8080;

app.use('/', HelloRoute);

app.listen(port, () => {
  console.log(`Server is running`);
});
