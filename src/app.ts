//

//
let button = document.getElementById('button')
let in1 = document.getElementById('in-1') as HTMLInputElement
let in2 = document.getElementById('in-2') as HTMLInputElement

function suma(a: number, b: number, devPrintar: boolean) {
    let resultado = a + b
    if (devPrintar) {
        console.log(resultado)
    }
    return a + b
}
let devPrintar = true
let frase = 'El valor es: '

button?.addEventListener('click', () => {
    if (in1 && in2) {
        console.log(suma(Number(in1.value), Number(in2.value), devPrintar))
    }
})
//
let botaoAtualizar = document.getElementById('atualizar-saldo')
let botaoLimpar = document.getElementById('limpar-saldo')!
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo')

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString()
        limparCampoSoma()
    }
}

function limparCampoSoma() {
    soma.value = ''
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0
        campoSaldo.innerHTML = saldoTotal.toString()
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value))
    })
}
botaoLimpar?.addEventListener('click', () => {
    limparSaldo()
})

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
    Profesor,
    Desenvolvedor,
    Capataz,
    actriz,
    estudiante,
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
    profesion: Profesion.Profesor,
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
