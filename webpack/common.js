const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const paths = require('./path');
console.log(`${paths.src}\\index.tsx`);

module.exports = {
  context: paths.src,
  entry: `${paths.src}\\index.tsx`,
  devtool: 'source-map',
  output: {
    clean: true,
    path: paths.build,
    // publicPath:'/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        resolve: { extensions: ['.tsx', '.ts', '.js'] },
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        exclude: /node_modules/,
      },
      /** SCSS/SAAS */
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      /** fonts */
      {
        test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'public/fonts/[name][ext]',
        },
      },
      /** images */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'public/img/[name][ext]',
        // },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}\\index.html`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new StylelintPlugin(),
    new ESLintPlugin(),
  ],
};
