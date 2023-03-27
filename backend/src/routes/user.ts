import express from 'express';

import { getUsers, getUser, updateUser, deleteUser } from '../controllers/User';
import { forgotPassword } from '../services/forgotPassword';
import { login } from '../services/login'
import { resetPassword } from '../services/resetPassword';
import { signup } from '../services/signup'

const router = express.Router();

router.post('/login', login)
router.post('/resetPassword', resetPassword)
router.post('/forgotPassword', forgotPassword)
router.get('/', getUsers);
router.post('/', signup);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;