import { Request, Response } from 'express';
import Action, { ActionModel } from '../models/action-model';

export default {
    save: async (req: Request, res: Response) => {
        if ( !req.body.description ) return res.status(400).send({message: 'No se especificó el rol'});
        const { id, description } = req.body;
        let entity: ActionModel | null = null;
        if ( id ) {
            await Action.findByIdAndUpdate(id, {description}).catch(err => {
                return res.status( 500 ).send({message: 'No se ha podido actualizar'});
            });
        } else {
            entity = new Action({description});
            await entity.save( entity ).catch(err => {
                return res.status( 500 ).send({message: 'No se ha podido guardar'});
            });
        }
        return res.status( 200 ).send( entity );
    },
    query: async () => {},
    find: async () => {},
};