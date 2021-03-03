const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = ext => isProd ? `bundle.${ext}` : `bundle.[fullhash].${ext}`;

const jsloaders = () =>{
  const loaders = [
    {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

module.exports = {
  // Директория исходников
  context: path.resolve(__dirname, 'src'),
  mode: "development",
  // Входная точка для приложения (объект/строка)
  entry: ['@babel/polyfill', './index.js'],
  // (объект)
  output:{
    // будущий файл, который будет подключаться в браузер
    filename: filename('js'),
    // строчка с абсолютным путем
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    // сокращения
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    }
  },
  devServer: {
    // v5 - обновление стилей работает с коробки
    port:3000,
    //hot: isDev,
    overlay: true,
    open: true,
  },
  devtool: isDev ? "source-map" : false,
  // массив плагинов
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      }
    }),
    new CopyPlugin({
      patterns:[
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
  ],
  module: {
    // Описываем лоадеры
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // размещать в таком порядке, компилируется справа на лево
        use: [
          // берем лодер с плагина
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsloaders(),
      }
    ],
  },
};