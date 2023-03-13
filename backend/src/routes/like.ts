import express from 'express';

import { updatedLike } from '../controllers/like';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = express.Router();

router.route('/:postId').get(isAuthenticated,updatedLike)

export default router;