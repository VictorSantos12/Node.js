
<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/119588242-c60e9f80-bda6-11eb-8da1-106c82739221.png">
</div>

<br>
<img src="https://img.shields.io/static/v1?label=Node.js&message=Enviroment&color=green&style=for-the-badge&logo=Node"/>


O Node é um ambiente de execução de códigos JavaScript, cuja as funcionalidades e ferramentas propiciam ao desenvolvedor a estrutura necessária para criar, compilar, testar e manter aplicações utilizando o ECMAScript.

Dando uma definição mais específica, o Node exerce a função de interpretar códigos JavaScript fora dos navegadores, tornando possível desvincular a linguagem do Client-side. Tal recurso abre uma série de possibilidades para desenvolver com a já conhecida sintaxe, além de um adicional de ferramentas que auxiliam na criação de aplicações robustas, como arquiteturas e modelos de desenvolvimentos versáteis.

Há uma série de formas de aplicar o Node, seja no server-side, no client-side, em aplicações desktop, micro serviços e entre outros, o Node possui um nível de usabilidade bastante robusto. 


<h2>Por que o Node ?</h2>


As vantagens de utilizar determinda tecnologia em detrimento de outra sempre geram questionamento, mas, na prática, escolher um framework, um ambiente de desenvolvimento ou mesmo uma linguagem específica se dá pela demanda do sistema que será criado. Pode-se dizer que do Node é possível extrair resultados rápidos e com uma alta escalabilidade; o Node possui um ecosistema bastante robusto graças ao npm(Node Package Manager) que dá a possibilidade de ter acesso a recursos para tratar diversas necessidades, como requisições http, operações em bases de dados e entre outros, além de ser bastente leve em comparação a outras ferramentas.


<h2>Instalação</h2>


Para instalar o Node.js basta seguir as recomendações da plataforma oficial da ferramenta encontrada no link a seguir:


[nodejs.org](https://nodejs.org/en/)


É recomendado ter a versão LTS instalada pois ela garante todas as funcionalidades do Node sem nenhuma restrição. Isso se dá pois a versão Current normalmente está em processo de desenvolvimento, portanto, pode conter issues em manutenção.

Após o fim da instalação, use o comando a seguir para verificar a versão instalada e se o processo ocorreu corretamente:


    node -v


<h2>Hello World</h2>


Para executar o popular Hello World através do Node.js, basta criar um diretório que irá conter o arquivo referente e executá-lo na linha de comando. Com isso, crie uma pasta no local desejado e nela o arquivo <i>app.js</i>. Nesse arquivo escreva as seguinte linha de código:


    console.log('Hello World!');


Para executá-la basta acessar o diretório criado através do prompt de comando e fazer o run do sscript da seguinte forma:


    node app.js


E como resultado temos um Hello World escrito em Javascript e executado fora do navegador.


<h2>Node CLI</h2>


Se usarmos o comando <b><i>node</i></b> no terminal, podemos ter acesso a Command line interface do Node, com a qual já é possível executar algumas linhas de código JavaScript. Experimente executar a seguinte operação:


    > var a = "Hello, world!"
    undefined
    > a
    'Hello, world!'


Uma simples chamada de variável permite entender como o Node independe de qualquer navegador para executar códigos JavaScript. Entretanto, há algumas diferenças entre o browser e uma Cli, e tentar acessar estruturas como a árvore DOM por exemplo, não produz resultado. Observe:


    > document
    Uncaught ReferenceError: document is not defined


<h2>Como o Node Funciona</h2>


Assim como qualquer ferramenta que compila e interpreta uma linguagem de programação, o Node precisa de um motor que interprete os códigos escritos e os converta em código nativo ou machine code. Portanto, a ferramenta foi criada tendo a engine V8 do Google Chrome como base, ou seja, da mesma forma que o Chrome interpreta o JavaScript para o navegador, o Node interpreta para a CPU. 

O Node possui uma arquitetura não bloqueante de single-thread baseada em eventos, que faz uso intenso dos pilares estruturais do JavaScript. Eles são:

- Call Stack(responsável por registrar e empilhar as chamadas de funções)
- Callback Queue(responsável por tratar os Callbacks)
- Event Loop(responsável por verificar os disparos dos eventos e executar suas respectivas callbacks como resposta)

Essa arquitetura permite que o usuário não tenha que esperar o fim de uma thread para tornar a interagir com a aplicação, o que dá ao Node uma performance assíncrona bastante eficiente. A imagem a seguir ilustra como esse processo ocorre:

<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/129991583-7aac7517-8373-43a2-94b9-41afc968a545.png">
</div>


<h1>Conceitos Básicos</h1>


O desenvolvimento de aplicações utilizando o Node.js, especificamente aplicações server-side, demandam alguns conhecimentos prévios. Portanto, antes de iniciarmos com o a criação de um projeto real, iremos abordar esses conceitos e entendeer sua importância:


<h2>Módulos</h2>


Não sendo um padrão do Javascript, criar módulos onde cada parte do código permanece acessível e separada das demais, é bastante usual e recomendado, já que atribui a um projeto um maior nível de oraganização, praticidade e eficácia. Os módulos também são importantes para definir o uso de bibliotecas e pacotes que farão parte da estrutura do sistema, e que serão instalados e importados através da modularização.

Para entender a modularização organizacional no Node, imagene o seguinte cenário: Você precisa criar um sistema símples capaz de converter reais em dolares, euros e libras. Isso poderia ser feito da seguinte forma:

Crie um arquivo chamado coin.js no diretório anteriormente feito, nele escreva as seguintes linhas de código:


    var real = 10;
    
    function dolar(coin) {
    
      return coin / 5.39;
    
    }
    
    function euro(coin) {
      
      return coin / 6.30;
    
    }
    
    function libra(coin) {
    
      return coin / 7.38;
      
    }
    
    console.log(dolar(real));
    console.log(euro(real));
    console.log(libra(real));


Uma variável representando uma quantia em reais é passada como parâmetro em três funções distintas, cada uma com um operador representando o valor das moedas que as nomeiam em relação ao real nos dias de hoje. Ao executar o script temos o seguinte resultado:


    1.855287569573284
    1.5873015873015874
    1.3550135501355014


Agora, digamos que o código gerado seja considerado muito grande para ser mantido em um único arquivo do projeto, e foi recomendado a você quebrar o código em partes distintas. Para começar, faremos as seguintes alteraçãos:

Recorte a função <i>dolar</i> do arquivo coin.js, crie um novo arquivo chamado de dolar.js, e nele cole a função. Em seguida defina a função como um módulo exportável usando os atributos <i>module</i> e <i>exports</i> do Node: 


    function dolar(coin) {
    
      return coin / 5.39;
    
    }

    module.exports.dolar = dolar; <


Com isso é possível importar e fazer uso da função <i>dolar</i> em qualquer parte do diretório. Para fazer isso, no arquivo <i>coin.js</i>, defina a const a seguir:


    const dolar = require('./dolar');


O path definido na função require define o caminho para o arquivo dolar.js, e o que é definido como export nele passa a ser acessível através da const dolar. Em seguida atualiza o console.log:

    
    console.log(dolar(real));


Após repetir o mesmo processo com as demais funções, temos o arquivo principal modularizado, sem perder o resultado anteriormente mostrado como output:


    const dolar = require('./dolar');
    const euro = require('./euro');
    const libra = require('./libra')
    
    var real = 10;
    
    console.log(dolar.dolar(real));
    console.log(euro.euro(real));
    console.log(libra.libra(real));
    
    //OutPut:

    1.855287569573284
    1.5873015873015874
    1.3550135501355014


<h2>HTTP</h2>


O HTTP, ou HyperText Transfer Protocol, é um dos mais antigos protocolos de comunicação que definem a troca de informações entre diferentes pontos da Web. Em conjunto com o TCP-IP, forma o modelo padrão de comunicação server-client, definido em requisições atreladas ao endereço de IP de um ambiente e definindo o envio, recebimento e alteração de informações. Para entender como aplicar e como funciona o básico das requisições HTTP com o Node, vamos a um exemplo:

Em um diretório, crie um arquivo <i>app.js</i>, nele iremos fazer um riquire do módulo http do Node:

    const http = require('http');


<h2>http Module</h2>


O módulo http é definido pelo Node como: 

(alias) module "http"
import http

Para usar o servidor e cliente HTTP é necessário requerer ('http').

As interfaces HTTP em Node.js são projetadas para oferecer suporte a muitos recursos do protocolo que são tradicionalmente difíceis de usar. Em particular, mensagens grandes, possivelmente codificadas por blocos. A interface tem o cuidado de nunca armazenar em buffer solicitações ou respostas inteiras, para que o usuário possa transmitir dados.

Os cabeçalhos das mensagens HTTP são representados por um objeto como este:

    { 
      'content-length': '123',
      'content-type': 'text/plain',
      'connection': 'keep-alive',
      'host': 'mysite.com',
      'accept': '*'
     }

As chaves estão em minúsculas. Os valores não são modificados.

Para oferecer suporte a todo o espectro de aplicativos HTTP possíveis, a API HTTP Node.js é de nível muito baixo. Ele lida apenas com o tratamento de fluxo e análise de mensagem. Ele analisa uma mensagem em cabeçalhos e corpo, mas não analisa os cabeçalhos reais ou o corpo.

Consulte message.headers para obter detalhes sobre como os cabeçalhos duplicados são tratados.

Os cabeçalhos brutos à medida que forem recebidos são retidos na propriedade rawHeaders, que é uma matriz de [chave, valor, chave2, valor2, ...]. Por exemplo, o objeto de cabeçalho da mensagem anterior pode ter uma rawHeaderslist como a seguinte:

    [
      'ConTent-Length', '123456',
      'content-LENGTH', '123',
      'content-type', 'text/plain',
      'CONNECTION', 'keep-alive',
      'Host', 'mysite.com',
      'accepT', '*' 
    ]

Em seguida defina a chamada do método <i>createServer()</i> através da const que recebe o módulo http:

     http.createServer()


<h2>createServer()</h2>


O método createServer() por sua vez é definido pelo Node como:

    function createServer(requestListener?: http.RequestListener): http.Server (+1 overload)

A função createServer retorna uma nova instância do Server. Já o parâmetro requestListener é uma função adicionada automaticamente ao evento 'request'. Nele também iremos definir o uso do método <i>listen()</i>, passando uma porta na qual o servidor estrá ativo:
    
     http.createServer().listen(8080);


<h2>listen()</h2>


O método listen() é definido como: 

    (method) Server.listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void)
    : http.Server (+8 overloads)

Método que inicia um servidor ouvindo conexões. Um net.Server pode ser um servidor TCP ou IPC dependendo do que se escuta.

Assinaturas possíveis:

- server.listen(handle[, backlog][, callback])
- server.listen(options[, callback])
- server.listen(path[, backlog][, callback]) for IPC servers
- server.listen([port[, host[, backlog]]][, callback]) for TCP servers

Esta função é assíncrona. Quando o servidor começar a 'escutar', o evento listening será emitido. O último parâmetro de retorno de chamada será adicionado como um ouvinte para o evento de listening.

Todos os métodos listen () podem usar um parâmetro de backlog para especificar o comprimento máximo da fila de conexões pendentes. O comprimento real será determinado pelo sistema operacional por meio de configurações sysctl, como tcp_max_syn_backlog e somaxconnon Linux. O valor padrão deste parâmetro é 511 (não 512).

Todos os soquetes são configurados para SO_REUSEADDR (veja soquete (7) para detalhes).

O método server.listen() pode ser chamado novamente se e somente se houve um erro durante a primeira chamada de server.listen() ou server.close() foi chamado. Caso contrário, um erro ERR_SERVER_ALREADY_LISTEN será lançado.

Um dos erros mais comuns levantados durante a escuta é o EADDRINUSE. Isso acontece quando outro servidor já está escutando na porta / caminho / identificador solicitado. Uma maneira de lidar com isso seria tentar novamente após um determinado período:

    server.on('error', (e) => {
      if (e.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(() => {
          server.close();
          server.listen(PORT, HOST);
        }, 1000);
      }
    });

Agora que temos uma estrutura básica e sua definição, basta fazer o run do script no terminal de comando, basicamente sem nenhum resultado, o console apenas define uma operação em execução.

Para melhorar esta chamada, faça a seguinte inclusão:

    const http = require('http');
    
    http.createServer().listen(8080);
    
    console.log("Servido Ativo na porta 8080"); <

Encerre o servidor com Ctrl + C e torne a executá-lo. Perceba que a mensagem definida passa a estar aparente, mostrando a ativação do servidor.

Com o servidor ativo, é possível acessá-lo pelo navegador da seguinte forma:

    localhost: 8080

Ao defnir um localhost, está sendo dito que um servidor ativo localmente, em uma port específica, será acessado. Mas perceba que não há qualquer retorno do navegador. Com isso, dentro do método <i>createServe()</i>, defina uma response inicial para quem o acessar:

    function(req, res) {
       
       res.end("<h1>Welcome</h1>")

    }


<h2>end()</h2>


Por definição a função end, atribuída ao parâmetro res, é:

    (method) internal.Writable.end(chunk: any, cb?: () => void): void (+2 overloads)

O método writable.end() ou sua chamada sinaliza que nenhum outro dado será gravado no Writable. O fragmento opcional e os argumentos de codificação permitem que um fragmento adicional final de dados seja gravado imediatamente antes de fechar o fluxo.

Chamar o método write após chamar end gerará um erro.

    // Write 'hello, ' and then end with 'world!'.
    const fs = require('fs');
    const file = fs.createWriteStream('example.txt');
    file.write('hello, ');
    file.end('world!');
    // Writing more now is not allowed!

Encerre o server e torne a executá-lo, tendo como resposta a mensagem atribuída ao parâmetro res da função criada. Este é seu primeiro HTTP server criado com o Node.


<h1>Destrinchando o Express</h1>


O Express é um framework Web que auxilia no desenvolvimento de aplicações Back-end utilizando o Node.js. Sendo uma das ferramentas mais populares na comunidade Javascript.


<h2>Por que o Express ?</h2>


O Node por si só fornece recursos o sufiente para criar um ambiente de desenvolvimento mínimo, sendo um desses recursos o anteriomente visto HTTP module. Além de contar com um sistema próprio de roteamento, middlewares e entre outros, o Express dá um boost em termos de funcionalidades a qualquer módulo padrão do Node, inclusive no próprio http. Além da capacidade de interação com os bancos de dados mais populares, seguindo modelos relacionais e não relacionais, como o MySQL e o MongoDb.

O link a seguir direciona para a documentação oficial do Express:

[expressjs.com](https://expressjs.com/)


<h2>npm</h2>


O npm, ou Node Package Manager, é um gerenciador de pacotes padão do Node.js e bastante utilizado em framework e libs Javascript. Com o npm é possível instalar os mais divérsos packages em um projeto, estes estando agrupados na node_modules folder, sobre a qual falaremos mais a frente. Ele vem junto do Node no processo de instalação, portanto, neste momento você já pode fazer unso do mesmo. Para verificar a versão instalada faça o run do comando a seguir no terminal de comando:

    npm -v

Para saber mais sobre o npm, verifique o link a seguir:

[npmjs.com](https://www.npmjs.com/)


<h2>Instalando o Express</h2>


Antes de instalar uma ferramenta utilizada em projetos node, é preciso ter o projeto em si. Logo, use o comando a seguir para inicializar um projeto com o npm:

    npm init

Em seguida, uma série de questões sobre o projeto serão iniciadas, podendo ser respondidas ou puladas, da forma que você bem entender. No final será gerado um package.json contendo essas informações e, por fim, o projeto será criado.


<h2>package.json</h2>


O json, ou JavaScript Object Notation, é um formato de intercâmbio de dados leve, bastante utilizado na Web como modelo comunicacional entre o servidor e o cliente. Neste arquivo são registradas as informações referentes ao seu projeto, além de declarar todos os pacotes que forem instalados seguindo o modelo de texto do json:

    {
      "name": "expr",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

Após termos um projeto em mãos, já é possível fazer a instação do Express através do comando:

    npm install express --save

O trecho --save define que os arquivos gerados na instalação serão salvos do diretório do projeto. Assim temos o Express instalado e pronto para uso, sendo este declarado como dependencie no package.json:

    {
      "name": "expr",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.17.1" <
      }
    }

Um arquivo e uma pasta adicionais também foram gerados com a instalação, eles são o package-lock.json, que basicamente tem a função de ser mais detalhista que o package.json com relação aos pacotes instalados, e o node_modules(anterormente mencionado), onde estão disponíveis todas as bibliotecas npm, inclusive o Express.


<h2>Iniciando um Projeto Express</h2>


Ao iniciar um projeto Express, por padão, é criado um index.js como arquivo principal, onde toda a aplicação será iniciada. Nele iremos fazer as seguintes inserções:

    const express = require('express');
    const app = express();

Basicamente o módulo Express está sendo atribuído à const express, e à const app todas as funcionalidade desse módulo. Para inicializar um servidor com o Express, basta chamar o método listen() através da const app:

    app.listen(3000, function(error) {

     if(error) {

       console.log(error);

     } else {

       console.log('Servidor ativo');

     }

Também é adicionada uma function que define uma resposta caso a ação seja bem sucedida ou caso haja um erro. Ao fazer uma chamada localhost no navegador da porta definida você terá o seguinte erro:

    Cannot GET /

Esse erro se dá pois ainda não há uma definição de rota para o acesso inicial ao servidor, assunto que será abordado a seguir.


<h2>Routing</h2>


O Routing, ou roteamento, se refere a como os endpoints de uma aplicação respondem aos requests do client. Um endpoint é definido por uma URl(ou path) e um método de request HTTP específico, seja um GET, POST e entre outros. Quando cada parte da aplicação é acessada, se nela houver a chamda de uma rota, um novo request é lançado na API, retornando as informações definidas. Observe o exemplo a seguir para melhor entender:

<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/135110095-c77c762d-a816-4883-a588-0b238bc0691b.png">
</div>