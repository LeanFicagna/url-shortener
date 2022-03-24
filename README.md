## 💎Objetivo
Construir uma aplicação que possibilite gravar URLs encurtadas em um banco de dados e acessá-las.

## 👨‍🏫Instruções para execução
1. Instale o Node e o NPM (ou yarn, conforme prefira).
2. Clone o repositório com o comando: `git clone https://github.com/LeanFicagna/url-shortener`.
3. Use o comando `npm install` ou `yarn install` para baixar as depedências necessárias.
4. Transpile o código TypeScript para JavaScript: `npm run build:watch` ou `yarn build:watch`
5. Rode o projeto: `npm run dev` ou `yarn dev`

## Encurtando uma url:
Utilize algum API Cliente, configure método POST para a rota `localhost:5000/shorten` enviando um JSON com o atributo originURL com a URL que você quer minificar,
desse jeito: `"originURL": "<URL>"`.

Essa rota retornar alguns atributos, entre eles o `shortURL` que contém a URL encurtada.

![image](https://user-images.githubusercontent.com/64813850/159940766-71a06216-7677-47e1-8181-554747f48ae6.png)

## 🔨Ferramentas
- Node.js
  - Express
- MongoDB
