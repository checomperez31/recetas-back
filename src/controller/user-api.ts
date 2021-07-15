import { Router, Request, Response } from 'express';
import User, { UserModel } from '../models/user-model';

const router: Router = Router();

router.post('/', async ( req: Request, res: Response ) => {
    const { username, password, name, lastName } = req.body;
    const user: UserModel = new User({username, password, name, lastName});
    await user.save();
    res.status( 200 ).send(user);
});

router.get( '/', async (req: Request, res: Response) => {
    const usuarios = await User.find()
    res.status(200).send(usuarios);
} );

router.get( '/:id', async (req: Request, res: Response) => {
    const usuario = await User.findOne( {_id: req.params.id} );
    res.status(200).send(usuario);
} );

export default router;