
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
