const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }

}