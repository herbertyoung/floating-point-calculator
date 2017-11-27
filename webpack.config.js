var path = require('path');

module.exports = {
  entry: {
    FloatingPointCalculator: './src/FloatingPointCalculator.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'babel-loader'
    }]
  }
};