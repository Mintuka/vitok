import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/posts';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { isAuthorized } from '../middlewares/isAuthorized';

const router = express.Router();

router.route('/').get(getPosts).post( isAuthenticated,createPost)
router.route('/:id').get(getPost)
.put( isAuthenticated, isAuthorized, updatePost)
.delete(isAuthenticated, isAuthorized, deletePost);

export default router;