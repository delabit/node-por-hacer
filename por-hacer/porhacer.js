const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);    
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudieron almacenar las tareas', err);
    });
};

const cargaDB = () => {   
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {
    
    cargaDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };
    
    listadoPorHacer.push(porHacer);
    guardarDB(listadoPorHacer);
    
    return porHacer;
}

const getListado = () => {
    cargaDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {    
    cargaDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {
    
    cargaDB();

    let nuevoListadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListadoPorHacer;
        guardarDB();
        return true;
    }

    
};

module.exports = {
    crear, 
    getListado,
    actualizar,
    borrar
}