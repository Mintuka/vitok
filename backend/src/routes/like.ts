import express from 'express';

import { updatedLike } from '../controllers/like';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isAuthorized } from '../middlewares/isAuthorized';

const router = express.Router();

router.route('/:postId').get(isAuthenticated,updatedLike)

export default router;