//Importamos o módulo HTTP do Node
const http = require('http');

//criamos nosso servidor usando o createServer
const servidor = http.createServer((req, res) => {

    //Para administrarmos as rotas, basta mudar a informação da URL após a "/"
    if(req.url === "/"){//se a URL requerida for identica a "/"
        res.end("Página principal"); //Esta será a mensagem exibida.
        }else if (req.url === "/sobre") {//senão, se for identica a "/sobre"
        }else if (req.url === "/noticias"){
            res.end("Página de notícias")
        }else if (req.url === "/contato"){
            res.end("Página de contato")
        }else { //Se o usuário buscar uma rota que não trabalhamos
            res.end("Página não encontrada") //Indicamos que a página não foi encontrada 
        }

});

//Porta onde o servidor estará rodando
servidor.listen(3000)
