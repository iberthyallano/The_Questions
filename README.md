<h1 align="center">
  The Questions
</h1>

### Sobre o projeto:

Este projeto foi idealizado com o intuito de mostrar as questões de algumas seleções de emprego que já realizamos, bem como questões de olimpiadas de programação que achamos interessante.
Além disso, tem como objetivo ajudar iniciantes que estão querendo arrumar um emprego, pois são questões que podem cair em suas seleções, além de serem úteis para melhorar sua lógica de programação.

Obs:
Recomendo que tentem resolver as [questões](./src/doc) antes de olharem suas resoluções.

Esses testes vieram de empresas como:

-  [BTG Pactual](https://www.btgpactual.com/)
-  [Capgemini](https://www.capgemini.com/br-pt/)
-  [Justa](https://justa.com.vc/)
-  [Radix Engenharia e Software](https://www.radixeng.com.br/)

### Tecnologias utilizadas:

O projeto faz uso dos seguintes componentes:

-  [Node.js](https://nodejs.org/en/)
-  [Jest](https://jestjs.io/pt-BR/)
-  [Eslint](https://eslint.org/)
-  [Prettier](https://prettier.io/)

<br>

### Como criar um projeto do zero:

-  ### Pré-requisitos Necessários:

   -  Instalar o **[Node.js](https://nodejs.org/en/)** instalado na máquina;
   -  Instalar um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
   -  Instalar o **[Visual Studio Code](https://code.visualstudio.com/)**
   -  Adicionar as extenções do **[Eslint](https://eslint.org/)** e **[Prettier](https://prettier.io/)** ao seu VSCode!

-  ### Preparação do ambiente

```sh
  $ npx gitignore node
  $ npm init -y
  $ git init
  $ npm install node
  $ npm install --save-dev jest
  $ npx eslint --init
```

Modifique o arquivo package.json para adicionar o script de criação de documentação:

```
	"scripts": {
		"test": "jest",
	},
```

<br>

### Como utilizar o projeto:

1. Faça um clone :

```sh
  $ git clone https://github.com/iberthyallano/The_Questions.git
```

2. Executando todos os testes:

```sh
$ npm test
```

3. Executando apenas um teste:

```sh
$ npm test nomeDoTeste.js
```

<br>

### Licença:

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br>

---

<h4 align="center">
    Feito por <a href="https://www.linkedin.com/in/iberthy-allano/" target="_blank">Iberthy Allano</a> & <a  href="https://www.linkedin.com/in/manoelvoliveira/" target="_blank">Manoel Oliveira</a>.
</h4>
