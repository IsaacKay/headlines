import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const debug = process.env.NODE_ENV !== 'production';
const config = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : false,
  resolve: {
    extensions: ['.jsx', '.js']
  },
  entry: `${__dirname}/src/index.jsx`,
  output: {
    path: `${__dirname}/src/`,
    filename: 'bundle.js'
  },
  plugins: debug ? [
    new webpack.DefinePlugin({
      process: {
        env: {
          API_KEY: JSON.stringify(process.env.API_KEY)
        }
      }
    }),
  ] : [
      new webpack.DefinePlugin({
        process: {
          env: {
            API_KEY: process.env.API_KEY
          }
        }
      }),
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
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  watch: true
};
export default config;

