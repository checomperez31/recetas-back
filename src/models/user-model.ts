import mongoose,  { Schema, model } from 'mongoose';

export interface UserModel extends mongoose.Document {
    username: string,
    password: string,
    name: string,
    lastName: string
}

const User = new Schema({
    username: String,
    password: String,
    name: String,
    lastName: String,
    insert_date: {
        type: Date,
        default: new Date( Date.now() )
    }
});

export default model<UserModel>('User', User, 'user');