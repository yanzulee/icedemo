const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config')
console.log('进入webpack')
// 项目工程版本
const APP_VERSION = config.app_version; // 主版本号 . 子版本号 (功能更新) . 修订版本号（release编译版本号） . dev开发版本号
// 项目环境,或者 ’test‘ 供直接 npm start 使用
const APP_ENV = config.env.NODE_ENV; // prod-正式, local-本地, test-测试, release-预发布, demo-Mock测试

module.exports = {
  entry: "src/index.js",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.APP_VERSION': JSON.stringify(APP_VERSION),
      'process.env.APP_ENV': JSON.stringify(APP_ENV),
      'process.env.APP_CONFIGS': JSON.stringify(config),
    }),
    // 如果需要去掉console可以放开注释
    //  new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false,
    //       drop_console: true, // console
    //       pure_funcs: ['console.log'] // 移除console
    //     },
    //   },
    // }),
  ],
  output: {
    publicPath: './',
    filename: 'js/[name]-[hash].' + APP_ENV + '.v_' + APP_VERSION + '.js',
    chunkFilename: 'js/app_[name]-[chunkhash].' + APP_ENV + '.v_' + APP_VERSION + '.js',
  },
};

