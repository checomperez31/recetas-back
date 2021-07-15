import { Router, Request, Response } from 'express';
import Recipe, { RecipeModel } from '../models/recipe-model';

const router: Router = Router();

router.post( '/', async ( req: Request, res: Response ) => {
    const { title, description } = req.body;
    const recipe: RecipeModel = new Recipe({title, description});
    await recipe.save();
    res.status(200).send('OK');
} );

router.get( '/', async ( req: Request, res: Response ) => {
    const recipes = await Recipe.find();
    res.status( 200 ).send(recipes);
} );

export default router;