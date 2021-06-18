const path = require("path");

module.exports = {
    stories: [
        "../src/**/stories.js", // The name should have a prefix for component name like `button.stories.js` instead of `stories.js` like you've done. As you renamed, you can remove this pattern
        "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    ],
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-links",
        "@storybook/addon-knobs",
        "@storybook/addon-actions",
        "@storybook/addon-postcss",
        // "@storybook/addon-essentials",
    ],
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: true,
                esModuleInterop: false,
            },
        },
    },
    // webpackFinal: async (config, { configType }) => {
    //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    //   // You can change the configuration based on that.
    //   // 'PRODUCTION' is used when building the static version of storybook.
    //   // Make whatever fine-grained changes you need
    //   config.module.rules.push({
    //     test: /\.(scss)$/,
    //     use: ["style-loader", "css-loader", "sass-loader"],
    //     include: path.resolve(__dirname, "../"),
    //   });
    //   // config.module.rules.push({
    //   //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    //   //   use: [
    //   //     {
    //   //       loader: "url-loader",
    //   //       query: {
    //   //         name: "[name].[ext]",
    //   //       },
    //   //     },
    //   //   ],
    //   //   include: path.resolve(__dirname, "../"),
    //   // });
    //   config.module.rules.push(
    //     // {
    //     //   test: /\.scss$/,
    //     //   use: ["style-loader", "css-loader", "sass-loader"],
    //     //   include: path.resolve(__dirname, "../"),
    //     // },
    //     // {
    //     //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    //     //   loaders: ["file-loader"],
    //     //   include: path.resolve(__dirname, "../"),
    //     // }
    //     {
    //       test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //       loader: "url-loader?limit=10000&mimetype=application/font-woff",
    //     },
    //     {
    //       test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //       loader: "file-loader",
    //     }
    //   );
    //   // Return the altered config
    //   return config;
    // },
};
