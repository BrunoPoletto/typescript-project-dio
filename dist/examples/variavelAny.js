"use strict";
//típico valor padrão pro JS
let valorAny;
valorAny = 3;
valorAny = 'Heeeeey';
valorAny = true;
let valorString = 'test';
valorString = valorAny; //E aqui o tipo explicitado 'string' foi dupercedido pelo valor 'any' da variável anterior, mas que inferno
let valorString2 = 'testasso';
valorString2 = valorAny; //novamente, a 'string'1 virou 'boolean = true'
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2); //isso não vai logar 'test testasso', vai logar 2 (because why not)
