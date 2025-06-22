//Mutação (Mutability) -  um objeto pode herdar todas as caracteriticas do outro, virando uma referência ao mesmo.

let pessoa = {
    nome: "Tamiris"
}

let pessoa2 = pessoa;

let pessoa3 = {                 // com a imutabilidade objetos não são iguais.
    nome: "Tamiris"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);



console.log(pessoa == pessoa2);  //mostra que os objetos são iguais

pessoa2.nome = "Maria rita";

console.log(pessoa.nome);

pessoa.nome = "Sandy";

console.log(pessoa2.nome);