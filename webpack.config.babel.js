import webpack from 'webpack';
import path from 'path';

const debug = process.env.NODE_ENV !== 'production';

const config = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  entry: `${__dirname}/src/index.jsx`,
  output: {
    path: `${__dirname}/src/`,
    filename: 'bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
};
export default config;
