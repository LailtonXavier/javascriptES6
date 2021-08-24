//pegando o path do nolde
const path = require('path');

// e como se fosse um return so retonar uma coisa
module.exports = {
    //ele vai deixar td em uma linha, ele gera um monte de linha
    mode: 'production',
    entry: './src/main.js',//arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // aqui fica as regras
            exclude: /node_modules/,// excluir para n travar o sistema
            test: /\.js$/,   //testar qual arquivo vai inalizar, .js pegar td mundo
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {//regra pro css,  pode ser sass, qualquer tipo
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' //mapear algum erro, no erro original'
};
