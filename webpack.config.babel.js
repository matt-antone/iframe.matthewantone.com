// ./webpack.config.babel.js
const path = require('path');

const app = {
  entry: {
    app: ["./src/app.js"],
    // js bundle for other posts, e.g.
    // secondpost: ["./app/second-post.js"]
  },
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "app.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  watch: true
};

const admin = {
  entry: {
    app: ["./src/admin.js"],
    // js bundle for other posts, e.g.
    // secondpost: ["./app/second-post.js"]
  },
  output: {
    path: path.resolve(__dirname, "static", "admin", "assets"),
    filename: "admin.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react',{
              'plugins': ['@babel/plugin-proposal-class-properties']
          }]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  watch: true
};

module.exports = [admin,app]