import express from 'express';
import fileController from './controller';

const file = express.Router();

file.post('/', fileController.addFile);
file.delete('/', fileController.deleteFile);
file.get('/', fileController.getFiles);

export default file;
