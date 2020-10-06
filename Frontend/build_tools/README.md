## Task Runners

São automatizadores de tarefa. Ex: Grulp, Grunt.

### NPM Scripts

    npm run start
    npm run dev
    npm run build
    npm run deploy

## Module Bundlers

Ferramenta que permite o navegador carregar módulos.

### Webpack

Ensina ao Javascript como importar arquivos CSS, imagens e etc com os loaders, gerando bundlers.

    yarn add webpack wepack-cli webpack-dev-server -D
    yarn style-loader css-loader -D
    yarn add file-loader -D

## Babel

O Babel é um transpilador, que converte o seu código JS para um código JS que o navegador entenda.

    yarn add @babel/core @babel/preset-env @babel/preset-react
    yarn add babel-loader -D
    yarn add @babel/plugin-proposal-class-properties -D

## Linters and Formatters

Os linters e formatters são usados para padronizar o código aumentando a legibilidade dele. Os **linters** fiscalizam o seu código para ver se está seguindo padrão definido, por exemplo o padrão de código mais conhecido é o da _airbnb_. E os formatters, formata o seu código.

    yarn add eslint -D
    yarn eslint --init
    yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

## Template Engines
São usados para manipular conteúdos HTML de forma dinâmica.

    yarn add nunjucks express-nunjucks --save
    ou
    yarn add handlebars express-handlebars
