// Importamos las bibliotecas necesarias
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('./config/passport');

// Objeto global de la app
let app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://alfredoBedu:paz123@cluster0.nufya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.set("debug", true);

require("./models/Usuario");
// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos

/*********************** Mongoose Configuration *******************************/

// Agregamos el código de nuestro router (routes/index.js)*/
app.use('/v1', require('./routes'));

//Manejamos los errores 404
//next (siguiente middelware), 
//req - res (solicitud - respuesta)
app.use((req,res,next)=> { 
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Iniciando el servidor
let port = process.env.PORT || 3001;

let server = app.listen(port, ()=>{
    console.log('Escuchando desde el puerto ' + server.address().port);
})