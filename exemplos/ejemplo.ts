let button = document.getElementById('button')
let in1 = document.getElementById('in-1') as HTMLInputElement
let in2 = document.getElementById('in-2') as HTMLInputElement

function suma(a: number, b: number, devPrintar: boolean, frase: srting) {
    let resultado = a + b
    if (devPrintar) {
        console.log(frase + resultado)
    }
    return a + b
}
let devPrintar = true
let frase = 'El valor es: '
if (button) {
    button.addEventListener('click', () => {
        if (in1 && in2) {
            console.log(
                suma(Number(in1.value), Number(in2.value), devPrintar, frase)
            )
        }
    })
}
