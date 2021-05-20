const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const glob = require("glob")

    // .concat(glob.sync("build/*.?(js|css|pdf|jpg|png|gif|svg|ico)").map(f => path.resolve(__dirname, f)))
    // glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f))

module.exports = {
    entry: {
        "bundle.js": glob.sync("src/*.?(js|css)").map(f => path.resolve(__dirname, f)),
    },
    output: {
        filename: "bundle.min.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ],
    },
    plugins: [new UglifyJsPlugin()],
}