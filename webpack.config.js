module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist/js',
        filename: 'main.js'
    },
    module: {
        rules: [
          {
            test: /\.js[x]?$/, 
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-syntax-jsx']
              }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      }
}