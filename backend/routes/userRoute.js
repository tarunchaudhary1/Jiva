import express from 'express';
import {
  deleteUsersByAdmin,
  getUser,
  getUsers,
  updateUsers,
  countUsersByCity,
  sendEmails,
  changeUserPassword,
} from '../controllers/userController.js';
import {verifyToken, verifyAdminToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUsers);
router.put('/password-change/:id', verifyToken, changeUserPassword);
// router.delete('/:id', verifyToken, deleteUsers);

router.delete('/admin/:id', deleteUsersByAdmin);
router.get('/count/:city', countUsersByCity);
router.post('/:id/send-emails/:city', verifyAdminToken, sendEmails);

export default router;
