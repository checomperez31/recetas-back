import {Router} from 'express';
import ActionMiddle from '../middleware/action-middle';

const router: Router = Router();

router.post('/', ActionMiddle.save);
router.put('/', ActionMiddle.save);
router.get('/', ActionMiddle.query);
router.get('/:id', ActionMiddle.find);

export default router;