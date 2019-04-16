const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
};
