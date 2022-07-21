const PESSOA = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}
//os tipos são inferidos dentro do objeto acima

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}

const Paula = {
    nome: 'Paula',
    idade: 28,
    profissao: 'Desenvolvedora'
}

//Aqui foi criado um 'tipo' novo que abrange esses valores específicos
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
//E aqui foi criado um 'esqueleto' pras próximas pessoas
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao //esse '?' diz que esse valor é OPCIONAL, vide "Mônica" abaixo
}
//Outro 'esqueleto' filho do acima. o valor 'materias' é definido como um array de strings
interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 18,
    profissao: Profissao.JogadoraDeFutebol
}
/********MUITO IMPORTANTE********/
//Ctrl + spacebar -> traz todos os elementos que FALTAM para criar um objeto de determinada interface
const jessica: Estudante = {
    nome: 'Jéssica',
    idade: 20,
    profissao: Profissao.Atriz,
    materias: ['Matemática', 'Filosofia e Sociologia', 'Dramaturgia']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 17,
    materias: ['Matemática', 'Ciências']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}
listar(monica.materias)