import express from 'express';

import { getComments, getComment, createComment, updateComment, deleteComment } from '../controllers/Comment';

const router = express.Router();

router.get('/', getComments);
router.post('/', createComment);
router.get('/:id', getComment);
router.put('/:id', updateComment)
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;