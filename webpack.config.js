const path = require('path');
module.exports = {
    //入口
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'mian.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html|htm$/,
            use: ['html-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
    ]
}