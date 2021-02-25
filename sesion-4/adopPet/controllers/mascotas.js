let Mascota = require('./models/Mascota');

function crearMascota(req, res){
    let mascota = new Mascota(req.body);
    res.status(201).send(mascota);
}

function obtenerMascotas(req, res){
    let mascota1 = new Mascota(1 , 'FUFFY', 'perro', 'Perro bonito y bien portado', 1234567890, 'In your mind');
    let mascota2 = new Mascota(2 , 'MISIFUS', 'gato', 'otro gato', 0987654321, 'la vecindad');

    res.send([mascota1, mascota2]);
}

function modificarMascota(req, res){
    let mascota1 = new Mascota(req.params.id, 'FUFFY', 'perro', 'Perro bonito y bien portado', 1234567890, 'In your mind');
    let modificaciones = req.body;
    mascota1 = { ...mascota1, ...modificaciones }
    res.send(mascota1)
}

function eliminarMascota(req, res){
    res.status(200).send(`Tu mascota con id ${req.params.id} fue eliminado :(`);
}

module.exports = {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota
}