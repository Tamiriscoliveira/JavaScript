let express = require('express'); // chama o framework express
let app = express(); //cria um aplicativo com  o metodo, fazendo o instanciamento  do express, para acesso a todos os metodos.

app.get('/', function (req, res) {
    res.send('primeira rota com express');
});

app.get('/teste', function (req, res) {
    res.send('testando rota');
});

app.listen(3000, function () {  //abrindo a porta 3000 e passando uma função anonima.
    console.log("a aplicação esta funcionando na porta 3000");
});

