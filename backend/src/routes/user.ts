import express from 'express';

import { getUsers, getUser, updateUser, deleteUser } from '../controllers/User';
import { login } from '../services/login'
import { signup } from '../services/signup'

const router = express.Router();

router.post('/login', login)
router.get('/', getUsers);
router.post('/', signup);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;