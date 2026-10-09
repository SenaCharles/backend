//Importa o módulo HTPP do Node.js (nativo)
const http = require('http');
//cria o servidor
//O createServer recebe uma função que será executada toda vez em que alguém acessar o servidor

const servidor = http.createServer((req, res) => {
    //req --> Informações da requisição(request)
    //res --> Resposta que vamos enviar ao "Cliente"(response)
    res.end("Meu primeiro servidor Node!");

    //res.end("Acessando: " + req.url)
    //res.end envia uma mensagem final para o navegador e finaliza a requisição
})
//Fará o servidor "escutar" na porta 3000 (escolhida por nós)


servidor.listen(3000);

//Portas comuns:
// 80 - HTTP Padrão
// 443 - HTTPS 
//3000 - Desenvolvimento
//5000 - Comum em APIs
//8080 - Alternativa para web
