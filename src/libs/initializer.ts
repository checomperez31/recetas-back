import Action, { ActionModel } from "../models/action-model";
import Role, { RoleModel } from "../models/role-model";

export default async() => {
    try {
        // If there are not roles we create the basics :)
        const roles: RoleModel[] = await Role.find();
        if (!roles || roles.length === 0) {
            console.log('Initializing roles');
            await Role.create( { role: 'Administrator' } );
        }

        // Do the same with actions
        const actions: ActionModel[] = await Action.find();
        if ( !actions || actions.length === 0 ) {
            console.log('Initializing actions');
            await Action.create( { description: 'admin' } );
        }
    } catch( error ) {
        console.log('No se han podido inicializar los roles');
        console.log(error);
    }
}