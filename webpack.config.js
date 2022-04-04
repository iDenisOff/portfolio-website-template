const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./.webpack/webpack.common");

const DEVELOPMENT = "development";

module.exports = (_, args) => {
    if (args.mode === DEVELOPMENT) {
        return merge(common, {
            devServer: {
                hot: true,
                open: false,
                compress: true,
                historyApiFallback: true,
                devMiddleware: {
                    publicPath: "/",
                },
                static: {
                    directory: path.join(__dirname, "public"),
                },
            },
        });
    }
    return common;
};
