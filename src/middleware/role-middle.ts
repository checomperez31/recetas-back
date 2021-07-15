import { Request, Response } from 'express';
import Role, { RoleModel } from "../models/role-model";

export default {
    save: async (req: Request, res: Response) => {},
    query: async (req: Request, res: Response) => {
        const roles: RoleModel[] = await Role.find();
        return res.status( 200 ).send(roles);
    },
}