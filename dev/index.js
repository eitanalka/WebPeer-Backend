
import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';

const port = process.env.PORT || 3001;
const app = express();

// makes it so requests from other doamins work
app.use(cors());

// log incoming requests
app.use(morgan('combined'));

// parse json object before sending it to router
app.use(express.json());

// all api requests are expected to start with /api
app.use('/api', router);

app.listen(port, () => {
  console.log('Server listening on port 3001');
});

export default app;