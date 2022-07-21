"use strict";
let anyEstaDeVolta; //¬¬
anyEstaDeVolta = 2;
anyEstaDeVolta = 'hahaha';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta; //e como antes, isso virou '5' agora
//naturalmente, uma variável com valor 'unknown' pode ser absolutamente qualquer coisa (por isso o nome,'desconhecido')
let unknownValor;
unknownValor = 3;
unknownValor = 'huh';
unknownValor = true;
unknownValor = 'YIPEEE';
let stringTest2 = 'heere we go';
stringTest2 = unknownValor; //E aqui está a diferença
//antes de passar o valor de fato de um 'unknown' e jogar pra outra variável, vc TEM QUE verificar o valor interno ANTES, como abaixo:
if (unknownValor === 'string') {
    stringTest2 = unknownValor; //Aqui não deu erro, pq validamos o conteúdo do unknown ANTES
}
/*TYPE NEVER*/
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Opa!', 500);
