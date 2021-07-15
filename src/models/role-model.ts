import mongoose, { Schema, model } from 'mongoose';

export interface RoleModel extends mongoose.Document {
    role: string
}

const Role = new Schema({
    role: String,
    insertDate: {
        type: Date,
        default: new Date( Date.now() )
    }
});

export default model<RoleModel>('Role', Role, 'role');