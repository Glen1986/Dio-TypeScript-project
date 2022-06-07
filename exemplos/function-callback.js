"use strict";
//retorno de tipo "void", es cuando la funcion no retorna nada
function printaValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
function sumarValoresNumericosETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function alCuadrado(numero) {
    return numero * numero;
}
function dividirPorElMismo(n1) {
    return n1 / n1;
}
console.log(sumarValoresNumericosETratar(1, 3, alCuadrado));
console.log(sumarValoresNumericosETratar(1, 3, dividirPorElMismo));
