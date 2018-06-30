const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const extractSass = new ExtractTextPlugin('[name].css');

module.exports = [
  {
    entry: {
      app: [
        './src/js/app.jsx',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
    },
    devServer: {
      contentBase: './dist',
      watchContentBase: true,
      port: 3000,
      open: true,
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env', 'es2015', 'stage-0'],
          },
        },
        {
          test: /\.(css)$/,
          include: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/images/'),
          to: path.resolve(__dirname, 'dist/images/'),
        },
      ]),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '95-100',
        },
      }),
    ],
  },
  {
    entry: {
      style: ['./src/sass/style.scss'],
    },
    output: {
      path: path.resolve(__dirname, 'dist/css'),
      filename: '[name].css',
    },
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: extractSass.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader?outputStyle=compressed',
              },
            ],
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [
      extractSass,
    ],
  },
];
