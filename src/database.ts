import mongoose from 'mongoose';

const uri = "mongodb://localhost/recetas";

mongoose.connect(uri, {
    useNewUrlParser: true
}).then(value => console.log(`Mongo ok`)).catch(err => console.log(`Error connecting to db: ${err}`));