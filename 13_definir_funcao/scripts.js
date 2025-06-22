function imprimirNoConsole() {
    console.log("OLÁ MUNDO")
}

imprimirNoConsole();


function imprimirUmNumero(num) {
    console.log("o número é " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);



const numeroAleatorio = function () {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

//mais sobre funnção

const soma = function (a, b) {
    return a + b;
}

console.log(soma(3, 5));


function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("o valor de mult é " + mult);



function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("pode dirigir");
    } else {
        console.log("não pode dirigir");
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));


//Escopo de uma função - o que acontece dentro de uma função fica separado do escopo global; O escopo global seria todo o arquivo de javascript.

let n = 10;

const numero = function () {
    let n = 25;
    console.log(n);
}

numero();

console.log(n);

