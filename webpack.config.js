var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./docs"),
        publicPath: "/Rentalcottage-project-Vue/",
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|mp4)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.join(__dirname, "src/"),
            _image_: path.join(__dirname, "src", "assets"),
            _router_: path.join(__dirname, "src", "router"),
            _component_: path.join(__dirname, "src", "components")
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
    module.exports.devtool = "#source-map";
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
