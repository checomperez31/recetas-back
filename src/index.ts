import express from 'express';

import indexRoutes from './controller/index-api';
import './database';
import initializer from './libs/initializer';
var cors = require('cors');
// Inititlization
const app = express();
initializer();
app.use( cors() );

// Settings
// Mongo service: mongo
app.use( express.json() );

// Middlewares

app.use( '/api', indexRoutes );

// Starting the server
app.listen( 3000, () => {
    console.log(`Servidor corriendo en el puerto ${3000}`);
} );