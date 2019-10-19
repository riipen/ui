const path = require('path');
const webpack = require('webpack');

const workspaceRoot = path.join(__dirname, '../');

module.exports = {
  webpack: (config, options) => {
    return Object.assign({}, config, {
      resolve: {
        alias: {
          src: path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.jsx'],
      },
      node: {
        fs: 'empty',
      },
      module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([
          {
            test: /\.(css|md)$/,
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]',
            },
          },
          {
            test: /\.(css|md)$/,
            loader: 'raw-loader',
          },
          // required to transpile ../packages/
          {
            test: /\.(js|mjs|jsx)$/,
            include: [workspaceRoot],
            exclude: /node_modules/,
            use: options.defaultLoaders.babel,
          },
        ]),
      }),
    });
  },
  exportTrailingSlash: true,
};
