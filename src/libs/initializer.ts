import Role, { RoleModel } from "../models/role-model";

export default async() => {
    try {
        const roles: RoleModel[] = await Role.find();
        if (!roles || roles.length === 0) {
            await Role.create( { role: 'admin' } );
            await Role.create( { role: 'user' } );
        }
    } catch( error ) {
        console.log('No se han podido inicializar los roles');
        console.log(error);
    }
}