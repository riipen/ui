const path = require("path");

const findPages = require("./src/utils/findPages");

module.exports = {
  devIndicators: {
    autoPrerender: false
  },

  exportPathMap: () => {
    const staticPages = findPages();
    const map = {};

    function traverse(pages) {
      pages.forEach(page => {
        if (!page.children) {
          map[page.pathname] = {
            page: page.pathname
          };

          return;
        }

        traverse(page.children);
      });
    }

    traverse(staticPages);

    return map;
  },

  trailingSlash: true,

  webpack(config, options) {
    config.resolve.alias.src = path.join(__dirname, "src");
    config.resolve.alias["@riipen-ui"] = path.resolve(
      __dirname,
      "../riipen-ui/src"
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
