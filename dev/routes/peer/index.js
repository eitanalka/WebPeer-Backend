import express from 'express';
import peerController from './controller';

const peer = express.Router();

peer.post('/', peerController.addPeer);
peer.delete('/', peerController.deletePeer);

export default peer;
