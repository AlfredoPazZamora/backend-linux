//Importamos las dependencias necesarias
let router = require('express').Router();

//Definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('Bienvenido a la API para adoptar animalitos, adopet');
});

router.use('/usuarios', require('./usuarios'));

router.use('/mascotas', require('./mascotas')); 

/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/usuarios' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo usuarios.js,
* la función require está importando este archivo */

//Exportamos nuestro nuevo router
module.exports = router; 