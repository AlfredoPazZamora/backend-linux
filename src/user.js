/*Qué propiedades necesito guardar en el sistema?
    Nombres, contacto (telefono - email), contraseña para ingresar

¿Que funciones y atributos son necesarios para cumplir con mis historias de usuario?
    registrarse, logearse, solicitar una adopción, dar en adopcion, modificar datos
*/

/*
id	integer($int64)
username	string
firstName	string
lastName	string
email	string
password	string
phone	string
userStatus	integer($int32)*/

class user{
    constructor(userName, name, lastName, email, password, phone){
        this.userName = userName;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    login(){
        // ...
    }

    register(){
        // ...
    }

    adopt(){
        // ...
    }
}