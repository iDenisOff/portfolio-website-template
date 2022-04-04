module.exports = [
    {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
            loader: "ts-loader",
        },
    },
    {
        test: /\.gstyle.css$/,
        use: ["style-loader", "css-loader"],
    },
    {
        test: /\.style.css$/,
        use: [
            "style-loader",
            {
                loader: "@teamsupercell/typings-for-css-modules-loader",
                options: {
                    formatter: "prettier",
                    disableLocalsExport: true,
                },
            },
            {
                loader: "css-loader",
                options: {
                    sourceMap: true,
                    modules: {
                        localIdentName: "[folder]_[local]__[hash:base64:5]",
                        exportLocalsConvention: "camelCaseOnly",
                    },
                },
            },
        ],
    },
    {
        test: /\.(png|jpg|gif|svg|jpeg|mp4|eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
            name: "[name]_[md5:hash:base64:5].[ext]",
        },
    },
];
