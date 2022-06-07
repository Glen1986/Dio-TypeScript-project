//                          definimos el typo de in/  definimos el tipo de salida de la funcion
function sumarValoresNumericos(n1: number, n2: number): number {
    return n1 + n2
}
console.log(sumarValoresNumericos(4, 4))

//retorno de tipo "void", es cuando la funcion no retorna nada
function printaValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2)
}
