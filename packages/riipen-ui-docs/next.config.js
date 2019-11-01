const path = require("path");

module.exports = {
  devIndicators: {
    autoPrerender: false
  },

  webpack(config, options) {
    config.resolve.alias.src = path.join(__dirname, "src");
    config.resolve.alias["@riipen-ui"] = path.resolve(
      __dirname,
      "../riipen-ui"
    );

    config.module.rules.push({
      test: /\.(css|md)$/,
      loader: "emit-file-loader",
      options: {
        name: "dist/[path][name].[ext]"
      }
    });

    config.module.rules.push({
      test: /\.(css|md)$/,
      loader: "raw-loader"
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.join(__dirname, "../")],
      exclude: /node_modules/,
      use: options.defaultLoaders.babel
    });

    return config;
  }
};
