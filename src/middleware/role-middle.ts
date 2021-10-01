import { Request, Response } from 'express';
import Role, { RoleModel } from "../models/role-model";
import pageable, { Pagination } from '../libs/page-util';

export default {
    save: async (req: Request, res: Response) => {
        if ( !req.body.role ) return res.status(400).send({message: 'No se especificó el rol'});
        const { id, role } = req.body;
        let entity: RoleModel | null = null;
        if ( id ) {
            await Role.findByIdAndUpdate( id, { role } ).catch( err => {
                return res.status( 500 ).send( { message: 'No se ha podido actualizar' } );
            });
        } else {
            entity = new Role({role});
            await entity.save().catch(err => {
                return res.status(500).send({ message: 'No se ha podido guardar' });
            });
        }
        return res.status( 200 ).send( entity );;
    },
    query: async (req: Request, res: Response) => {
        const pagination: Pagination = pageable(req.query);
        const roles: RoleModel[] = await Role.find(pagination.query, pagination.projection, pagination.options);
        return res.status( 200 ).send(roles);
    },
    find: async (req: Request, res: Response) => {
        const role: RoleModel | null = await Role.findById( req.params.id );
        return res.status(200).send(role);
    },
    delete: async (req: Request, res: Response) => {
        const role: RoleModel | null = await Role.findById( req.params.id );
        if ( role == null ) return res.status( 404 ).send({ message: 'No se encontró el rol' });
        role.status = role.status === 'A' ? 'I' : 'A';
        role.save();
        return res.status( 200 ).send( role );
    }
}