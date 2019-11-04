const fs = require("fs");
const path = require("path");

const BLACKLIST = ["/_document", "/_app"];

module.exports = function findPages(
  directory = path.resolve(__dirname, "../../pages")
) {
  const pages = [];

  fs.readdirSync(directory).forEach(item => {
    const itemPath = path.resolve(directory, item);

    const pathname = itemPath
      .replace(new RegExp(`\\${path.sep}`, "g"), "/")
      .replace(/^.*\/pages/, "")
      .replace(".jsx", "")
      .replace(/^\/index$/, "/") // Replace `index` by `/`.
      .replace(/\/index$/, "");

    if (fs.statSync(itemPath).isDirectory()) {
      const children = findPages(itemPath);

      pages.push({
        pathname,
        children
      });

      return;
    }

    if (BLACKLIST.includes(pathname)) {
      return;
    }

    pages.push({
      pathname
    });
  });

  // sort by pathnames without '-' so that e.g. grid comes before grid-item
  pages.sort((a, b) => {
    const pathnameA = a.pathname.replace(/-/g, "");
    const pathnameB = b.pathname.replace(/-/g, "");

    if (pathnameA < pathnameB) return -1;
    if (pathnameA > pathnameB) return 1;

    return 0;
  });

  return pages;
};
