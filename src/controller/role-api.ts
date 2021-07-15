import { Router, Request, Response } from 'express';
import RoleMiddle from '../middleware/role-middle';

const router = Router();

router.get('/', RoleMiddle.query);

export default router;