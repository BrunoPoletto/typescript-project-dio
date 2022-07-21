let anyEstaDeVolta: any;//¬¬
anyEstaDeVolta = 2;
anyEstaDeVolta = 'hahaha';
anyEstaDeVolta = 5

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;//e como antes, isso virou '5' agora

//naturalmente, uma variável com valor 'unknown' pode ser absolutamente qualquer coisa (por isso o nome,'desconhecido')
let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'huh';
unknownValor = true;
unknownValor = 'YIPEEE'

let stringTest2: string = 'heere we go';
stringTest2 = unknownValor//E aqui está a diferença
//antes de passar o valor de fato de um 'unknown' e jogar pra outra variável, vc TEM QUE verificar o valor interno ANTES, como abaixo:

if (unknownValor === 'string') {
    stringTest2 = unknownValor; //Aqui não deu erro, pq validamos o conteúdo do unknown ANTES
}


/*TYPE NEVER*/

function jogaErro(erro: string, codigo: number): never { //um código 'never' é o que não só não finaliza, como também para o código assim que ele aparece (assim como um throw)
    throw {error: erro, code: codigo}
}

jogaErro('Opa!', 500);