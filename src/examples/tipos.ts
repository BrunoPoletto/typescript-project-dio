//Isso funciona perfeitamente, mas tem um jeito mais prático
function somarValores(input1: number | string, input2: number | string) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    } else {
    return input1 + input2;
}}

//tipo novo criado que diz que a variável pode ser ou number ou string
type input = number | string;
//Essa função funciona de forma idêntica à primeira
function somarValores2(input1: input, input2: input) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2
    }
}

console.log(somarValores(1, 5));
console.log(somarValores2(1, 5));
console.log(somarValores('Olá', 'como vais?'));
console.log(somarValores2('Olá', 'como vais?'));
console.log(somarValores(1, 'yo'));
console.log(somarValores2(1, 'yo'));