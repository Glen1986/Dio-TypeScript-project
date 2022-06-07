"use strict";
const Darthi = {
    nombre: 'Darthi',
    edad: 15,
    profesion: 'profesora',
};
const Glen = {
    nombre: 'Glen',
    edad: 35,
    profesion: 'DEV',
};
var Profesion;
(function (Profesion) {
    Profesion[Profesion["Profesor"] = 0] = "Profesor";
    Profesion[Profesion["Desenvolvedor"] = 1] = "Desenvolvedor";
    Profesion[Profesion["Portero de Toples"] = 2] = "Portero de Toples";
    Profesion[Profesion["Capataz"] = 3] = "Capataz";
    Profesion[Profesion["actriz"] = 4] = "actriz";
    Profesion[Profesion["estudiante"] = 5] = "estudiante";
})(Profesion || (Profesion = {}));
const Paul = {
    nombre: 'Paul',
    edad: 25,
    profesion: Profesion[2],
};
const lucho = {
    nombre: 'lucho',
    edad: 22,
    profesion: Profesion[1],
};
const maria = {
    nombre: 'maria',
    edad: 26,
    profesion: Profesion[4],
};
const jessi = {
    nombre: 'jessi',
    edad: 22,
    profesion: Profesion[5],
    materias: ['Matematicas', 'Historia', 'Danza']
};
const manu = {
    nombre: 'Manu',
    edad: 27,
    materias: ['Matematicas', 'Historia', 'Lengua']
};
console.log(Glen, Paul, lucho, maria, jessi, manu);
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(manu.materias);
listar(jessi.materias);
