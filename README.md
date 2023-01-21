<h1 align="center">
  The Questions
</h1>

### Sobre o projeto:

Este projeto foi idealizado com o intuito de mostrar as questões de algumas seleções de emprego que já realizei.
Além disso, tem como objetivo ajudar iniciantes que estão querendo arrumar um emprego, pois são questões que podem cair em suas seleções, além de serem úteis para melhorar sua lógica de programação.

Obs:
Recomendo que tentem resolver as [questões](./src/) antes de olharem suas resoluções.

Esses testes vieram de empresas como:
- [BTG Pactual](https://www.btgpactual.com/)
- [Capgemini](https://www.capgemini.com/br-pt/)
- [Justa](https://justa.com.vc/)
- [Radix Engenharia e Software](https://www.radixeng.com.br/)

### Tecnologias utilizadas:
O projeto foi desenvolvido com as seguintes tecnologias:
- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/pt-BR/)

<br>

### Como criar um projeto do zero:
- ### Pré-requisitos

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

- ### Preparação do ambiente
```sh
  $ npx gitignore node
  $ npm init -y
  $ git init
  $ npm install node
  $ npm install --save-dev jest
  $ npm install sqlite3
  $ npm install bluebird
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
$ npm test __tests__/nomeDoTeste.js
```

4. Mudando os testes:
 <div>
	Caso queira criar novos testes basta incluir na pasta "__tests___" um novo arquivo, exemplo: testenovo.test.js, e criar um novo teste para uma ou mais questões desejadas, ou você pode editar um teste já existente.
</div> 

<br>


### License:

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br>

---
<h4 align="center">
    Feito por <a href="https://www.linkedin.com/in/iberthy-allano/" target="_blank">Iberthy Allano</a> & <a  href="https://www.linkedin.com/in/manoelvoliveira/" target="_blank">Manoel Oliveira</a>.
</h4>
