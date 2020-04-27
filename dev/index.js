
import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import io from 'socket.io';
import { PeerServer } from 'peer';
import Files from './classes/Files';
import Peers from './classes/Peers';

import router from './routes';

const port = process.env.PORT || 3001;
const app = express();
const ioServer = io();

const peers = new Peers();
app.set('peers', peers);

const files = new Files();
app.set('files', files);

// makes it so requests from other domains work
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

ioServer.attach(4000, {
  path: '/',
});

ioServer.on('connection', (socket) => {
  let peerId = '';
  socket.on('peerid', (id) => {
    console.log(`peer connected: ${id}`);
    peerId = id;
    peers.addPeer(peerId, socket);
    console.log('Peers', Object.keys(peers));
    socket.emit('peerrec');
  });

  socket.on('disconnect', (reason) => {
    console.log(`peer disconnected: ${peerId}`);
    console.log('reason:', reason);
    peers.deletePeer(peerId);
    files.deletePeerFiles(peerId);
    peers.notifyPeers();
  });
});

app.listen(port, () => {
  console.log('Server listening on port 3001');
});

export default app;
