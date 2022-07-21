"use strict";
const object = {
    nome: 'blablabla',
    idade: 321
};
//Classes são muito mais complexas, podem ter funções auxiliares, mas também são mais complexas para criar
class Mamifero {
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        console.log('Meu nome é', this.nome);
    }
}
const cachorro = new Mamifero('Zipp');
cachorro.dizerNome();
