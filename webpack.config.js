const  OpenEditorWebpackPlugin = require("@open-editor/webpack")
const CopyPlugin = require("copy-webpack-plugin")

/**@type {import("webpack").Configuration} */
const config = {
    entry: './src/main.js',
    plugins: [
        new OpenEditorWebpackPlugin({}),
        new CopyPlugin({
            patterns: [
                { from: __dirname + '/build/*', to: __dirname + '/dist'}
            ]
        })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
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
    }
}

module.exports = config