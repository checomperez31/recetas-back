import { Router, Request, Response } from 'express';
import RoleMiddle from '../middleware/role-middle';

const router = Router();

router.get('/', RoleMiddle.query);
router.get('/:id', RoleMiddle.find);
router.post('/', RoleMiddle.save);
router.put('/', RoleMiddle.save);
router.delete('/:id', RoleMiddle.delete);

export default router;