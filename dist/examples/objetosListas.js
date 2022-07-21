"use strict";
const PESSOA = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
//os tipos são inferidos dentro do objeto acima
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};
const Paula = {
    nome: 'Paula',
    idade: 28,
    profissao: 'Desenvolvedora'
};
//Aqui foi criado um 'tipo' novo que abrange esses valores específicos
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 18,
    profissao: Profissao.JogadoraDeFutebol
};
/********MUITO IMPORTANTE********/
//Ctrl + spacebar -> traz todos os elementos que FALTAM para criar um objeto de determinada interface
const jessica = {
    nome: 'Jéssica',
    idade: 20,
    profissao: Profissao.Atriz,
    materias: ['Matemática', 'Filosofia e Sociologia', 'Dramaturgia']
};
const monica = {
    nome: 'Mônica',
    idade: 17,
    materias: ['Matemática', 'Ciências']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
