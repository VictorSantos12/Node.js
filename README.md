
<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/119588242-c60e9f80-bda6-11eb-8da1-106c82739221.png">
</div>

<br>
<img src="https://img.shields.io/static/v1?label=Node.js&message=Enviroment&color=green&style=for-the-badge&logo=Node"/>


O Node é um ambiente de execução de códigos JavaScript, cuja as funcionalidades e ferramentas propiciam ao desenvolvedor a estrutura necessária para criar, compilar e manter aplicações utilizando o ECMAScript.

Dando uma definição mais específica, o Node exerce a função de interpretar códigos JavaScript fora dos navegadores, tornando possível desvincular a linguagem do Client-side. Tal recurso abre uma série de possibilidades para desenvolver com a já conhecida sintaxe, além de um adicional de ferramentas que auxiliam na criação de aplicações robustas, como o npm.

Há uma série de formas de aplicar o Node, seja no server-side, no client-side, em aplicações desktop, micro serviços e entre outros, o Node possui um nível de versatilidade bastante robusto. 


<h2>Por que o Node ?</h2>


As vanteagens de utilizar determinda tecnologia em detrimento de outra sempre geram questionamento, mas, na prática, escolher um framework, um ambiente de desenvolvimento ou mesmo uma linguagem específica se dá pela demanda do sistema que será criado. Pode-se dizer que do Node é possível extrair resultados rápidos e com uma alta escalabilidade; o Node possui um ecosistema bastante robusto graças ao npm(Node Package Manager) que dá a possibilidade de ter acesso a recursos para tratar diversas necessidades, como requisições http, operações em bases de dados e entre outros.


<h2>Como o Node Funciona</h2>


Assim como qualquer ferramenta que compila e interpreta uma linguagem de programação, o Node precisa de um motor que interprete os códigos escritos em JavaScript e os converta em código nativo ou machine code. Portanto, a ferramenta foi criada tendo a engine V8 do Google Chrome como base, ou seja, da mesma forma que o Chrome interpreta o JavaScript em aplicações Web, uma CPU passa a ser capaz graças ao Node. 

Dessa forma, o Node possui uma arquitetura não bloqueante de single-thread baseada em eventos, que faz uso intenso dos pilares estruturais do JavaScript, como o conceito de Call Stack(responsável por registrar e empilhar as chamadas de funções), o Callback Queue(responsável por tratar os Callbacks) e o Event Loop(responsável por verificar os disparos dos eventos e executar suas respectivas callbacks como resposta). Essa arquitetura permite que o usuário não tenha que esperar o fim de uma thread para tornar a interagir com a aplicação, o que consite em uma arquitetura assíncrona. 