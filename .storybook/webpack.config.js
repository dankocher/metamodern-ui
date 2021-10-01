const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    // styles
    // config.module.rules.push({
    //     test: /\.(sass|scss)$/,
    //     use: ["style-loader", "css-loader", "sass-loader"],
    //     include: path.resolve(__dirname, "../"),
    // });

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },

    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
    ],

    // don't forget to return.
    //return config;
};
