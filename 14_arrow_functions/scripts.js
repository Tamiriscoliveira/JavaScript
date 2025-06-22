//Arrow functions é uma outra forma de escrever funções; Bem utilizada nos frameworks modernos; porém não deve substituir as functions por completo.

const parOuImpar = (n) => {
    return n % 2;
}

console.log(parOuImpar(3))


let consoleTeste = () => {
    console.log("Olá Mundo");
}

consoleTeste();


let soma = (a, b) => {
    return a + b;
};

console.log(soma(10, 20));