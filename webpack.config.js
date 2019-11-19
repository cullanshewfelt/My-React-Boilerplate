const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const CompressionPlugin = require("compression-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const dotenv = require("dotenv");
const path = require("path");

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  const isProduction = env.NODE_ENV === "production";
  console.log("env", env.NODE_ENV);
  return {
    entry: path.join(__dirname, "/src/app.js"),
    output: {
      path: path.join(__dirname, "public/build"),
      filename: "bundle.js"
    },
    mode: "none",
    module: {
      rules: [
        {
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },{
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name(file) {
                  if (process.env.NODE_ENV === "development") {
                    return "[path][name].[ext]";
                  }
                  return "[hash].[ext]";
                },
              }
            }
          ]
        },{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
          // eslint options (if necessary)
          }
        }]
    },
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      hot: true
    },
    resolve: {
      modules: [ path.resolve(__dirname, "app"), "node_modules"]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
      // new BundleAnalyzerPlugin(),
      // new CompressionPlugin()
    ]
    // optimization: {
    //   minimizer: [new UglifyJsPlugin()]
    // }
  };
}
