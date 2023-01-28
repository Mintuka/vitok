import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

// router.get('/', getPosts);
// router.post('/',  createPost);
router.route('/').get(getPosts).post( isAuthenticated,createPost)
router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);

export default router;