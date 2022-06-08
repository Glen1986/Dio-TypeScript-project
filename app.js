"use strict";
let anyEstaDevuelta;
anyEstaDevuelta = 3;
anyEstaDevuelta = true;
anyEstaDevuelta = 'string';
anyEstaDevuelta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDevuelta;
let unknownValue;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = false;
unknownValue = 'no es';
let stringTest2 = 'ahora es';
if (typeof unknownValue === 'string') {
    stringTest2 = unknownValue;
}
function tiraError(erro, codigo) {
    throw { error: erro, code: codigo };
}
tiraError('deu erro', 500);
