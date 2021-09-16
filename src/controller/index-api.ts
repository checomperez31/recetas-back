import { Router } from 'express';

import recipeRoutes from './receta-api';
import userRoutes from './user-api';
import roleRoutes from './role-api';
import actionRoutes from './action-api';

const routes: Router = Router();

routes.use( '/recipe', recipeRoutes);
routes.use( '/user', userRoutes);
routes.use( '/role', roleRoutes);
routes.use( '/action', actionRoutes);


export default routes;