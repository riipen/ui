import fs from "fs";
import path from "path";

import kebabCase from "lodash/kebabCase";
import startCase from "lodash/startCase";
import { parse } from "react-docgen";

import generateAPIMarkdown from "../src/utils/generateAPIMarkdown";

const SRC_DIR = "/riipen-ui/src/components/";

function getLineFeed(source) {
  const match = source.match(/\r?\n/);

  return match[0];
}

function ensureExists(pat, mask, cb) {
  fs.mkdir(pat, mask, err => {
    if (err) {
      if (err.code === "EEXIST") {
        cb(null); // ignore the error if the folder already exists
      } else {
        cb(err); // something else went wrong
      }
    } else {
      cb(null); // successfully created folder
    }
  });
}

async function buildDocs(options = {}) {
  const { component: componentObject } = options;

  const src = fs.readFileSync(componentObject.filename, "utf8");

  const pathObj = path.parse(componentObject.filename);

  let reactAPI;

  try {
    reactAPI = parse(src, null, null, {
      filename: componentObject.filename
    });
  } catch (err) {
    console.log("Error parsing src for", componentObject.filename);
    throw err;
  }

  reactAPI.dir = pathObj.dir.split(SRC_DIR)[1];
  reactAPI.name = pathObj.name;
  reactAPI.src = src;
  reactAPI.EOL = getLineFeed(src);

  // Relative location in the file system.
  reactAPI.filename = componentObject.filename.replace(__dirname, "../../../");

  let markdown;

  try {
    markdown = generateAPIMarkdown(reactAPI);
  } catch (err) {
    console.log("Error generating markdown for", componentObject.filename);
    throw err;
  }

  const dir = reactAPI.dir ? `/${reactAPI.dir}` : "";

  const markdownDirectory = path.resolve(
    __dirname,
    `../src/pages/components-api${dir}`
  );

  ensureExists(markdownDirectory, 0o744, error => {
    if (error) {
      console.log("Error creating directory", markdownDirectory);
      return;
    }

    fs.writeFileSync(
      path.resolve(markdownDirectory, `${kebabCase(reactAPI.name)}.md`),
      markdown.replace(/\r?\n/g, reactAPI.EOL)
    );
  });

  const pageDirectory = path.resolve(
    __dirname,
    `../pages/components-api${dir}`
  );

  ensureExists(pageDirectory, 0o744, error => {
    if (error) {
      console.log("Error creating directory", pageDirectory);
      return;
    }

    fs.writeFileSync(
      path.resolve(pageDirectory, `${kebabCase(reactAPI.name)}.jsx`),
      `import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api${dir}",
  false,
  /${kebabCase(`${reactAPI.name}`)}.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/${
        reactAPI.dir ? `${reactAPI.dir}/` : ""
      }${kebabCase(`${reactAPI.name}`)}"
      req={req}
      title="${startCase(reactAPI.name)} API"
    />
  );
}
`.replace(/\r?\n/g, reactAPI.EOL)
    );

    console.log(
      "Built markdown API docs for",
      `${reactAPI.dir ? `${reactAPI.dir}/` : ""}${reactAPI.name}`
    );
  });
}

/**
 * Gets component filenames in directory and subdirectories.
 * @param {String} directory - directory name
 * @param {Array} components - Array of components in given directory
 */
function getComponents(directory, components) {
  const items = fs
    .readdirSync(directory)
    .map(item => ({
      filename: path.resolve(directory, item)
    }))
    .filter(
      item =>
        !item.filename.endsWith("/index.js") &&
        !item.filename.endsWith(".snap") &&
        !item.filename.endsWith(".test.jsx")
    );

  items.forEach(item => {
    if (!item.filename.endsWith(".jsx")) {
      getComponents(item.filename, components);
    } else {
      components.push(item);
    }
  });

  return components;
}

function run() {
  const directory = path.resolve(__dirname, "../../riipen-ui/src/components");

  const components = getComponents(directory, []);

  const blacklist = [
    "components/EditorDecorator.jsx",
    "components/EditorUtils.jsx"
  ];

  components
    .filter(c => !blacklist.some(b => c.filename.endsWith(b)))
    .forEach(component => {
      buildDocs({ component }).catch(error => {
        console.warn(`error building docs for ${component.filename}`);
        console.error(error);
        process.exit(1);
      });
    });
}

run();
