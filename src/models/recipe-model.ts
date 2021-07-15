import mongoose, { Schema, model } from 'mongoose';

export interface RecipeModel extends mongoose.Document {
    title: string,
    description: string
}

const Recipe = new Schema({
    title: String,
    description: String,
    insert_date: {
        type: Date,
        default: new Date( Date.now() )
    }
});

export default model<RecipeModel>('Recipe', Recipe, 'recipe');