"use strict";
let button = document.getElementById('button');
let in1 = document.getElementById('in-1');
let in2 = document.getElementById('in-2');
function suma(a, b, devPrintar, frase) {
    let resultado = a + b;
    if (devPrintar) {
        console.log(frase + resultado);
    }
    return a + b;
}
let devPrintar = true;
let frase = 'El valor es: ';
if (button) {
    button.addEventListener('click', () => {
        if (in1 && in2) {
            console.log(suma(Number(in1.value), Number(in2.value), devPrintar, frase));
        }
    });
}
