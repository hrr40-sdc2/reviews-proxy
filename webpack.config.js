const path = require('path');

module.exports = {
  entry: {
    reviews: __dirname + '../../reviews/client/src/index.js',
    nearby: __dirname + '../../nearby-service-repo/client/index.jsx',
    description: __dirname + '../../description/client/src/index.jsx',
    vendor: ["styled-components"],
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          enforce: true
        },
        default: {
          chunks: "all",
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }

    }
  },
  resolve: {
    alias: {
      "styled-components": path.resolve("./node_modules", "styled-components"),
    }
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/client',
  }
};