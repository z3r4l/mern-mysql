import express from 'express';
import { createUser, deleteUser, getUsers, getUsersById, updateUser } from '../controllers/UserController.js';

const router = express.Router();
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
export default router;
