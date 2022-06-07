//retorno de tipo "void", es cuando la funcion no retorna nada
function printaValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2)
}

function sumarValoresNumericosETratar(
    n1: number,
    n2: number,
    callback: (n3: number) => number
): number {
    let resultado = n1 + n2
    return callback(resultado)
}
function alCuadrado(numero: number): number {
    return numero * numero
}
function dividirPorElMismo(n1: number): number {
    return n1 / n1
}
console.log(sumarValoresNumericosETratar(1, 3, alCuadrado))
console.log(sumarValoresNumericosETratar(1, 3, dividirPorElMismo))
