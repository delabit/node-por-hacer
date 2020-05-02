const descripcion = {
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
    demand: true
}

const completado = {
    alias: 'c',
    desc: 'Marca la tarea como completada o pendiente',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Mostrar una lista de las tareas por hacer')
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea pendiente', {
        descripcion
    })
.help()
.argv;

module.exports = {
    argv
}