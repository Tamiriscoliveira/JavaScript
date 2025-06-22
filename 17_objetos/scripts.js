//Objetos é uma coleção de propriedades, parecidos com arrays. Podemos acessar estas propriedades.


let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function () {   //criando método
        console.log("Au Au");
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();


let pessoa = {
    nome: "Tamiris",
    profissao: "Atleta",
    idade: 37,
}

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);


// [] = array
// {} = objeto

//adicioando e deletando propriedades no objeto

let carro = {
    marca: "BYD",
    portas: 4,
    eletrico: true,
    motor: 1.0
}

console.log(carro.portas);
delete carro.portas;
console.log(carro.portas);

console.log(carro)

//adiciona propriedades
carro.tetoSolar = false;
console.log(carro.tetoSolar);


//copiar as propriedades de um objeto para o outros usando assing

let adicionais = {
    portamalas: "200l",
    arcondicionado: true,
}

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);


// verifiar as keys que o objeto tem.
console.log(Object.keys(carro));
console.log(Object.keys(pessoa));
console.log(Object.keys(cachorro));



















