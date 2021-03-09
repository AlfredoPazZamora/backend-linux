// Usuario.js
//ORIENTADO A OBJETOS
/** Clase que representa a un usuario de la plataforma*/
// class Usuario {
//     constructor(id, username, nombre, apellido, email, password, ubicacion, telefono, bio, fotos, tipo) {
//       this.id = id;
//       this.username = username;
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.email = email;
//       this.password = password;
//       this.ubicacion = ubicacion;
//       this.telefono = telefono;
//       this.bio = bio;
//       this.fotos = fotos;
//       this.tipo = tipo; // tipo normal o anunciante
//     }
// }
  
// module.exports = Usuario;
//MONGOOSE
const mongoose = require('mongoose');
//Definiendo el objeto UsuarioSchema con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const UsuarioSchema = new mongoose.Schema({      
    username: String,                              
    nombre: String,
    apellido: String, 
    email: String,
    password: String,
    ubicacion: String,
    telefono: String,
    bio: String,
    foto: String,
    tipo: String,
}, { timestamps: true });  
 
 //Define el modelo Usuario, utilizando el esquema UsuarioSchema.
 mongoose.model("Usuario", UsuarioSchema);        