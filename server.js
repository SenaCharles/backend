//Importa APENAS o createServer do módulo HTTP do Node
const { createServer } = require('node:http');

//Define o endereço do servidor (localhost)
const hostname = '127.0.0.1';

//Defibe a porta onde o servidor vai rodar.
const port =3000;

//cria nosso servidor
//Essa função será executada toda vez que alguém acessar o servidor
const server = createServer((req, res) => {
    //Define o status da resposta como 200 (OK)
    res.statusCode = 200; 
    //Define o tipo de conteúdo da resposta
    //Aqui estamos definindo como texto puro (text/plain)
    res.setHeader('Content-Type', 'text/plain');

    //Envia a resposta ao cliente (navegador) e finaliza a requisição
    res.end('Hello, Node!');
});

//Faz o servidor escutar na porta e endereço definidos anteriormente.
// Assim que o servidor for executado, ele executará essa função.
server.listen(port, hostname, () => {

    //Mostra no terminal que o servidor está rodando o link.
    console.log(`Server running at http://${hostname}:${port}/`);

});