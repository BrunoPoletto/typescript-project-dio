/*DIFERENÇA ENTRE INTERFACE E CLASS*/
//Interfaces são quase unicamente por organização. Não tem muitas funções ou características próprias
interface Teste {
    nome: string,
    idade: number
}

const object: Teste = {
    nome: 'blablabla',
    idade: 321
}

//Classes são muito mais complexas, podem ter funções auxiliares, mas também são mais complexas para criar
class Mamifero {
    public numPatas: number;
    public temPelos: boolean;
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public dizerNome() {
        console.log('Meu nome é', this.nome)
    }
}

const cachorro = new Mamifero('Zipp')
cachorro.dizerNome();