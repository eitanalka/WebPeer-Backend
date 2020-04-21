
import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PeerServer } from 'peer';

import router from './routes';

const port = process.env.PORT || 3001;
const app = express();

app.set('peers', {});
app.set('files', {});

// makes it so requests from other doamins work
app.use(cors());

// log incoming requests
app.use(morgan('combined'));

// parse json object before sending it to router
app.use(express.json());

// all api requests are expected to start with /api
app.use('/api', router);

PeerServer({ port: 9000, path: '/peerserver' }, () => {
  console.log('Peer server listening on port 9000');
});

app.listen(port, () => {
  console.log('Server listening on port 3001');
});

export default app;
