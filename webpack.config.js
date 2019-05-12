var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
      path: path.resolve(__dirname, 'dist') + '/app',
      filename: 'bundle.js',
      publicPath: '/app/'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              include: path.resolve(__dirname, 'src'),
              loader: 'babel-loader',
              query: {
                  presets: ['es2015',"env",'react', "stage-0"]
              }
          },
          {
              test: /\.(sa|sc|c)ss$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "sass-loader" // compiles Sass to CSS
              }]

          },
          {
            test: /\.(gif|png|jp(e*)g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                },
            ]
        },
      ]
  },
    devServer: {
    historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title:"SuperComponents",
        template:"./public/index.html"
      })
    ],
}
