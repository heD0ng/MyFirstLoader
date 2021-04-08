const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { resolve } = path

module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    // './src/index.js',
    // 等于{main:'./src/index.js'}

    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: 'development',
    module: {
        rules: [
            {
                test:/\.md$/,
                use: [
                    'html-loader',
                    './mdToHtml.js'
                ]
            }
        ]
    },
    plugins: [
        // 向页面插入打包的js/css代码
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        // 清除打包的文件夹
        new CleanWebpackPlugin(
            ['dist']
        ),
    ],
    
}