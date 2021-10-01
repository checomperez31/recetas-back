import mongoose, { Schema, model } from 'mongoose';

export interface RoleModel extends mongoose.Document {
    role: string,
    status: string
}

const Role = new Schema({
    role: String,
    insertDate: {
        type: Date,
        default: new Date( Date.now() )
    },
    status: {
        type: String,
        default: 'A'
    }
});

export default model<RoleModel>('Role', Role, 'role');