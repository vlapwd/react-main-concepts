module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/dist/js",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-jsx"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    contentBase: "./dist",
    //追加したはいいけどwebsocket飛んでなくて効いてない。なんで？
    hot: true,
  },
};
