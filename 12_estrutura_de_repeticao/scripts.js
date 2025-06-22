//Estrutura de repetição, a ideia e repetir uma ação até atingir uma condição.
//Ao invés de repetimos o mesmo código várias vezes, criamos um statemet que fará uma checagem em cada loop.

//while fará uma ação, até que a condição seja atingida
// necessario definir um fim para o loop, para não entrar em um loop infinito.

let x = 10

while (x > 0) {
    console.log("O x é " + x);
    x = x - 1;
}

let y = 0;

while (y <= 10) {
    console.log(y);
    y = y + 1;
}

//do while  semelhante ao while, porém a estrutura muda um pouco.

// let z = 100;
//do {
//    console.log(z / 2);
//    z = z - 5;
//} while (z >= 0);


// Estrutura for
for (let numero = 2; numero < 100; numero = numero * 2) {
    console.log("o numero e: " + numero);
}

for (let i = 0; i < 100; i = i + 3) {
    console.log(`a soma de i com 2 é: ${i + 2}`);
}