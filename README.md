
<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/119588242-c60e9f80-bda6-11eb-8da1-106c82739221.png">
</div>

<br>
<img src="https://img.shields.io/static/v1?label=Node.js&message=Enviroment&color=green&style=for-the-badge&logo=Node"/>


O Node é um ambiente de execução de códigos JavaScript, cuja as funcionalidades e ferramentas propiciam ao desenvolvedor a estrutura necessária para criar, compilar, testar e manter aplicações utilizando o [ECMAScript](https://github.com/VictorSantos12/JavaScript).

Dando uma definição mais específica, o Node exerce a função de interpretar códigos JavaScript fora dos navegadores, tornando possível desvincular a linguagem do Client-side. Tal recurso abre uma série de possibilidades para desenvolver com a já conhecida sintaxe, além de um adicional de ferramentas que auxiliam na criação de aplicações robustas, com arquiteturas e modelos de desenvolvimentos versáteis.

Há uma série de formas de aplicar o Node, seja no server-side, no client-side, em aplicações desktop, micro serviços e entre outros, o Node possui um nível de usabilidade bastante robusto.


<h2>Por que o Node ?</h2>


As vantagens de utilizar determinda tecnologia em detrimento de outra sempre geram questionamento, mas, na prática, escolher um framework, um ambiente de desenvolvimento ou mesmo uma linguagem de programação se dá pela demanda do sistema que será criado. Pode-se dizer que do Node é possível extrair resultados rápidos e com uma alta escalabilidade; o Node possui um ecosistema bastante robusto graças ao npm(Node Package Manager) que dá a possibilidade de ter acesso a recursos para tratar diversas necessidades, como requisições http, operações em bases de dados e entre outros, além de ser bastente leve em comparação a outras ferramentas.


<h2>Instalação</h2>


Para instalar o Node.js basta seguir as recomendações da plataforma oficial da ferramenta encontrada no link a seguir:


[nodejs.org](https://nodejs.org/en/)


É recomendado ter a versão LTS instalada, pois ela garante todas as funcionalidades do Node sem nenhuma restrição. Já a versão Current normalmente está em processo de desenvolvimento, portanto, pode conter issues em manutenção.

Após o fim da instalação, use o comando a seguir para verificar se o processo ocorreu corretamente e também a versão instalada:


    node -v


<h2>Hello World</h2>


Para executar o popular Hello World através do Node.js basta criar um diretório que irá conter o arquivo referente e executá-lo na linha de comando. Com isso, crie uma pasta no local desejado e nela adicione o arquivo <i>app.js</i>. Neste arquivo escreva a seguinte linha de código:


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


Uma simples chamada de variável permite entender como o Node independe de qualquer navegador para executar códigos JavaScript. Entretanto, há algumas diferenças entre o browser e a Node Cli, e tentar acessar estruturas como a árvore DOM, por exemplo, não produz resultado. Observe:


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


O desenvolvimento de aplicações utilizando o Node.js, especificamente aplicações server-side, demandam alguns conhecimentos prévios, tais como os métodos de comunição utilizados na web, as estruturas que compõem um projeto e as ferramentas mais utilizadas pela comunidade de desenvolvedores. Portanto, antes de partirmos para a prática, iremos abordar esses conceitos e entender sua importância:


<h1>HTTP</h1>


O HTTP, ou HyperText Transfer Protocol, é um dos mais antigos protocolos de comunicação que definem a troca de informações entre diferentes pontos da Web. Em conjunto com o TCP-IP, forma o modelo padrão de comunicação server-client, definido em requisições atreladas ao endereço de IP de um ambiente e definindo o envio, recebimento e alteração de informações. 


<h2>Métodos HTTP</h2>


Os métodos, verbos, ou protocolos HTTP, são um dos conceitos mais importantes para desenvolver aplicações server-side. Com eles definimos a intenção de realizar uma ação no servidor em uso, podendo ser a obtenção de informações, o envio, edição e etc. A seguir temos uma definição básica dos principais métodos HTTP:


<br>


|         Methods         |                                    Descrição                                            |
| ----------------------  |  -------------------------------------------------------------------------------------- |
|  GET                    |   O método GET solicita que o recurso de destino transfira uma representação de seu estado. As requsições GET devem apenas recuperar dados e não devem ter nenhum outro efeito. É sem dúvida o método de comunicação mais utilizado na web e pode ser notado em qualquer aplicação que liste informações, sejam elas imagens, texto, arquivos, etc.                        | 
|  HEAD                   |   O método HEAD solicita que o recurso de destino transfira uma representação de seu estado, como para uma requisição GET, mas sem os dados de representação incluídos no corpo da resposta. Isso é útil para recuperar os metadados de representação no cabeçalho da resposta, sem ter que transferir toda a representação.  |
|  POST                   |   O método POST solicita o processamento da informação incluída na requisição de acordo com a semântica do recurso de destino. Por exemplo, ele é utilizado em uma solitação de acesso, como login, cadastro, assinatura, etc. Basicamente é usado para registra informações temporárias ou permanentes.                                   |
|  PUT                    |   O método PUT solicita que a informação registrada no destino crie ou atualize seu estado com o estado definido pela representação incluída na requsição. Como em qualquer atualização de informações em uma aplicação, seja mudanças de dados do usuário e entre outros.                                   |
|  DELETE                 |   O método DELETE solicita que o recurso de destino exclua seu estado.                                   |
|  CONNECT                |   O método CONNECT solicita que o intermediário estabeleça um túnel TCP / IP para o servidor de origem identificado pelo destino da solicitação. É frequentemente usado para proteger conexões por meio de um ou mais proxies HTTP com TLS.                                   |
|  OPTIONS                |   O método OPTIONS solicita que o recurso de destino transfira os métodos HTTP que ele suporta. Isso pode ser usado para verificar a funcionalidade de um servidor da web solicitando '*' em vez de um recurso específico.                                   |
|  TRACE                  |   O método TRACE solicita que o recurso de destino transfira a solicitação recebida no corpo da resposta. Dessa forma, o cliente pode ver quais alterações ou acréscimos foram feitos (se houver) pelos intermediários.                                   |
|  PATCH                  |   O método PATCH solicita que o recurso de destino modifique seu estado de acordo com a atualização parcial definida na representação incluída na requisição.                                   |


<h1>Request & Response</h1>


Um Request, ou requisição, é basicamente uma solicitação do Client utilizando um verbo HTTP que requisita uma resposta, já uma Response é a resposta a um Request. Sendo ambos formados por um ou mais headers e por um body opcional. A seguir temos uma definição básica dessa estrutura:


<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/136315896-1bad0572-e941-40d4-82b3-98b9a77732e7.png">
</div>


<h1>Start-line</h1>


A linha inicial de um Request contém informações distintas das da linha inicial de uma Response. A seguir, essas estruturas são diferenciadas por meio da definição de cada informação nelas contidas:


<h2>Request</h2>

- Um método HTTP, um verbo (como GET, PUT ou POST) ou um nome (como HEAD ou OPTIONS), que descrevem a ação a ser executada.
- O alvo da requisição, normalmente um URL, ou o caminho absoluto do protocolo, porta e domínio são em geral caracterizados pelo contexto da requisição.
- A  versão HTTP, que define a estrutura do restante da mensagem, atuando como um indicador da versão esperada para uso na resposta.


<h2>Response</h2>

- A versão do protocolo, normalmente HTTP/1.1.
- Um status code, indicando o sucesso ou falha da requisição. Códigos de status comuns são 200, 404, ou 302.
- Um texto de status. Uma descrição textual breve, puramente informativa, do código de status a fim de auxiliar o entendimento da mensagem HTTP por humanos.


<h1>Headers</h1>


Um header ou cabeçalho consiste em uma concessão que define uma condição de acesso ao servidor, ou uma resposta após o acesso,podendo variar de requisição para requisição, ou mesmo de aplicação para aplicação. Essas informações podem ser o protocólo HTTP em uso, o host do servidor, o idioma aceito ou uma série de autenticações de acesso. Para melhor entender, a seguir temos a descrição de alguns headers bastante comuns:


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


<h1>Body</h1>


O body é a última porção de uma requisição, onde são passadas as informações em um POST request, por exemplo. Porém, protocolos como o GET, o HEAD ou o DELETE, usualmente, não precisam de um body declarado. O corpo de uma requisição pode ser dividido, a grosso modo, em duas partes:

- Corpos de recurso-simples, consistindo em um único arquivo, definido pelos dois cabeçalhos: Content-Type e Content-Length.
- Corpos de recurso-múltiplo, consistindo em um corpo de múltiplas partes, cada uma contendo uma porção diferente de informação. Este é tipicamente associado à Formulários HTML.


<h1>Status Code</h1>


Como já foi visto, cada response conta com um status code que define o resultado da requisição. Os códigos de status se divitem em grupos que definem sucesso, falha, retorno de informação, redirecionamento, erro do cliente e entre outros. A seguir estão listados alguns deles:


<h2>Informativo</h2>


Sinalizam informações necessárias para dar continuidade ao processo e para obter a resposta em questão, ou mesmo para informar o processamento das informações enviadas no request:


|           Code           |                                        Descrição                                               |
| -----------------------  | ---------------------------------------------------------------------------------------------- |
|       100 Continue       |  Significa que o servidor recebeu os cabeçalhos da solicitação, e que o cliente deve proceder para enviar o corpo do pedido (no caso de haver um pedido, um corpo deve ser enviado, por exemplo, um POST pedido). Se o corpo do pedido é grande, enviando-o para um servidor, se o pedido já foi rejeitado, com base em cabeçalhos inadequados é ineficiente.|
|  101 Switchinh Protocols |  O solicitante pediu ao servidor para mudar os protocolos, e o servidor está reconhecendo que irá fazê-lo.|
|      102 Processing      |  Como uma solicitação WebDAV pode conter muitos sub-pedidos que envolvam operações de arquivo, pode demorar muito tempo para concluir o pedido. Este código indica que o servidor recebeu e está processando a solicitação.|


<h2>Sucesso</h2>


Sinalizam o sucesso na obtenção das informações solicitadas na requisição:


|          Code            |                                           Descrição                                            |
| -----------------------  | ---------------------------------------------------------------------------------------------- |
|         200 OK           |  O pedido resultou na resposta esperada pela operação, sem qualquer tipo de erro.              |
|      201 Created         |  O pedido foi cumprido e resultou em um novo recurso que está sendo criado.                    |
|     202 Accepted         |  O pedido foi aceito para processamento, mas o tratamento não foi concluído. O pedido poderá ou não vir a ser posta em prática, pois pode ser anulado quando o processamento ocorre realmente.|


<h2>Erros do Client</h2>

Sinalizam alguma incoerência nas informações, formato ou métodos da requsição, não retornando a resposta desejada:


|          Code            |                                           Descrição                                            |
| -----------------------  | ---------------------------------------------------------------------------------------------- |
|     400 Bad Request      |  O pedido não pôde ser entregue devido à sintaxe incorreta.                                    |
|    401 Unauthorized      |  Definido quando a autenticação de acesso ao servidor não foi fornecida.                       |
|     404 Not Found        |  O recurso requisitado não foi encontrado, mas pode ser disponibilizado novamente no futuro. As solicitações subsequentes pelo cliente são permitidas.|


<h2>Erros no Server</h2>


Sinalizam problemas internos no servidor, e que as informações envidas no request estão possivelemnte corretas, porém, não foi possível retornar uma response satisfatória:

 
|          Code               |                                        Descrição                                             |
| --------------------------  | -------------------------------------------------------------------------------------------- |
|  500 Internal Server Error  |  Indica um erro do servidor ao processar a solicitação. Na grande maioria dos casos está relacionada as permissões dos arquivos ou pastas do software ou script que o usuário tenta acessar e não foram configuradas no momento da programação/construção do site ou da aplicação.|
|    501 Not Implemented      |  O servidor ainda não suporta a funcionalidade ativada.|
|   503 Sevice Unavailable    |  O servidor está em manutenção ou não consegue dar conta dos processamentos de recursos devido à sobrecarga do sistema. Isto deve ser uma condição temporária.|

Para ver os demais status code existentes, acesse: [http.cat](https://http.cat/)


<h1>Módulos</h1>


Criar módulos onde cada parte do código permanece acessível e separada das demais é bastante usual e recomendado, já que atribui ao projeto um maior nível de oraganização, praticidade e eficácia. Os módulos no Node também são importantes para definir o uso de bibliotecas e pacotes que farão parte da estrutura do sistema, e que serão instalados e importados através da modularização.

Para entender a modularização organizacional no Node, imagene o seguinte cenário: Você precisa criar um sistema símples, capaz de converter reais em dolares, euros e libras. Isso poderia ser feito da seguinte forma:

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


Uma variável representando uma quantia em reais é passada como parâmetro em três funções distintas, cada uma com um operador representando o valor das moedas que as nomeiam em relação ao real nos dias de hoje. Ao executar o script, temos o seguinte resultado:


    1.855287569573284
    1.5873015873015874
    1.3550135501355014


Agora, digamos que o código gerado seja considerado muito grande para ser mantido em um único arquivo do projeto, e foi recomendado a você quebrar o código em partes distintas. Para começar, faremos as seguintes alteraçãos:

Recorte a função <i>dolar</i> do arquivo coin.js, crie um novo arquivo chamado de dolar.js, e nele cole a função. Em seguida defina a função como um módulo exportável usando os atributos <i>module</i> e <i>exports</i> do Node: 


    function dolar(coin) {
    
      return coin / 5.39;
    
    }

    module.exports.dolar = dolar; <


Com isso é possível importar e fazer uso da função <i>dolar</i> em qualquer parte do diretório. Para fazer isso, no arquivo <i>coin.js</i>, defina o require a seguir:


    const dolar = require('./dolar');


O path definido na função require define o caminho para o arquivo dolar.js, e o que é definido como export nele passa a ser acessível através da const dolar. Em seguida atualize o console.log:

    
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


<h2>http Module</h2>


O módulo http permite executar requisições e definir respostas utilizando os protocólos HTTP, além de vários outros recursos, como por exemplo, subir um servidor localmente e tratar das requisições a ele. O módulo http é definido pelo Node da seguinte forma: 

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

Os cabeçalhos brutos, à medida que forem recebidos, são retidos na propriedade rawHeaders do módulo, que é uma matriz de [chave, valor, chave2, valor2, ...]. Por exemplo, o objeto de cabeçalho da mensagem anterior pode ter uma rawHeaderslist como a seguinte:


    [
      'ConTent-Length', '123456',
      'content-LENGTH', '123',
      'content-type', 'text/plain',
      'CONNECTION', 'keep-alive',
      'Host', 'mysite.com',
      'accepT', '*' 
    ]


Para definir o uso do http module, faz-se o require do mesmo da seguinte forma:


    const http = require('http');


Agora que já introdusimos o http mpdule, iremos entender como aplicar e como funciona o básico das requisições HTTP com o Node: Em um diretório, crie uma file app.js, nela faça as seguinte inserções:


    const http = require('http');
    
    http.createServer().listen(8080);
    

<h2>createServer()</h2>


Sendo uma instância do HTTP module, o método createServer é o responsável por subir o servidor em questão. Ele é definido pelo Node como:


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
    

    console.log("Servido Ativo na porta 8080");


Encerre o servidor com Ctrl + C e torne a executá-lo. Perceba que a mensagem definida passa a estar aparente, mostrando a ativação do servidor.

Com o servidor ativo, é possível acessá-lo pelo navegador fazendo a chamada a URL a seguir:


    http://localhost:8080


Ao defnir um localhost, está sendo dito que um servidor ativo localmente, em uma port específica, será acessado. Mas perceba que não há qualquer retorno do navegador. Isto se dá pois ainda não foram declaradas respostas a chamda do servidor criado. Com isso, dentro do método <i>createServe()</i>, defina uma response inicial para quem o acessar:


    http.createServer(

     function(req, res) {
        
        res.end("<h1>Welcome</h1>")
     }

    ).listen(8080);


<h2>req</h2>


O parâmetro req nada mais é quem uma forma de receber e tratar as informações enviadas pelo client ao fazer o request, podendo ser passada como um parâmetro em rota, ou em um request body. Flaremos sobre o conceito de rotas e como definir a passagem de informações através delas mais a frente.


<h2>res</h2>


O parâmetro res é o oposto do req, definido a resposta a chamada de uma requisição. Essa resposta pode ser um statusCode, uma mensagem de erro, sucesso ou alguma outra informação. Flaremos mais sobre respostas a requests mais a frente.


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


Com isso, encerre o server e torne a executá-lo. Em seguida teremos como resposta a mensagem atribuída ao parâmetro res da função criada. E pronto, este é seu primeiro HTTP server criado com o Node.


<h1>Automatizando com o Nodemon</h1>


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


<h1>Destrinchando o Express</h1>


O Express é um framework Web que auxilia no desenvolvimento de aplicações Back-end utilizando o Node.js. Sendo uma das ferramentas mais populares na comunidade Javascript e, sem dúvidas, a mais popular vinculada ao Node. Também é bastante popular no desenvolvimento de Rest e Restful Api's em Node, sobre as quais falaremos mais adiante.


<h2>Por que o Express ?</h2>


O Node por si só fornece recursos o sufiente para criar um ambiente de desenvolvimento mínimo, sendo um desses recursos o anteriomente visto HTTP module. Além de contar com um sistema próprio de roteamento, middlewares e entre outros, o Express dá um boost em termos de funcionalidades a qualquer módulo padrão do Node, inclusive no próprio http. Além da capacidade de interação com os bancos de dados mais populares, seguindo modelos relacionais e não relacionais, como o MySQL e o MongoDb.

O link a seguir direciona para a documentação oficial do Express: [expressjs.com](https://expressjs.com/)


<h2>npm</h2>


O npm, ou Node Package Manager, é um gerenciador de pacotes padão do Node.js e é basicamente obrigatório em frameworks e libs Javascript. Com o npm é possível instalar os mais diversos packages em um projeto, estes estando agrupados na node_modules folder, sobre a qual falaremos mais a frente. Ele vem como um adicional no processo de instalação do Node, visto que seu uso é inevitável. Logo, neste momento você já pode fazer uso do npm. Para verificar a versão instalada faça o run do comando a seguir no terminal:


    npm -v


Para saber mais sobre o npm, verifique o link a seguir: [npmjs.com](https://www.npmjs.com/)


<h2>Instalando o Express</h2>


Antes de instalar uma ferramenta utilizada em projetos node, é preciso ter o projeto em si. Logo, use o comando a seguir para inicializar um projeto com o npm:


    npm init


Em seguida, uma série de questões sobre o projeto serão iniciadas, as quais podem ser ignoradas no momento. No final será gerado um package.json contendo as informações dadas e, por fim, o projeto será criado.


<h2>package.json</h2>


O json, ou JavaScript Object Notation, é um formato de intercâmbio de dados leve, bastante utilizado na Web como modelo comunicacional server-client. Neste arquivo são registradas as informações referentes ao projeto criado, além de declarar todos os pacotes que forem instalados seguindo o modelo de texto do json:


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


Ao iniciar um npm project, por padão, deve ser criado um index.js como arquivo principal, onde toda a aplicação será iniciada. Nele iremos fazer as seguintes inserções:


    const express = require('express');
    const app = express();


Basicamente o módulo Express está sendo atribuído à const express, e à const app todas as funcionalidade deste módulo. Para inicializar um servidor com o Express, basta chamar o método listen() através da const app:


    app.listen(3000, function(error) {

     if(error) {

       console.log(error);

     } else {

       console.log('Servidor ativo');

     }


Também é adicionada uma function que define uma resposta caso a ação seja bem sucedida ou caso haja um erro. Ao fazer uma chamada localhost no navegador e na porta definida você terá o seguinte erro:


    Cannot GET /


Este erro se dá pois ainda não há uma definição de rota para o acesso inicial ao servidor, assunto que será abordado a seguir.


<h1>Routing</h1>


O Routing, ou roteamento, se refere a como os endpoints de uma aplicação respondem aos requests do client. Um endpoint é definido por uma URL(ou path) e um método de request HTTP específico, seja um GET, POST e entre outros. Quando cada parte da aplicação é acessada, se o acesso a ela define a chamada de uma rota, um novo request é lançado na API, retornando as informações definidas como response. Para melhor entender observe o exemplo a seguir:

<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/135192687-69166538-030b-47e1-8350-683f6c581d9e.png">
</div>

O Routing segue o modelo de definição de rotas descrito a seguir:


    app.METHOD(PATH, HANDLER)


onde:

- app é uma instância do express
- METHOD é um HTTP request method, em minúsculo
- PATH é o path que será acessado
- HANDLER é a função executada quando a rota é chamada

Para definir uma rota inicial de acesso ao servidor anteriormente criado, após as declarações iniciais, faça a seguinte inserção:


    app.get('/', (req, res) => {
      
    });


A função HANDLER possui os parâmetros req e res, que respectivamente definem as informações enviadas no request e a response resultante. Tendo uma rota inicial criada, é preciso definir uma resposta para a chamada desta. Para isso, faça a seguinte inserção:


    res.send('<h1>Welcome to my app!</h1>');


<h2>send()</h2>


A propriedade send define uma resposta para qualquer requisição na qual ela é declarada, seja um objeto json, uma mensagem de erro, entre outras. Exemplos:


    res.send(new Buffer('wahoo'));
    res.send({ some: 'json' });
    res.send('<p>some html</p>');
    res.status(404).send('Sorry, cant find that');


Ao acessar o servidor, após reiniciá-lo, não se nota o Cannot GET / no navegador, visto que criamos uma chamada get e a ela foi dada uma response. Agora, para frisar o conceito de rotas, siga criando mais delas, como por exemplo:


    app.get('/home', (req, res) => {
       
       res.send('<h1>This is the home page</h1>');
    
    });
    
    app.get('/home/profile', (req, res) => {
    
      res.send('<h1>This is my profile</h1>');
    
    });


Ao definir o acesso a cada rota na URL, a resposta correspondente irá aparecer em tela, definindo partes diferentes com funções distintas na mesma aplicação, isso graças ao Express Routing.


<h2>Parâmetros em Rota</h2>


O processo de request muitas vezes conta com a necessidade de envio de certas informações do usuário para que o mesmo tenha uma resposta satisfatória. Protocolos como o GET e o HEAD permitem a passagem de parâmetros em rota, normalmente informações usadas para fazer uma busca específica, como o id, CPF ou outra informação.

Para um melhor entendimento, crie uma nova rota para representar a chamada de um usuário específico:


    app.get('/getUser', (req, res) => {
    

    });


Com isso é possível definir parâmetros que serão recebidos quando a rota for chamada. Isso é feito da seguinte forma:


    app.get('/getUser/:id', (req, res) => {
    

    });
    

Caso a rota seja chamada no navegador, ele não irá reconhecer a chamada. Isso se dá pois, uma vez que os parâmetros são definidos, eles devem ser respeitados, logo, as informações devem ser concedidas para que possa haver uma resposta. Por exemplo: 


    http://localhost:3000/getUser/123456


Com os parâmetros definidos em rota, é possível ter a resposta da requisição. Além disso, também é possível fazer uso dos dados enviados no request por meio do atributo params. Observe:


    app.get('/getUser/:id', (req, res) => {
    
      res.send(`<h1>${req.params.id}</h1>`);
    
    });


A resposta em tela passa a ser o valor passado como o parâmetro na rota.


<h2>Nullable Params</h2>


A obrigatoriedade do envio de um valor como o parâmetro declarado em uma rota é definida no momento da declaração, porém, também é possível definir um parâmetro opicional o tornando nullable:


    app.get('getUser/:id?', (req, res) => {
    
      res.send(`<h1>${req.params.id}</h1>`);
    
    });


Com isso, apenas o parâmetro no-nullable é exigido quando uma requisição for executada. E é importante observar que o exemplo é meramente explicativo, já que em uma situação real, não faria sentido declarar um parâmetro opcional neste modelo de rota.


<h1>Métodos Express</h1>

<h1>Middlewares</h1>


A função básica de um middleware é executar certo trecho de código após o recebimento de um request e antes do envio da resposta. É, essencialmente, um tipo de função que é executada no meio do processo de requisição, por isso o nome middleware.

Além disso, possui acesso aos parâmetros de response(res) e request(req), podendo modificá-los ou usá-los como bem desejar. Também possuem um terceiro parâmetro que consiste em uma função <i>next</i>. Sendo de suma importância, já que as demais funções middleware serão chamadas a partir desta. Um exemplo básico de middleware é a função HANDLER, que declaramos como sendo executada após o recebimento de um request, sendo esta a responsável por definir o response que será enviada e seguida:


    app.get('/', (req, res, next) => {
      
      ...

      next();

    });


Uma observação importante é que a exemplo acima será raramente usado em um projeto, visto que, após a execução de um HANDLER não há nenhum middleware a ser chamado.

Tendo definido o que é um middleware, podemos exemplificar algumas das suas funcionalidades e formas de uso através de um exemplo:

Primeiro, inicialize um servidor e a ele atribua duas rotas:


    const express = require('express')
    const app = express()
    
    app.get('/', (req, res) => {
      console.log('Home Page');
      res.send('Home Page');
    });
    
    app.get('/users', (req, res) => {
      console.log('Users Page');
      res.send('Users Page');
    });
    
    app.listen(3000, () => console.log('Servidor ativo'));


A cada rota é atribuida uma response message que será replicada no console, o que será importante mais adiante. Em seguida, iremos criar uma middleware function de logging para exemplificar suas formas de uso:


    function loggingMiddleware(req, res, next) {
      console.log('Middleware executado');
      next();
    }


<h2>Middleware Global</h2>


Tendo criado o primeiro middleware, é possível declará-lo como global definindo seu uso antes da declaração das rotas anteriormente criadas:


    app.use(loggingMiddleware);


Para observar sua execução, basta subir o servidor criado e acessar, no navegador, a porta definida. Enquanto o servidor estiver ativo, faça um refresh na página. Por ser global, a function loggingMiddleware é executada antes de qualquer HANDLER function (também middleware), logo, teremos o seguinte OutPut no console:


    Middleware executado
    Home Page


A mensagem referente a middleware funtion é mostrada primeiro pois ela não está vinculada a chamada de nenhuma rota, ou seja, é independente na linha de execução. Além disso, é ela que passa a definir a chamada da HANDLER function da rota inicial, isso graças a função next nela delcarada. O mesmo pode ser observado ao chamar a rota /users:


    Middleware executado
    Users Page


Agora, Experimente remover a chamada do próximo middleware da função loggingMiddleware:


    function loggingMiddleware(req, res, next) {
      console.log('Middleware executado');
      // next();
    }


Após outro refresh, é possível notar que nenhuma outra middleware function será chamada, e isso demonstra a afirmação anterior sobre a ordem de execução após a criação e uso de um middleware global. Logo, um middleware global sempre deve ser declarado no início da linha de execuções.

Um middleware secundário é aquele que só é executando após a chamada de um já existente, logo, este passa a ser dependende da função next. Para atestar essa afirmação, mude a chamada da app.use(loggingMiddleware) para após a rota /users e, em seguida, torne a chamá-la no navegador. 


    http://localhost:3000/users


O resultado no console é apenas a mensagem de reponse ao request da rota:


    Users Page


Isso se dá pois a next function não foi declarada no escopo da HANDLER function da rota /users. Para que seja possível executar a função loggingMiddleware, faça as seguintes inserções:

                                  *
    app.get('/users', (req, res, next) => {
    
      console.log('Users Page');
      res.send('Users Page');
      next(); *
    
    });
    

E após um outro refresh no navegador, temos como resultado a chamada da função loggingMiddleware tornando a acontecer:


    Users Page
    Middleware executado


<h2>Single Action Middleware</h2>


Um single action middleware é uma função atribuída a execução de uma rota específica, sendo executada antes da response correspondente ocorrer. Para melhor entender, vamos criar um middleware que simula a verificação da autenticação do usuário ao acessar uma rota que seria restrita. Para isso, crie um novo middleware seguindo o modelo a baixo: 


    function authMiddleware(req, res, next) {
        console.log('Authenticated');
        next();
      }


Em seguida vincule o authMiddleware a rota /users:


    app.get('/users', authMiddleware, (req, res, next) => {
    
      console.log('Users Page');
      res.send('Users Page');
    
    });


Ao acessar a rota /users, temos o seguinte OutPut:


    Authenticated
    Users Page


<h2>Acessando Dados com um Middleware</h2>


Como já foi dito, um middleware tem acesso aos parâmetros da requisição a qual ele é atrelado, e para melhorar o exemplo anterior, faremos uso desse recurso adicionando uma validação a função authMiddleware:


    function authMiddleware(req, res, next) {
      
      if(req.query.admin === 'true') {
        next();
      } else {
        res.send('Not authenticated');   
      }
 
    }


A validação define que ao requisitar a rota /users, a qual o middleware authMiddleware está associado, será necessário atribuir true a variável admin para que seja possível acessar os demais middleware. Caso a validação não considere o valor passado no request, a mensagem 'Not authenticated' será mostrada em tela. Para passar pela validação, basta chamar a rota /users da seguinte forma:


    http://localhost:3000/users?admin=true


E como resultado, temos acesso a Users Page. Perceba também que a variável admin recebeu a atribuição diretamente da requisição na rota /users, logo, o parâmetro req usado na cláusula if-ele em authMiddleware nada mais é que parâmetro req declarado na prórpia rota.


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


<h1>Body-parser</h1>


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

À res é atribuido o formato json definido pelo body-parser, que pode ser vista na resposta a chamada quando esta for feita no namegador ou em alguma ferramenta de Rest Api Client, como o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com/downloads/) ou [Thunder Client](https://www.thunderclient.io/):

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


<h2>Listando um Usuário Específico</h2>


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

<!-- Request: http://localhost:3000/users/getUser/4354534636565645645645645646 -->

<!-- retorno: -->

    {
      "id": "4354534636565645645645645646",
      "name": "Ana",
      "age": 25
    }

User não encontrado:

<!-- Request: http://localhost:3000/users/getUser/435453463656564564564564564 -->

<!-- retorno: -->

    Status: 404

    Not Found

Definir como passar um body com o req.body


<h2>Cadastrando Usuário</h2>


Em uma situação real, qualquer requisição estaria atrelada a uma ação na base de dados. O registro de um novo usuário não é excludente, porém, da mesma forma que estamos listando dados de um objeto declarado manualmente, e que simula a base, é possível fazer a inserção de novos valores, mesmo que estes sejam temporários. Para isso, crie uma nova rota seguindo o modelo abaixo:

    app.post('/users/register', (req, res) => {
    
      var { name, age } = req.body;
        
      dataBase.users.push({
    
        id: '2342342342342423424327866786',
        name,
        age
    
      });
    
      res.statusCode = 200;
      res.send('OK');
    
    });

A rota de cadastro deve fazer uso do verbo HTTP post, já que a intenção é registrar as informações passadas no request, nesse caso através body. Além disso, a rota atribui ao array users os novos valores, incluindo um id genérico, criado para completar o objeto json enviado, já que em uma situação real, um id seria gerado no processo de registro. Por fim é retornado status code 200.

Para testar a rota é necessário fazer uso de um serviço de HTTP client, como os já citados Insomnia, Postman ou Thunder Client, já que não é possível fazer requisições POST diretamente no navegador. Dentro dessas ferramentas é possível testar requisições HTTP, definir um body usando diferentes formatos, como json, Xml, Form, Text, além de vários outros recursos. 

Para registrar um novo usúario, acesse a rota criada através do HTTP client escolhido, definindo o request type como POST:

    http://localhost:3000/users/register

Em seguida crie um body json e defina os dados do novo usuário:

    {
    
      "name" : "Clara",
      "age" : 36
        
    }

Após executar a requisição, torner a listar os usuários através da rota /users. O resultado deve incluir os dados registrados por último:

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
      },
      {
        "id": "2342342342342423424327866786",
        "name": "Clara",
        "age": 36
      }
    ]


<h2>Deletando Usuário</h2>


Seguindo a ordem de operações no banco de dados simulado, vamos executar um DELETE a partir do id do usuário, de forma bastante parecida com a listagem de um usuário específico. Logo, intuitivamente, faremos uso do protocolo HTTP DELETE. Para isso, crie um novo endPoit semelhante ao exemplo a seguir:

    app.delete('/users/delete/:id', (req, res) => {
    
      if(isString(req.params.id)) {
       
       var id = parseInt(req.params.id);
       var index = dataBase.users.findIndex(u => u.id == id);
       
       if(index != -1) {
    
        dataBase.users.splice(index, 1);
        res.sendStatus(200);
    
       } else {
    
         res.sendStatus(404)
    
       }
    
      } else {
        res.statusCode = 400;
        res.send({});
      }
    
    });

Um parâmetro referente ao id foi incluindo para que seja possível informar o usuário a ser deletado. A  principal diferença é que estamos nos baseando no index do array de usuários, identificado a partir do método findIndex, que encontra o index do usuário que tenha um id correspondente ao enviado. Em seguida usamos o método splice para que o elemento correspondente ao index seja removido do array. 

Assim como o método POST, é preciso fazer uso de um client HTTP para executar request DELETE. Portanto, da mesma forma que no exemplo anterior, faça a chamada da rota criada alterando o request type para o tipo especificado, e inclua o id do usuário a ser excluído:

    http://localhost:3000/users/delete/4354534636565645645645645646

Após o fim da requisição, torne a listar todos os usuários. O esperado é que todos, exceto o que possui o id definido acima, seja listado:

    [
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


<h2>Atualizando Dados de um Usuário</h2>


Já vimos como listar, cadastrar e excluír usuários da nossa base de dados simulada, agora iremos atualizar as informações de um usuário. Antes de mais nada, é importante citar que há diferentes formas de atualizar dados através de um request HTTP, podendo ser utilizados o POST, o PATCH e o PUT, sendo o PUT o método com função específica de atualização.

Para exemplificar, crie um novo endPoint para atualizar os dados de um usuário:

    app.put('/users/update/:id', (req, res) => {

      var id = req.params.id;
    
      if(isString(id)) {
       
       var user = dataBase.users.find(u => u.id == id);
       
       if(user != undefined) {
    
        var { name, age } = req.body;
    
        if(name != undefined) {
          user.name = name;
        }
    
        if(age != undefined) {
          user.age = age;
        }
    
        res.sendStatus(200);
    
       } else {
    
        res.statusCode = 404;
        res.send('Not Found');
    
       }
    
      } else {
        res.statusCode = 400;
        res.send({});
      }
    
    });


Seguindo um modelo semelhante ao da rota /users/getUser/:id, a rota declarada como PUT também possui um parâmetro id, o qual será utilizado para verificar o usuário no array de users. Em seguida, o usuário encontrado será atualizado, recebendo os valores passados no body da requisição. Um detalhe importante para se ater é que nem sempre todo o objeto será atualizado, portanto, haverá uma ou outra situação em que o body irá retornar um dos campos como undefined, de outra forma, o valor será atualizado. Para testar a rota, faça a seguinte chamada no HTTP Client anteriormente utilizado:

    http://localhost:3000/users/update/1231214233453453453453435345

Após definir o id do usuário que será atualizado, defina no body o dado a ser atualizado e o novo valor:

    {
      "name" : "Luana de Andrade"
    }

Tendo executado o request, liste o usuário que foi atualizado através da rota /users/getUser/id:

    http://localhost:3000/users/getUser/1231214233453453453453435345

O resultado esperado é a atualização do valor anterior para o definido no PUT request body:

    {
      "id": "1231214233453453453453435345",
      "name": "Luana de Andrade",
      "age": 18
    }


<h1>Consumindo API Rest</h1>


Agora que a API crida conta um bom número de endPoints com funções distintas, iremos consumir essas rotas em uma simples estrutura Font-end que irá simular a interface do usuário. Para isso, iremos utilizar a biblioteca Axios em uma index.html file, e a partir dela iremos listar, cadastrar, excluír e atualizar usuários. Portanto, antes de falarmos sobre o Axios em si, crie uma pasta chamada View e nela crie o arquivo html básico:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>


<h2>Axios</h2>


O Axios é uma lib HTTP client que permite o consumo de Rest APIs e que estrutura as requisições em um modelo de promises que podendem ser utilizadas no browser, consumindo e transmitindo dados entre uma API e o próprio navegador. Há formas distintas de utilizar o Axios, as quais são listadas em [axios](https://www.npmjs.com/package/axios), sendo uma dessas formas o consumo de uma CDN, o que pode ser aplicado diretamente a uma file html por meio da tag script, que é basicamente o que precisamos:

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

Em seguide iremos definir a chamada ao primeiro endPont criado, para que seja possível listar os usuários registrados na base simulada. Para isso crie o script a seguir na index.html file:

    <script>
    
       axios.get().then().catch
    
    </script>

Como foi dito, o Axios permite tratar as requisições como promises Javascript, portanto, é preciso definir as formas de tratamento para os possíveis resultados do request. Além disso, iremos definir a chamada a URL que contém a rota de listagem dos usuários, tratando os possíveis resultados:

    axios.get("http://localhost:3000/users").then(response => {
 
      console.log(response);
 
    }).catch(error => {
      
      console.log(error);

    });

Em seguida executa a file html no navegador e verifique o resultado no console, o qual muito porvavelmente irá se assemelhar ao seguinte:

    Access to XMLHttpRequest at 'http://localhost:3000/users' from origin 'http://127.0.0.1:5500' has been blocked by CORS
    policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

O que temos aqui é um impedimento por política de CORS. O CORS é um recurso de segurança para evitar o acesso externo a uma APi, que permanece ativo até que haja intervenção. Para resolver o problema, iremos instalar uma nova lib, a qual irá permitir submeter a API às requisições externas:

    npm install cors --save

Após a intalação, defina o uso da lib pelo app no index.js da API:

    const cors = require('cors');
        
    app.use(cors());

Tendo isso feito, faça um refresh no browser para observar o funcionamente do Axios consumindo o primeiro endPoint da API, tendo como resultado:

    {data: Array(4), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
    config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
    data: Array(4)
     0: {id: '4354534636565645645645645646', name: 'Ana', age: 25}
     1: {id: '1231214233453453453453435345', name: 'Luana', age: 18}
     2: {id: '46453345676786798979786755543', name: 'Pedro', age: 26}
     3: {id: '12345677867865675645747467575', name: 'Anderson', age: 46}
     length: 4
     [[Prototype]]: Array(0)
    headers: {content-length: '252', content-type: 'application/json; charset=utf-8'}
    request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    status: 200
    statusText: "OK"
    [[Prototype]]: Object

Todas essa informações correspondem a response a requisição, incluíndo as informações dos usuários contidos na base simulada..


<h2>Exibindo Dados</h2>


Para mostrar os dados obtidos no request em tela, faremos algumas inclusões no documento html correspondente a nossa view, a começar por:

     <ul id="users"></ul>

Adicionamos uma tag ul de list para listar o usuários, e em seguida:

    axios.get("http://localhost:3000/users").then(response => {
 
      var users = response.data;
      var list = document.getElementById('users');
 
    });

Substituimos o console.log que devolvia a response resultante da requisição e incluímos duas variáveis, uma que recebe os dados do retorno, e outra que recebe um instância da tag ul através so id a ela atribuído. Em seguida iremos tratar para que cada usuário tenha suas informações listadas separadamente:

     users.forEach(user => {
       var item = document.createElement('li');
       item.innerHTML = user.name;
       list.appendChild(item);
     });

A var users, que recebe a lista de usuários, logo é um array, recebe um forEach method, definindo que cada user encontrado terá seu name atribuído a uma tag li, a qual será renderizada na tag ul crianda anteriormente da seguinte forma:

- Ana
- Luana
- Pedro
- Anderson