const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = async ({ config }) => {
  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ["style-loader", "css-loader", "sass-loader", "resolve-url-loader"],
    include: path.resolve(__dirname, "../"),
  });

  // don't forget to return.
  return config;
};
