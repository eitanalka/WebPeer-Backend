import express from 'express';
import testController from './controller';

const test = express.Router();

test.get('/', testController.get);

export default test;
