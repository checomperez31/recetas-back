import mongoose, {Schema, model} from 'mongoose';

export interface ActionModel extends mongoose.Document {
    description: string,
    status: string
}

const Action = new Schema({
    description: String,
    insertDate: {
        type: Date,
        default: new Date( Date.now() )
    },
    status: {
        type: String,
        default: 'A'
    }
});

export default model<ActionModel>('Action', Action, 'action');