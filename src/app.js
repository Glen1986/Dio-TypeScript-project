"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros?
let button = document.getElementById('button');
//
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('click');
});
//
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
    profesion: 'Desenvolvedor',
};
const lucho = {
    nombre: 'lucho',
    edad: 22,
    profesion: Profesion.estudiante,
};
const maria = {
    nombre: 'maria',
    edad: 26,
    profesion: Profesion.actriz,
};
const jessi = {
    nombre: 'jessi',
    edad: 22,
    profesion: Profesion.actriz,
    materias: ['Matematicas', 'Historia', 'Danza'],
};
const manu = {
    nombre: 'Manu',
    edad: 27,
    materias: ['Matematicas', 'Historia', 'Lengua'],
};
console.log(Glen, Paul, lucho, maria, jessi, manu);
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(manu.materias);
listar(jessi.materias);
