const Darthi = {
    nombre: 'Darthi',
    edad: 15,
    profesion: 'profesora',
}

const Glen: { nombre: string; edad: number; profesion: string } = {
    nombre: 'Glen',
    edad: 35,
    profesion: 'DEV',
}
enum Profesion {
    'Profesor',
    'Desenvolvedor',
    'Portero de Toples',
    'Capataz',
    'actriz',
    'estudiante',
}
interface Persona {
    nombre: string
    edad: number
    profesion?: Profesion
}
const Paul: { nombre: string; edad: number; profesion: string } = {
    nombre: 'Paul',
    edad: 25,
    profesion: 'Desenvolvedor',
}
const lucho: Persona = {
    nombre: 'lucho',
    edad: 22,
    profesion: Profesion.estudiante,
}
const maria: Persona = {
    nombre: 'maria',
    edad: 26,
    profesion: Profesion.actriz,
}

interface Estudiante extends Persona {
    materias: string[]
}
const jessi: Estudiante = {
    nombre: 'jessi',
    edad: 22,
    profesion: Profesion.actriz,
    materias: ['Matematicas', 'Historia', 'Danza'],
}
const manu: Estudiante = {
    nombre: 'Manu',
    edad: 27,
    materias: ['Matematicas', 'Historia', 'Lengua'],
}
console.log(Glen, Paul, lucho, maria, jessi, manu)

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('-', item)
    }
}
listar(manu.materias)
listar(jessi.materias)
