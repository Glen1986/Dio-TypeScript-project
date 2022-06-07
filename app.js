"use strict";
function sumarValores(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
console.log(sumarValores('tenemos: ', 5));
console.log(sumarValores('hola', ' que tal'));
console.log(sumarValores(16, 2));
