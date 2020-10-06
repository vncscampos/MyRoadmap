module.exports = {
    presets: [
        // Transpila o código que é desenvolvido
        "@babel/preset-env",
        // Transpila o código já pronto do react
        "@babel/preset-react",
    ],
    plugins: [
        // Entende o componente de estado
        '@babel/plugin-proposal-class-properties',
    ]
};