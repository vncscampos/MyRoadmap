const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                // Carrega o babel em todos os arquivos .js exceto os que estao na node_modules
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                // Carrega o css e as importações dentro dele
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                // Carrega as imagens
                test: /.*\.(git|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}