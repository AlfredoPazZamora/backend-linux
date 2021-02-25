/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */
//Importamos el modelo de usuarios
const Usuario = require('./models/Usuario');

function crearUsuario(req, res){
    //Instaciamos un nuevo usuario utilizando la clase usuario
    //req.body (Mandar los valores que vienen del cuerpo de req)
    let usuario = new Usuario(req.body); 
    res.status(201).send(usuario); 
}

function obtenerUsuarios(req, res) {
    // Simulando dos usuarios y respondiendolos
    let user1 = new Usuario(1, 'Alfredo', 'Paz', 'alfredo@paz.com');
    let user2 = new Usuario(2, 'Juan', 'Perez', 'juan@perez.com');
    res.send([user1, user2]);
}

function modificarUsuario(req, res) {
    // simulando un usuario previamente existente que el cliente modifica
    //Del id que pedimos es lo que se va a tomar
    let user1 = new Usuario(req.params.id, 'Alfredo', 'Paz', 'alfredo@paz.com')
    let modificaciones = req.body;
    user1 = { ...user1, ...modificaciones }
    res.send(user1)
}

function eliminarUsuario(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario
}
