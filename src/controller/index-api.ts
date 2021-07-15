import { Router } from 'express';

import recipeRoutes from './receta-api';
import userRoutes from './user-api';
import roleRoutes from './role-api';

const routes: Router = Router();

routes.use( '/recipe', recipeRoutes);
routes.use( '/user', userRoutes);
routes.use( '/role', roleRoutes);


export default routes;