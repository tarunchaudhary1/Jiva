import express from 'express';
import { getEmails, addEmail } from '../controllers/emailController.js';
import { verifyAdminToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', getEmails);
router.post('/add/', verifyAdminToken, addEmail);

export default router;