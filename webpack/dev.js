const { merge } = require('webpack-merge');
const paths = require('./path');

const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    contentBase: paths.build,
    historyApiFallback: true,
    open: true,
    port: 3000,
    hot: true,
  },
  stats: {
    children: true,
  },
});
