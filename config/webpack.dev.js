let website = {
  publicPatch:'http://localhost:8888/'
}
const path = require ("path")
const uglify = require("uglifyjs-webpack-plugin"); //压缩
const htmlPlugin= require("html-webpack-plugin"); //html打包
const extractTextPlugin = require("extract-text-webpack-plugin"); // css分离
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode:'development',
  //入口文件的配置项
  entry:{
    //里面的main是可以自定义
    jquery:'./src/vendor/jquery-2.1.4.min',
    bootstrap:'./src/vendor/bootstrap',
    app: './src/app.js',
  },
  //出口文件
  output:{
    //打包的路径
    path: path.resolve(__dirname,'../dist'),
    filename: '[name].js',//打包文件一致
    publicPath:website.publicPatch //publicPatch:主要作用处理静态文件路径
  },
  //方便调试
  devtool:"eval-source-map",
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  //模块:解析css，图片，压缩
  module:{
    rules:[
      // css loader
      { test: /\.css$/,
        use:extractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader"
        })
      },
      //less loader
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      //sass
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      //img处理
      {
        test:/\.(png|jpg|gif|jpeg)/,
        use:[{
          loader:'url-loader', //是指定使用的loader和loader的配置参数
          options:{
            limit:500 //是把小于500B的文件打成Base64的格式，写入JS
          }
        }]
      },
      //babel 配置
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      //vue 配置
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  //插件，用于生产模板和各项功能
  plugins:[
    //压缩文件
    new uglify(),
    //html压缩
    new htmlPlugin({
        minify:{ //是对html文件进行压缩
            removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
        },
        hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
        template:'./src/index.html' //是要打包的html模版路径和文件名称。
    }),
    //分离css
    new extractTextPlugin({
      filename:'[name].css',
      ignoreOrder:true,
    }),
    new VueLoaderPlugin()
  ],
  //配置webpack开发服务功能
  devServer:{
    //设置基本目录结构,用于找到程序打包地址
    contentBase:path.resolve(__dirname,'.../dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    host:'localhost',
    //服务端压缩是否开启
    compress:true,
    //配置服务端口号
    port:8888
  }
}
