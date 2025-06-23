// Orientação a Objetos uma forma de programar que utilizar objetos como o seu principal principio
// Métodos propriedades que serve como funções, ou seja, as açóes dos objetos. Invocamos os métodos da mesma maneira que funções.

const cachoroo = {
    uivar: function () {
        console.log("Auuuuuuuuu");
    },

    rosnar: function () {
        console.log("grrrrrrr");
    }
}

cachoroo.uivar();
cachoroo.rosnar();


const carro = {
    marca: "",
    acelerar: function () {
        console.log("Vruuuuuuuu");
    },
    buzina: function () {
        console.log("bibibi");
    },

    setmarca: function (marca) {
        this.marca = marca;
    },
    getmarca: function () {
        return "A marca é " + this.marca;
    }
}

//carro.acelerar();
//carro.buzina();

console.log(carro.marca);

carro.setmarca("BYD");

console.log(carro.marca);

console.log(carro.getmarca());

// os metodos interagem com os objetos, até mudando os valores das suas propriedades para conrresponder a lógica do programa desenvolvido.
















