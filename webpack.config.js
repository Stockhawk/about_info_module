module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
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
    loaders: [
      {
        test: /\.html$/,
        name: 'mandrillTemplates',
        loader: 'raw!html-minify',
      },
    ],
  },
  'html-minify-loader': {
    empty: true,
    cdata: true,
    comments: true,
    dom: {
      lowerCaseAttributeNames: false,
    },

  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
};
