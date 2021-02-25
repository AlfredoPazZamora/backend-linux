// Importamos las bibliotecas necesarias
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
let app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Manejamos los errores 404
//next (siguiente middelware), 
//req - res (solicitud - respuesta)
app.use((req,res,next)=> { 
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Iniciando el servidor
let port = process.env.PORT || 3000;

let server = app.listen(port, ()=>{
    console.log('Escuchando desde el puerto ' + server.address().port);
})