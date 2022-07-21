"use strict";
//Isso funciona perfeitamente, mas tem um jeito mais prático
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
//Essa função funciona de forma idêntica à primeira
function somarValores2(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores2(1, 5));
console.log(somarValores('Olá', 'como vais?'));
console.log(somarValores2('Olá', 'como vais?'));
console.log(somarValores(1, 'yo'));
console.log(somarValores2(1, 'yo'));
