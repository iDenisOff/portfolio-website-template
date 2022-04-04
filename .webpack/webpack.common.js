const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "../public/"),
        filename: "index.[contenthash].js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            react: path.resolve("./node_modules/react"),
        },
    },
    module: {
        rules: require("./webpack.rules"),
    },
    plugins: require("./webpack.plugins"),
    externals: {
        "./app.config": "config",
    },
};
