import mongoose, {Schema, model} from 'mongoose';

export interface ActionModel extends mongoose.Document {
    description: string
}

const Action = new Schema({
    description: String,
    insertDate: {
        type: Date,
        default: new Date( Date.now() )
    }
});

export default model<ActionModel>('Action', Action, 'action');