import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAuthorized } from '../middlewares/isAuthorized.js';

const router = express.Router();

router.route('/').get(getPosts).post( isAuthenticated,createPost)
router.route('/:id').get(getPost)
.put( isAuthenticated, isAuthorized, updatePost)
.delete(isAuthenticated, isAuthorized, deletePost);

export default router;