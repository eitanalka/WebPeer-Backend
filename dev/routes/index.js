import express from 'express';

import test from './test';
import peer from './peer';
import file from './file';

const router = express.Router();

router.use('/test', test);
router.use('/peer', peer);
router.use('/file', file);

export default router;
