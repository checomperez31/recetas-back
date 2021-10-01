import { Request, Response } from 'express';
import pageable, { Pagination } from '../libs/page-util';
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
            await entity.save().catch(err => {
                return res.status( 500 ).send({message: 'No se ha podido guardar'});
            });
        }
        return res.status( 200 ).send( entity );
    },
    query: async (req: Request, res: Response) => {
        const pagination: Pagination = pageable(req.query);
        const actions: ActionModel[] = await Action.find(pagination.query, pagination.projection, pagination.options);
        return res.status(200).send(actions);
    },
    find: async (req: Request, res: Response) => {
        const action: ActionModel | null = await Action.findById( req.params.id );
        return res.status(200).send(action);
    },
    delete: async (req: Request, res: Response) => {
        const action: ActionModel | null = await Action.findById( req.params.id );
        if ( action == null ) return res.status( 400 ).send( { message: 'No se ha encontrado la acción' } );
        action.status = action.status == 'A' ? 'I' : 'A';
        await action.save().catch(err => {
            return res.status( 500 ).send({message: 'No se ha podido guardar'});
        });
        return res.status( 200 ).send( action );
    }
};