const  OpenEditorWebpackPlugin = require("@open-editor/webpack")
const CopyPlugin = require("copy-webpack-plugin")

/**@type {import("webpack").Configuration} */
const config = {
    entry: './src/main.js',
    plugins: [
        new OpenEditorWebpackPlugin({}),
        new CopyPlugin({
            patterns: [
                { from: __dirname + '/build/*', to: __dirname + '/dist/[name][ext]'}
            ]
        })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
            }
        ]
    },
    devServer: {
        port: '8003',
        static: {
            directory: __dirname + '/dist',
            publicPath: '/'
        },
        devMiddleware: {
            writeToDisk: true,
        }
    }
}

module.exports = config