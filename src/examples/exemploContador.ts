var button = document.getElementById('button');
var input1 = document.getElementById('input1') as HTMLInputElement;
var input2 = document.getElementById('input2') as HTMLInputElement;
let mustPrint = true;
let sentence = 'The value is: '

function add(num1: number, num2: number, mustPrint: boolean, sentence: string) {
    let result = num1 + num2
    if (mustPrint) {
        console.log(sentence + result);
    }
    return num1 + num2
}



if(button) {
button.addEventListener('click', () => {
    if (input1 && input2) {
    console.log(add(Number(input1.value), Number(input2.value), mustPrint, sentence))
    }
})
}


/* Esse '?' abaixo tem o mesmo efeito do 'if() {}' no código acima. Importante lembrar que isso é uma função do ECMAScript2020, por isso o "target" no tsconfig.json
button?.addEventListener('click', () => {
    if (input1 && input2) {
    console.log(add(Number(input1.value), Number(input2.value), mustPrint, sentence))
    }
})
*/