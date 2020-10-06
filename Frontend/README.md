# Frotend Roadmap

## HTML
link

## CSS (box model, grid, flexbox, float, position, display)
link

## Javascript

## Web Security Knowledge (CORS, HTTPS, OWASP)

## Package Managers
Gerenciadores de pacote são usados para gerenciar e organizar dependências de terceiros. O NPM e Yarn são os mais conhecidos para pacotes do Node.JS.

    yarn init
    yarn
    yarn add nome_da_dependencia
    yarn remove nome_da_dependencia
    yarn help

Ao iniciar um projeto, é gerado um package.json e node_modules, com todas as depêndecias instaladas.

## CSS architecture / preprocessors

## Build Tools
link

## Framework (React.js -> Redux)

## Modern CSS (css module, emotion)

- Styled Component: é uma forma estilizar um elemento, onde o CSS vai estar dentro de um arquivo JS. É possível encadear elementos e até mesmo acessar as propriedades desse elemento.

        yarn add styled-components

    <br>

        import styled from 'styled-components'

        export const Title = styled.h1`
            font-size: 24px;
            font-family: Arial, sans-serif;
            color: ${props => (props.error ? 'red' : '#4b4b4b')};
        `;


## Web Components (HTML, Custom Elements, Shadow DOM)

## CSS Frameworks (Reactstrap, Material UI, Bootstrap)

## Testing (jest, react-testing-library)

## Type Checkers

## Progressive Web Apps 

## Server side Rendering (React.js, next.js)

## GraphQL

## Static Site Generators

## Mobile Apps (React Native)

## Desktop Apps (Electron)

## Web Assembly
