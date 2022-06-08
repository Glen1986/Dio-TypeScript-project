let anyEstaDevuelta: any
anyEstaDevuelta = 3
anyEstaDevuelta = true
anyEstaDevuelta = 'string'
anyEstaDevuelta = 5

let stringTest: string = 'verificar'
stringTest = anyEstaDevuelta

let unknownValue: unknown
unknownValue = 3
unknownValue = 'opa'
unknownValue = false
unknownValue = 'no es'

let stringTest2: string = 'ahora es'

if (typeof unknownValue === 'string') {
    stringTest2 = unknownValue
}

function tiraError(erro: string, codigo: number): never {
    throw { error: erro, code: codigo }
}
tiraError('deu erro', 500)
