# **Basic Knowledge**

Conhecimento básico necessário para todo desenvolvedor.


## **Data Structures & Algorithms**
Vai estar em um outro repositório

## **TCP and ports**
Transmission Control Protocol é um protocolo de transmissão de dados voltado à conexão e tem como garantia a integridades e ordem de todos os dados. O inicio da comunicação se dá por um aperto de mão de três vias o _three way handshake_.

## **HTTP/HTTPS**
Hypertext Transfer Protocol é um protocolo de comunicação utilizado pela internet para transferir dados entre o computador do usuário e servidores de hipermedia. Normalmente o protocolo HTTP usa a porta 80.
&nbsp;

O HTTPS é uma versão idêntica do protocolo HTTP, mas que permite que os dados possam ser transferidos através de uma conexão criptografada e que se verifique a autencidade do servidor e do cliente através de certificados digitais. A porta usada pelo HTTPS é a 443.
&nbsp;

## **Internet (WWW, dns, browser)**
Sem entrar em detalhes na história de como a internet surgiu, podemos definir ela como um sistema global de rede de computadores interligados trocando dados utilizando o protocolo TCP/IP. Ou simplesmente pode ser definida como uma rede de comunicação mundial.
&nbsp;

* _WWW_ : World Wide Web funciona como um sistema de distribuição de documentos HTTP interconectados e acessíveis por meio de um browser conectado na internet.
* _Web Browser_ : É um software para acessar as informações do World Wide Web.
* _Domain Name System_ : São servidores responsáveis por localizar o endereço de IP de um site através de um domínio.

## **API**
Application Programming Interface (Interface de Programação de Aplicações) é uma forma de integrar sistemas, sendo responsável por estabelecer a comunicação entre diferentes serviços.

## **Rest / Restful**
REpresentational State Transfer (Transferência de Estado Representativo) conjunto de princípios de arquitetura que delimita algumas obrigações nas transfêrencias de dados.

Essas obrigações (constraints) são:
- Uniform Interface
- Client-server
- Stateless
- Cacheable
- Layered System
- Code on demand

A aplicação que atende essas obrigações é chamado RESTful.

## **SSH**
Secure Socket Shell é um protocolo de rede para o usuário administrar remotamente seus servidores. A comunicação entre esses dois é protegida por uma criptografia avançada que mascara os dados e transações de quem está acessando até o que exatamente está querendo acessar.

## **Terminal GNU/Linux**
Link

## **Regex**
Link

## **Design Patterns**
São soluções para problemas recorrentes durante o desenvolvimento de um software. Seu uso contribui para a organização e manutenção de projetos.
&nbsp;

Os padrões de projeto GoF são agrupados em três tipos:

Creational (Criação) | Structural (Estrutura) | Behavioral (Comportamento)
:------------------: | :--------------------: | :--------------------:
| Abstract Factory   | Adapter                | Chain of Responsibility
| Builder            | Bridge                 | Command
| Factory Method     | Composite              | Interpreter
| Prototype          | Decorator              | Iterator
| Singleton          | Façade                 | Mediator
|                    | Flyweight              | Memento
|                    | Proxy                  | Observer
|                    |                        | State
|                    |                        | Strategy
|                    |                        | Template Method
|                    |                        | Visitor


### Padrões arquiteturais
* Interceptor
* Model View Controler (MVC)
* Model View ViewModel (MVVM)
* Model View Presenter (MVP)
* n-tier
* Specification
* Publish–subscribe
* Inversion of control
&nbsp;

## **Git/Github**
O Git é um sistema de controle de versão que permite criar e alterar pontos na história de produção do seu projeto, estes pontos na história são chamados de _commits_. 
&nbsp;

O git também ajuda a controlar fluxo de novas funcionalidades entre vários desenvolvedores no mesmo projeto. As ramificações ou _branchs_ são formas de termos uma mesma versão do código sofrendo alterações com as novas funcionalidades sem comprometer a branch principal chamada de _master_.
&nbsp;

O Github é um serviço online de hospedagem de repositórios Git.
&nbsp;

### Configurações do Git:

```
git config --global user.name "nome"
git config --global user.email "email"
```

### Comandos básicos:

* `git init`        // inicia a linha do tempo
* `git add`         // adiciona ou atualiza mudanças para irem para a linha do tempo
* `git commit`      // adiciona um ponto na linha do tempo
* `git log`         // visualiza os pontos na linha do tempo, commit
* `git status`      // informa o estado das alterações do nosso projeto
* `git show`        // apresenta determinado ponto na história
* `git branch`      // gerenciar novas linhas do tempo
* `git checkout`    // manipula as linhas do tempo
* `git merge`       // unir branchs
* `git push`        // envia alterações locais para o repositório remoto
* `git clone`       // clonar um repositório
* `git pull`        // puxa do repositório remoto
