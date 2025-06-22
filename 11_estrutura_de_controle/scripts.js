// Estrutura de controle
// Um programa é executado de cima para baixo; com as estruturas podemos modelar o fluxo do programa; ou seja, dependendo dos valores de statements e expressions,
// ele tomará um caminho diferente.

//condicional if o programa irá executar um bloco de código, SE algo acontecer;
//onde algo é a condição imposta por um statement;
//que resultar em um boolean(true or false)

let idade = 15;

if (idade > 18) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}



if (idade == 19) {
    console.log("A idade e igual a 19")
}


let nome = "Tamiris";

if (nome == "Tamiris" && idade > 10) {
    console.log("Liberado");
}

let passaporte = true;

if ((nome == "Tamiris" && idade > 30) || passaporte == true) {
    console.log("Liberado 2");
}



// else if é o encadeamento de mais condições ou seja podemos verificar mais condições.

let a = 5;
let b = 3;

if (a + b == 3) {
    console.log("O resultado e 3");
} else if (a == 4) {
    console.log("o valor de a e 4");
} else if (b == 3) {
    console.log("o valor de b e 3")
} else {
    console.log("nenhuma das condições acima");
}

