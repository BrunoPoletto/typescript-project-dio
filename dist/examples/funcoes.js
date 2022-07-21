"use strict";
//nada novo
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 4));
//mas esse 'erro' (o .toString a mais) faz com que o resultado seja 14, e não 5
function somarValoresNumericos2(numero1, numero2) {
    return numero1 + numero2.toString();
}
console.log(somarValoresNumericos2(1, 4));
//dessa forma (o ': number' depois da declaração do input da função), vc faz com que o resultado dessa função TENHA QUE SER number
function somarValoresNumericos3(numero1, numero2) {
    return numero1 + numero2.toString(); //por causa da atribuição ao resultado da função, esse comando gera um erro
}
console.log(somarValoresNumericos3(1, 4));
/*VOID TYPE*/
function printarValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
/*CALLBACK*/
//essa função usa uma outra fuinção como callback, com o tipo especificado v assim
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado); //Isso faz com que o retorno seja o resultado DA FUNÇÃO CALLBACK (secundária), enviada como parâmetro, usando o valor gerado da soma (função principal) como parâmetro
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
