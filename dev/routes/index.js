import express from 'express';

import peer from './peer';
import file from './file';

const router = express.Router();

router.use('/peer', peer);
router.use('/file', file);

export default router;
