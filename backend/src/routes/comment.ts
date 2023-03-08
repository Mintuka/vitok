import express from 'express';

import { getComments, getComment, createComment, updateComment, deleteComment } from '../controllers/Comment';
import { isAuthorized } from '../middlewares/commentAuthorize';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = express.Router();

router.get('/', getComments);
router.post('/', isAuthenticated, createComment);
router.get('/:id', getComment);
router.put('/:id', isAuthenticated, isAuthorized, updateComment)
router.patch('/:id', updateComment);
router.delete('/:id', isAuthenticated, isAuthorized, deleteComment);

export default router;