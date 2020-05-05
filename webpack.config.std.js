const { resolve } = require('path');
/*
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTML_MINIFY = {
  collapseWhitespace: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
};
*/

const stdBase = {
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    path: resolve(__dirname, 'dist', 'assets'),
    publicPath: '/',
  },
};

/*
const stdProd = env => {
  const BASE_URL = env.target === "local" ? "/taichu/dist" : "";
  const ASSETS_URL = `${BASE_URL}/assets/`;

  return {
    output: {
      publicPath: ASSETS_URL
    },
    plugins: [
      new CleanWebpackPlugin(["js", "css"], {
        root: resolve(__dirname, "dist", "assets"),
        exclude: ["base.css", "base-demo1.css"]
      }),
      new HtmlWebpackPlugin({
        title: "首頁 │ Taichu Demo",
        assetsUrl: ASSETS_URL,
        filename: resolve(__dirname, "dist", "index.php"),
        template: "./src/template/template.php",
        chunks: ["main"],
        inject: "body",
        minify: HTML_MINIFY
      }),
    ]
  };
};
*/

module.exports = { stdBase };
