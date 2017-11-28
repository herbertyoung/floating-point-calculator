var path = require('path');

module.exports = {
  entry: {
    FloatingPointCalculator: './src/FloatingPointCalculator.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
    library: 'FloatingPointCalculator',
    libraryTarget: 'umd',
    umdNamedDefine: true
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