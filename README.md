
<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/119588242-c60e9f80-bda6-11eb-8da1-106c82739221.png">
</div>

<br>
<img src="https://img.shields.io/static/v1?label=Node.js&message=Enviroment&color=green&style=for-the-badge&logo=Node"/>


O Node é um ambiente de execução de códigos JavaScript, cuja as funcionalidades e ferramentas propiciam ao desenvolvedor a estrutura necessária para criar, compilar, testar e manter aplicações utilizando o ECMAScript.

Dando uma definição mais específica, o Node exerce a função de interpretar códigos JavaScript fora dos navegadores, tornando possível desvincular a linguagem do Client-side. Tal recurso abre uma série de possibilidades para desenvolver com a já conhecida sintaxe, além de um adicional de ferramentas que auxiliam na criação de aplicações robustas, com arquiteturas e modelos de desenvolvimentos versáteis.

Há uma série de formas de aplicar o Node, seja no server-side, no client-side, em aplicações desktop, micro serviços e entre outros, o Node possui um nível de usabilidade bastante robusto. 


<h2>Por que o Node ?</h2>


As vantagens de utilizar determinda tecnologia em detrimento de outra sempre geram questionamento, mas, na prática, escolher um framework, um ambiente de desenvolvimento ou mesmo uma linguagem de programação se dá pela demanda do sistema que será criado. Pode-se dizer que do Node é possível extrair resultados rápidos e com uma alta escalabilidade; o Node possui um ecosistema bastante robusto graças ao npm(Node Package Manager) que dá a possibilidade de ter acesso a recursos para tratar diversas necessidades, como requisições http, operações em bases de dados e entre outros, além de ser bastente leve em comparação a outras ferramentas.


<h2>Instalação</h2>


Para instalar o Node.js basta seguir as recomendações da plataforma oficial da ferramenta encontrada no link a seguir:


[nodejs.org](https://nodejs.org/en/)


É recomendado ter a versão LTS instalada, pois ela garante todas as funcionalidades do Node sem nenhuma restrição. Isso se dá pois a versão Current normalmente está em processo de desenvolvimento, portanto, pode conter issues em manutenção.

Após o fim da instalação, use o comando a seguir para verificar a versão instalada e se o processo ocorreu corretamente:


    node -v


<h2>Hello World</h2>


Para executar o popular Hello World através do Node.js basta criar um diretório que irá conter o arquivo referente e executá-lo na linha de comando. Com isso, crie uma pasta no local desejado e nela o arquivo <i>app.js</i>. Neste arquivo escreva as seguinte linha de código:


    console.log('Hello World!');


Para executá-la basta acessar o diretório criado através do prompt de comando e fazer o run do script da seguinte forma:


    node app.js


E como resultado temos um Hello World escrito em Javascript e executado fora de um navegador.


<h2>Node CLI</h2>


Se usarmos o comando <b><i>node</i></b> no terminal, podemos ter acesso a Command line interface do Node, com a qual já é possível executar algumas linhas de código JavaScript. Experimente executar a seguinte operação:


    > var a = "Hello, world!"
    undefined
    > a
    'Hello, world!'


Uma simples chamada de variável permite entender como o Node independe de qualquer navegador para executar códigos JavaScript. Entretanto, há algumas diferenças entre o browser e a Node Cli, e tentar acessar estruturas como a árvore DOM por exemplo, não produz resultado. Observe:


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


O desenvolvimento de aplicações utilizando o Node.js, especificamente aplicações server-side, demandam alguns conhecimentos prévios, tais como os métodos de comunição utilizados na web, as estruturas que compõem um projeto as ferramentas mais utilizadas pela comunidade de desenvolvedores. Portanto, antes de iniciarmos com o a criação de um projeto real, iremos abordar esses conceitos e entender sua importância:


<h2>HTTP</h2>


O HTTP, ou HyperText Transfer Protocol, é um dos mais antigos protocolos de comunicação que definem a troca de informações entre diferentes pontos da Web. Em conjunto com o TCP-IP, forma o modelo padrão de comunicação server-client, definido em requisições atreladas ao endereço de IP de um ambiente e definindo o envio, recebimento e alteração de informações. 


<h2>Métodos HTTP</h2>


Os métodos, verbos, ou protocólos HTTP, são um dos conceitos mais importantes para desenvolver aplicações server-side. Com elas definimos a intenção de realizar uma ação que relacione o servidor em uso e uma base de dados, podendo ser a obtenção de informações, o envio, edição e etc. Logo, conhecer estes métodos é extremamente importante. A seguir temos uma definição básica dos principais métodos HTTP:


<br>


|         Methods         |                                    Descrição                                            |
| ----------------------  |  -------------------------------------------------------------------------------------- |
|  GET                    |   O método GET solicita que o recurso de destino transfira uma representação de seu estado. As requsições GET devem apenas recuperar dados e não devem ter nenhum outro efeito. É sem dúvida o método de comunicação mais utilizado na web e pode ser notado em qualquer aplicação que liste informações, sejam elas imagens, texto, arquivos, ou qualquer informação que seja possível armazenar em uma base de dados.                        | 
|  HEAD                   |   O método HEAD solicita que o recurso de destino transfira uma representação de seu estado, como para uma requisição GET, mas sem os dados de representação incluídos no corpo da resposta. Isso é útil para recuperar os metadados de representação no cabeçalho da resposta, sem ter que transferir toda a representação.  |
|  POST                   |   O método POST solicita o processamento da informção incluída na requisição de acordo com a semântica do recurso de destino. Por exemplo, ele é utilizado em uma solitação de acesso, como login, cadastro, assinatura, etc. Basicamente é usado para registra informações temporárias ou permanentes.                                   |
|  PUT                    |   O método PUT solicita que a informação registrada no destino crie ou atualize seu estado com o estado definido pela representação incluída na requsição. Como em qualquer atualização de informações em uma aplicação, seja mudanças de dados do usuário e entre outros.                                   |
|  DELETE                 |   O método DELETE solicita que o recurso de destino exclua seu estado.                                   |
|  CONNECT                |   O método CONNECT solicita que o intermediário estabeleça um túnel TCP / IP para o servidor de origem identificado pelo destino da solicitação. É frequentemente usado para proteger conexões por meio de um ou mais proxies HTTP com TLS.                                   |
|  OPTIONS                |   O método OPTIONS solicita que o recurso de destino transfira os métodos HTTP que ele suporta. Isso pode ser usado para verificar a funcionalidade de um servidor da web solicitando '*' em vez de um recurso específico.                                   |
|  TRACE                  |   O método TRACE solicita que o recurso de destino transfira a solicitação recebida no corpo da resposta. Dessa forma, o cliente pode ver quais alterações ou acréscimos foram feitos (se houver) pelos intermediários.                                   |
|  PATCH                  |   O método PATCH solicita que o recurso de destino modifique seu estado de acordo com a atualização parcial definida na representação incluída na requisição.                                   |


<br>


<h2>Requisições HTTP</h2>


Um request, ou requisição, é basicamente uma solicitação de comunicação utilizando um verbo HTTP que espera uma resposta, sendo formada por um ou mais headers e por um body opcional. A seguir temos uma definição básica dessas duas estruturas que compõem uma requisição:


<h2>Headers</h2>


Um header ou cabeçalho consiste em uma concessão que define uma condição de acesso ao servidor, podendo variar de requisição em requisição, ou até mesmo de aplicação em aplicação. Essas informações podem ser o protocólo http em uso, o host do servidor, o idioma aceito ou uma série de autenticações de acesso. Para melhor entender, a seguir temos a descrição de headers bastante comuns:


<h2>Headers Gerais</h2>


|         Header          |                                    Descrição                                            |
| ----------------------  |  -------------------------------------------------------------------------------------- |
|       Connection        |   O header Connection diz para a outra ponta da comunicação se deve fechar a conexão TCP depois da transmissão HTTP for completada ou manter ela aberta para mensagens futuras.|
|    Content-Encoding     |   Especifica que tipo de codificação está sendo usada para o conteúdo do corpo da mensagem, como gzip, o qual é usada por algumas aplicações para comprimir as respostas para uma transmissão mais rápida.|
|     Content-Type        |   O Content-Type especifica o tipo de conteúdo do corpo da mensagem, como text/html para documentos HTML.|


<h2>Headers de Solicitação</h2>


|      Header        |                                         Descrição                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
|   Authorization    |  Envia as credenciais de acesso ao servidor para um tipo embutido de autenticação HTTP.              |
|       Origin       |  Origin é usado em solicitações Ajax cross-domain para indicar o domínio do qual a solicitação foi originada. |
|      Referer       |  O cabeçalho Referer é usado para indicar a URL a partir do qual o pedido é originado.               |
|     User-Agent     |  Provê informação sobre o navegador ou outro software cliente que originou a solicitação.            | 


<h2>Negociação de Conteúdo</h2>

|      Header        |                                         Descrição                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
|       Accept       |  Accept informa ao servidor que tipo de conteúdo o cliente estará aceitando, como tipos de imagens,  |
|   Accept-Encoding  |  Accept-Encoding diz ao servidor que tipo de codificação do conteúdo o cliente estará aceitando.     |
|   Accept-Language  |  Inroma ao servidor a linguagem na qual é espera a resposta.                                         |


<h2>Body</h2>



<h2>Status Code</h2>


Cada resposta a uma requsição HTTP conta com um status code que define o resultado da requisição. Os códigos de status se divitem em grupos que definem sucesso, falha, invormativos, redirecionamento, erro do cliente e entre outros. A seguir estão listados alguns deles:


<h2>Informativo</h2>


|           Code           |                                        Descrição                                               |
| -----------------------  | ---------------------------------------------------------------------------------------------- |
|       100 Continue       |  Significa que o servidor recebeu os cabeçalhos da solicitação, e que o cliente deve proceder para enviar o corpo do pedido (no caso de haver um pedido, um corpo deve ser enviado, por exemplo, um POST pedido). Se o corpo do pedido é grande, enviando-o para um servidor, se o pedido já foi rejeitado, com base em cabeçalhos inadequados é ineficiente.|
|  101 Switchinh Protocols |  O solicitante pediu ao servidor para mudar os protocolos, e o servidor está reconhecendo que irá fazê-lo.|
|      102 Processing      |  Como uma solicitação WebDAV pode conter muitos sub-pedidos que envolvam operações de arquivo, pode demorar muito tempo para concluir o pedido. Este código indica que o servidor recebeu e está processando a solicitação.|


<h2>Sucesso</h2>


|          Code            |                                           Descrição                                            |
| -----------------------  | ---------------------------------------------------------------------------------------------- |
|         200 OK           |  O pedido resultou na resposta esperada pela operação, sem qualquer tipo de erro.              |
|      201 Created         |  O pedido foi cumprido e resultou em um novo recurso que está sendo criado.                    |
|     202 Accepted         |  O pedido foi aceito para processamento, mas o tratamento não foi concluído. O pedido poderá ou não vir a ser posta em prática, pois pode ser anulado quando o processamento ocorre realmente.|


<h2>Erros do Client</h2>


|          Code            |                                           Descrição                                            |
| -----------------------  | ---------------------------------------------------------------------------------------------- |
|     400 Bad Request      |  O pedido não pôde ser entregue devido à sintaxe incorreta.                                    |
|    401 Unauthorized      |  Definido quando a autenticação de acesso ao servidor não foi fornecida.                       |
|     404 Not Found        |  O recurso requisitado não foi encontrado, mas pode ser disponibilizado novamente no futuro. As solicitações subsequentes pelo cliente são permitidas.|


<h2>Erros no Server</h2>

 
|          Code               |                                        Descrição                                             |
| --------------------------  | -------------------------------------------------------------------------------------------- |
|  500 Internal Server Error  |  Indica um erro do servidor ao processar a solicitação. Na grande maioria dos casos está relacionada as permissões dos arquivos ou pastas do software ou script que o usuário tenta acessar e não foram configuradas no momento da programação/construção do site ou da aplicação.|
|    501 Not Implemented      |  O servidor ainda não suporta a funcionalidade ativada.|
|   503 Sevice Unavailable    |  O servidor está em manutenção ou não consegue dar conta dos processamentos de recursos devido à sobrecarga do sistema. Isto deve ser uma condição temporária.|


<h2>Módulos</h2>


Não sendo um padrão do Javascript, criar módulos onde cada parte do código permanece acessível e separada das demais é bastante usual e recomendado, já que atribui ao projeto um maior nível de oraganização, praticidade e eficácia. Os módulos também são importantes para definir o uso de bibliotecas e pacotes que farão parte da estrutura do sistema, e que serão instalados e importados através da modularização.

Para entender a modularização organizacional no Node imagene o seguinte cenário: Você precisa criar um sistema símples, capaz de converter reais em dolares, euros e libras. Isso poderia ser feito da seguinte forma:

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


Após repetir o mesmo processo com as demais funções, temos o arquivo principal modularizado, mantendo o resultado anteriormente mostrado como output:


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



Para entender como aplicar e como funciona o básico das requisições HTTP com o Node, vamos a um exemplo: Em um diretório, crie um arquivo <i>app.js</i>, nele iremos fazer um riquire do módulo http do Node:

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

<div align="center">
  <h5>As chaves são declaradas em minúsculas e valores não são modificados.</h5>
</div>

Para oferecer suporte a todo o espectro de aplicativos HTTP possíveis, a API HTTP Node.js é de nível muito baixo. Ela lida apenas com o tratamento de fluxo e análise de mensagem. Ela analisa uma mensagem em cabeçalhos e corpo, mas não analisa os cabeçalhos reais ou o corpo.

<div align="center">
  <h5>Consulte message.headers para obter detalhes sobre como os cabeçalhos duplicados são tratados.</h5>
</div>

Os cabeçalhos brutos à medida que forem recebidos são retidos na propriedade rawHeaders, que é uma matriz de [chave, valor, chave2, valor2, ...]. Por exemplo, o objeto de cabeçalho da mensagem anterior pode ter uma rawHeaderslist como a seguinte:

    [
      'ConTent-Length', '123456',
      'content-LENGTH', '123',
      'content-type', 'text/plain',
      'CONNECTION', 'keep-alive',
      'Host', 'mysite.com',
      'accepT', '*' 
    ]

Para prosseguir com o exercicio defina a chamada do método <i>createServer()</i> através da const que recebe o módulo http:

     http.createServer()


<h2>createServer()</h2>


O método createServer() por sua vez é definido pelo Node como:

    function createServer(requestListener?: http.RequestListener): http.Server (+1 overload)

A função createServer retorna uma nova instância do Server. Já o parâmetro requestListener é uma função adicionada automaticamente ao evento 'request'. Nele também iremos definir o uso do método <i>listen()</i>, passando uma porta na qual o servidor estará ativo:
    
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

Esta função é assíncrona. Quando o servidor começar a 'escutar', o evento listening será emitido. O último parâmetro de retorno de chamada será adicionado como um listener para o evento de listening.

Todos os métodos listen() podem usar um parâmetro de backlog para especificar o comprimento máximo da fila de conexões pendentes. O comprimento real será determinado pelo sistema operacional por meio de configurações sysctl, como tcp_max_syn_backlog e somaxconnon Linux. O valor padrão deste parâmetro é 511 (não 512).

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

Agora que temos uma estrutura básica e sua definição, basta fazer o run do script no terminal de comando, tendo basicamente nenhum resultado, o console apenas define uma operação em execução.

Para melhorar esta chamada, faça a seguinte inclusão:

    const http = require('http');
    
    http.createServer().listen(8080);
    
    console.log("Servido Ativo na porta 8080"); <

Encerre o servidor com Ctrl + C e torne a executá-lo. Perceba que a mensagem definida passa a estar aparente, mostrando a ativação do servidor.

Com o servidor ativo, é possível acessá-lo pelo navegador da seguinte forma:

    localhost: 8080

Ao defnir um localhost, está sendo dito que um servidor ativo localmente, em uma port específica, será acessado. Mas perceba que não há qualquer retorno do navegador. Com isso, dentro do método <i>createServe()</i>, defina uma response inicial para quem o acessar:

    http.createServer(

     function(req, res) {
        
        res.end("<h1>Welcome</h1>")
     }

    ).listen(8080);


<h2>req</h2>


O parâmetro req nada mais é quem uma forma de receber informações através de uma requisição, normalmente sendo definida como parte de uma rota e sendo enviada quando a mesma sofre uma requisição. Flaremos sobre o conceito de rotas e como definir a passagem de informações através delas mais a frente.


<h2>res</h2>


O parâmetro res é o oposto do req, definido uma resposta a chamda de uma requisição. Essa resposta pode ser uma mensagem de erro, sucesso ou alguma informação relevante, porém, simples. Flaremos mais sobre respostas a requests mais a frente.


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

Com isso, encerre o server e torne a executá-lo, tendo como resposta a mensagem atribuída ao parâmetro res da função criada. E pronto, este é seu primeiro HTTP server criado com o Node.


<h1>Destrinchando o Express</h1>


O Express é um framework Web que auxilia no desenvolvimento de aplicações Back-end utilizando o Node.js. Sendo uma das ferramentas mais populares na comunidade Javascript e, sem dúvidas, a mais popular vinculada ao Node. Também é bastante popular no desenvolvimento de Rest e Restful Api's em Node.


<h2>Por que o Express ?</h2>


O Node por si só fornece recursos o sufiente para criar um ambiente de desenvolvimento mínimo, sendo um desses recursos o anteriomente visto HTTP module. Além de contar com um sistema próprio de roteamento, middlewares e entre outros, o Express dá um boost em termos de funcionalidades a qualquer módulo padrão do Node, inclusive no próprio http. Além da capacidade de interação com os bancos de dados mais populares, seguindo modelos relacionais e não relacionais, como o MySQL e o MongoDb.

O link a seguir direciona para a documentação oficial do Express: [expressjs.com](https://expressjs.com/)


<h2>npm</h2>


O npm, ou Node Package Manager, é um gerenciador de pacotes padão do Node.js e é basicamente obrigatório em frameworks e libs Javascript. Com o npm é possível instalar os mais diversos packages em um projeto, estes estando agrupados na node_modules folder, sobre a qual falaremos mais a frente. Ele vem como um adicional no processo de instalação do Node, visto que seu uso é inevitável. Logo, neste momento você já pode fazer uso do mesmo. Para verificar a versão instalada faça o run do comando a seguir no terminal:

    npm -v

Para saber mais sobre o npm, verifique o link a seguir: [npmjs.com](https://www.npmjs.com/)


<h2>Instalando o Express</h2>


Antes de instalar uma ferramenta utilizada em projetos node, é preciso ter o projeto em si. Logo, use o comando a seguir para inicializar um projeto com o npm:

    npm init

Em seguida, uma série de questões sobre o projeto serão iniciadas, as quais podem ser ignoradas no momento. No final será gerado um package.json contendo as informações dadas e, por fim, o projeto será criado.


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

O trecho <i>--save</i> define que os arquivos gerados na instalação serão salvos no diretório do projeto. Assim temos o Express instalado e pronto para uso, sendo este declarado como dependencie no package.json:

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

Um arquivo e uma pasta adicionais também foram gerados com a instalação, eles são o package-lock.json, que basicamente tem a função de ser mais detalhista que o package.json quanto aos pacotes instalados, e o node_modules(anterormente mencionado), onde estão disponíveis todas as bibliotecas npm, inclusive o Express.


<h2>Iniciando um Projeto Express</h2>


Ao iniciar um projeto Express, por padão, é criado um index.js como arquivo principal, onde toda a aplicação será iniciada. Nele iremos fazer as seguintes inserções:

    const express = require('express');
    const app = express();

Basicamente o módulo Express está sendo atribuído à const express, e à const app todas as funcionalidade desse módulo. Para inicializar um servidor com o Express basta chamar o método listen() através da const app:

    app.listen(3000, function(error) {

     if(error) {

       console.log(error);

     } else {

       console.log('Servidor ativo');

     }

Também é adicionada uma function que define uma resposta caso a ação seja bem sucedida ou caso haja um erro. Ao fazer uma chamada localhost no navegador e na porta definida você terá o seguinte erro:

    Cannot GET /

Este erro se dá pois ainda não há uma definição de rota para o acesso inicial ao servidor, assunto que será abordado a seguir.


<h2>Routing</h2>


O Routing, ou roteamento, se refere a como os endpoints de uma aplicação respondem aos requests do client. Um endpoint é definido por uma URL(ou path) e um método de request HTTP específico, seja um GET, POST e entre outros. Quando cada parte da aplicação é acessada, se o acesso a ela define a chamada de uma rota, um novo request é lançado na API, retornando as informações definidas como response. Para melhor entender observe o exemplo a seguir:

<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/135192687-69166538-030b-47e1-8350-683f6c581d9e.png">
</div>

O Routing segue o modelo de definção descrito a seguir:

    app.METHOD(PATH, HANDLER)

onde:

- app é uma instância do express
- METHOD é um HTTP request method, em minúsculo
- PATH é o path que será acessado
- HANDLER é a função executada quando a rota é chamada

Para definir uma rota inicial de acesso ao servidor anteriormente criado, faça a seguinte inserção:

    app.get('/', (req, res) => {
        
    });


<h2>GET</h2>


O médodo get(), disponibilizado pelo Express, possui dois parâmetros: O path inicial que precisa ser chamado para executar a requisição, sendo este '/'; e uma função HANDLER com os parâmetros req e res, que respectivamente definem as informações enviadas no request e a response resultante.

Tendo uma rota inicial criada, é preciso definir uma resposta para a chamada desta. Veja a seguir:


<h2>send()</h2>


A propriedade send define uma resposta para qualquer requisição na qual ela é declarada, seja um objeto json, uma mensagem de erro e entre outras. Exemplos:

    res.send(new Buffer('wahoo'));
    res.send({ some: 'json' });
    res.send('<p>some html</p>');
    res.status(404).send('Sorry, cant find that');

Para aplicar uma definição de response na rota inicial do seu servidor, faça a seguinte inserção:

    app.get('/', (req, res) => {
    
      res.send('<h1>Welcome to my app!</h1>');
    
    });

Ao reiniciar o servidor e acessá-lo no navegador não notamos mais a presença do erro Cannot GET /, visto que criamos uma chamada get e a ela foi dada uma response de retorno. Agora, para frisar o conceito de rotas, siga criando mais delas, como por exemplo:

    app.get('/home', (req, res) => {
       
       res.send('<h1>This is the home page</h1>');
    
    })
    
    app.get('/home/profile', (req, res) => {
    
      res.send('<h1>This is my profile</h1>');
    
    })

Ao definir o acesso a cada rota na URL, a resposta correspondente irá aparecer em tela, definindo partes diferentes com funções distintas na mesma aplicação, isso graças ao Express Routing.


<h2>Automatizando com o Nodemon</h2>


O Nodemon é um Node module responsável por automatizar o processo de atualização de um servidor em execução, evitando a necessidade de derrubá-lo e torná-lo ativo sempre que o código for atualizado, já que o mesmo detecta e aplica qualquer alteração salva. Para fazer a instalação e configurar seu uso, observe os passos a seguir:

    npm install nodemon -g

Após o fim da instalação é possível iniciar o monitoramento de mudaças através do comando:

    nodemon index.js

Tendo como resultado:

    [nodemon] 2.0.13
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node index.js`
    Servidor ativo

Após fazer qualquer modificação, o servidor será reiniciado automaticamente:

    [nodemon] 2.0.13
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node index.js`
    Servidor ativo
    [nodemon] restarting due to changes...
    [nodemon] starting `node index.js`
    Servidor ativo


<h2>Parâmetros em Rota</h2>


O processo de request muitas vezes conta com a necessidade de envio de certas informações do usuário para que o mesmo tenha uma resposta satisfatória. Um exemplo seria uma tela de login, onde as informações registradas em uma etapa de cadastro anterior são necessárias para ter acesso a tela de home, perfil e etc. Essas informações podem compor o body de uma requisição ou podem ser eviadas como parâmetro na própria rota. 

Para um melhor entendimento, crie uma nova rota para representar a tela de login:

    app.get('/login', (req, res) => {
    
      res.send('<h1>This is my login page</h1>');

    });

Com isso é possível definir parâmetros que serão recebidos quando a rota for chamada. Isso é feito da seguinte forma:

    app.get('/login/:email/:password', (req, res) => {
    
      res.send('<h1>This is my login page</h1>');

    });

Agora, caso a rota de /login seja chamada no navegador é possível notar que o servidor não reconhece a chamada. Isso se dá pois, uma vez que os parâmetros são definidos, eles devem ser respeitados, logo, as informações devem ser concedidas para que possa haver uma resposta. Por exemplo: 

    http://localhost:3000/login/dev123@gmail.com/123456

Com os parâmetros definidos em rota, é possível ter a resposta da requisição. Além disso, também é possível fazer uso dos dados enviados no request por meio do atributo params. Observe:

    app.get('/login/:email/:password', (req, res) => {
    
      res.send(`<h1>${req.params.email}</h1>`);
    
    });

A resposta em tela passa a ser o valor passado como o primeiro parâmetro na rota de login, podendo ser um nome ou qualquer outra informação, sendo esta atualizada dinamicamente.


<h2>Nullable Params</h2>


A obrigatoriedade do envio de um valor como o parâmetro declarado em uma rota é definida no momento da declaração, porém, também é possível definir um parâmetro opicional o tornando nullable:

    app.get('/login/:email/:password?', (req, res) => {
    
      res.send('<h1>This is my login page</h1>');
    
    });

Com isso, apenas o parâmetro no-nullable é exigido quando uma requisição for executada.


<h2>Métodos Express</h2>


<h1>Rest</h1>


O Rest, ou Representational State Transfer, é um padrão de desenvolvimento de WebServices que segue um modelo de desenvolvimento mais comum e recomendado. O modelo Rest segue um padão guiado por alguns pilares que pretendem tornar a aplicação mais eficiente:


<h2>Client ou Server</h2>


O Rest mantém isoladas as duas porções de um app, não permitindo que a aplicação exerça funções como a renderização de uma interface e servir os dados para consumo, ou seja, um WebService que segue o modelo Rest é totalmente independente e pode ser consumido por outra aplicação, o que a impede de ser servidor e cliente ao mesmo tempo.


<h2>Stateless</h2>


No modelo de Api Rest cada requisição é idependente e não mantém o state de nenhuma requisição, ou seja, nenhuma informação referente a um request ou response de um cliente é mantido após sua execução.


<h2>Cache</h2>


O conceito de cache é aplicado no Rest com o intuito de otimizar as interação por meio do acesso a informações que visam otimizar o envio e o recebimento de dados entre o cliente e o servidor.


<h2>Desenvolver em Camadas</h2>


As camadas que definem uma aplicação Rest são a definição que se dá para o isolamento de servidores distintos dentro de um sistema. Ou seja, a segurança, o carregamento de carga e entre outros não impeditivos para o funcionamento correto da Api.


<h2>Uniformidade de Interface</h2>


A interface de uma aplicação server-side nada mais é que as definições de escrita dadas ao endPoints, ou rotas, de umaaplicação. A uniformidade que o Rest demanda no momento de criação das rotas se refere a o quão descritivas estas são, evitando redundâncias e deixando as definições de ações para o verbos http. 

O Rest ainda um suporte diveros em termos de formato de dados como retorno, sendo um deles o já citado json, além do xml, arquivos em geral e entre outros.


<h2>O que é Restful ?</h2>


A definição básica de uma Api Rest é que ela segue todos os padrões listados anteriormente. Porém, uma Api Restful precisa seguir outros mais para receber essa designação, eles são:

- Nível 0 - Aplicar apenas um endPoint central
- Nível 1 - Definição e uso de recursos/entidades(produto, usuário, categoria, etc)
- Nível 2 - Aplicar o verbos HTTP
- Nível 3 - Hateoas(Define na response de uma requisição quais ações podem ser ralizadas com os recursos obtidos)


<h2>Criando uma Api Rest</h2>


Para entender na prática como os conceitos que definem uma Rest Api podem e devem ser aplicados, iremos desenvolver um projeto simples para listar algumas informações, inicialmente vindos da própria Api, pois abordaremos o uso de bases de dados futuramente. Para começar, inicie um novo projeto com o <i>npm init</i> e inicialize o servidor como foi visto anteriormente:

Neste exemplo faremos uso de duas bibliotecas, sendo uma delas o já abordado express e o body-parser:


<h2>Body-parser</h2>


O [body-parser](https://www.npmjs.com/package/body-parser#bodyparserjsonoptions) é uma biblioteca que auxilia no processo de leitura e exposição de um http request, ou mais especificamente, do body de um request. Ao aplicá-lo em um projeto, é possível converter o corpo de uma requisição para diversos formatos, sendo um deles o já citado json, permitindo que a aplicação mantenham um padrão de formado de texto na sua comunicação com quem a consumir.

Para instalar a ferramenta, acesse o terminal de comando e faça o run do comando a seguir:

    npm install body-parser --save

para fazer uso do body-parser basta definir o seguinte require:

    const bodyParser = require('body-parser')

O body-parser possui algumas formas de analisar o corpo de uma requsição, o expondo em <b>req.body</b>, elas são:

<h2>bodyParser.raw ()</h2>

<h2>bodyParser.text ()</h2>

<h2>bodyParser.urlencoded ()</h2>

<h2>bodyParser.json ()</h2>


<h2>Listando Usuários</h2>


Após entender um pouco mais sobre o body-parser, logo após os requires, defina as configurações de leitura das requisições do servidor criado da seguinte forma:

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

Em seguida crie um variável que será responsável por simular os dados vindos da base:

    var dataBase = {
    
       users: [
    
         {
           id: '4354534636565645645645645646', 
           name: 'Ana', 
           age: 25
         },
         {
           id: '1231214233453453453453435345', 
           name: 'Luana', 
           age: 18
         },
         {
           id: '46453345676786798979786755543', 
           name: 'Pedro', 
           age: 26
         },
         {
           id: '12345677867865675645747467575', 
           name: 'Anderson', 
           age: 46
         },
    
       ]
    }

Nela foi definido um array chamado de users, este que carrega uma lista de objetos contendo as informações sobre os usuários de uma plataforma meramente esplicativa, cada um possuindo um id, nome e idade próprios. O próximo passo é definir o endPoint de acesso a essas informações usando o verbo get:

    app.get('/users', (req, res) => {
  
    });

O identificador do endPoint, ou seu "nome", é um dos aspectos que tornam uma Api Rest ou não, sendo chamado de Uniformidade de Interface, quando bem aplicado. Neste caso, foi dado ao endPoint que resulta na listagem dos usuários uma definição bastante simples e descritiva, o que se encaixa na descrição uniforme de uma interface de rota.

Em seguida definiremos a res que será dada quando uma chamda na rota users for feita, sendo os dados vindos da <i>dataBase</i>:

    app.get('/users', (req, res) => {
       res.json(dataBase.users);
    });

À res é atribuido o formato json definido pelo body-parser, que pode ser vista na resposta a chamada quando esta for feita no namegador ou em alguma ferramenta de Rest Api Client, como o Insomnia, Postman ou Thunder Client:

    [
      {
        "id": "4354534636565645645645645646",
        "name": "Ana",
        "age": 25
      },
      {
        "id": "1231214233453453453453435345",
        "name": "Luana",
        "age": 18
      },
      {
        "id": "46453345676786798979786755543",
        "name": "Pedro",
        "age": 26
      },
      {
        "id": "12345677867865675645747467575",
        "name": "Anderson",
        "age": 46
      }
    ]


<h2>Listando Usuário Específico</h2>


Para aplicar os conceitos anteriormente vistos, vamos defir um endPont que retorna um usuário específico com base no id passado como parâmetro em rota:

    app.get('/users/getUser/:id', (req, res) => {
    
        var id = req.params.id;
    
        if(isString(id)) {
          
        } else {
          res.statusCode = 400;
          res.send({});
        }
    
    });

Veja que uma validação define o type que será passado como parâmetro como sendo obrigatoriamente do tipo String, visto que este corresponde ao id definido em cada user no objeto referente a users. Caso o valor enviado for diferente do que foi determinado, a resposta será um statusCode 400(Bad Request) e o body será apenas um objeto vazio. Em seguida faremos um "SELECT" no nosso banco de dados fictício da seguinte forma:

    var user = dataBase.users.find(u => u.id == id);
     
    if(user != undefined) {

     res.json(user);

    } else {

     res.statusCode = 404;
     res.send('Not Found');

    }

Uma verificação através do método find é feita no array users, definindo se o id encontrado corresponde ao id passado via endPont. Em seguida uma validação define que, caso a informação encontrada exista, o user será retornado, e caso não exista, o retorno será um status code 404(Not found). Exemplo:

User encontrado:

Request: http://localhost:3000/users/getUser/4354534636565645645645645646

retorno:

    {
      "id": "4354534636565645645645645646",
      "name": "Ana",
      "age": 25
    }

User não encontrado:

Request: http://localhost:3000/users/getUser/435453463656564564564564564

retorno:

    Status: 404

    Not Found

Falar sobre os componentes de uma requisição
Definir como passar um body com o req.body