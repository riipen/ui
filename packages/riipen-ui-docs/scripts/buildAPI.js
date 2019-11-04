import fs from "fs";
import path from "path";

import kebabCase from "lodash/kebabCase";
import { parse } from "react-docgen";

import generateAPIMarkdown from "../src/utils/generateAPIMarkdown";

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

  const name = path.parse(componentObject.filename).name;

  let reactAPI;

  try {
    reactAPI = parse(src, null, null, {
      filename: componentObject.filename
    });
  } catch (err) {
    console.log("Error parsing src for", componentObject.filename);
    throw err;
  }

  reactAPI.name = name;
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

  const markdownDirectory = path.resolve(
    __dirname,
    "../src/pages/components-api"
  );

  ensureExists(markdownDirectory, 0o744, errpr => {
    if (errpr) {
      console.log("Error creating directory", markdownDirectory);
      return;
    }

    fs.writeFileSync(
      path.resolve(markdownDirectory, `${kebabCase(reactAPI.name)}.md`),
      markdown.replace(/\r?\n/g, reactAPI.EOL)
    );
  });

  const pageDirectory = path.resolve(__dirname, "../pages/components-api");

  ensureExists(pageDirectory, 0o744, errpr => {
    if (errpr) {
      console.log("Error creating directory", pageDirectory);
      return;
    }

    fs.writeFileSync(
      path.resolve(pageDirectory, `${kebabCase(reactAPI.name)}.jsx`),
      `import React from "react";

import MarkdownPage from "src/modules/components/MarkdownPage";

const req = require.context(
  "src/pages/components-api",
  false,
  /${kebabCase(reactAPI.name)}.md$/
);

export default function Page() {
  return (
    <MarkdownPage
      path="pages/components-api/${kebabCase(reactAPI.name)}"
      req={req}
    />
  );
}
`.replace(/\r?\n/g, reactAPI.EOL)
    );

    console.log("Built markdown API docs for", reactAPI.name);
  });
}

function run() {
  const directory = path.resolve(__dirname, "../../riipen-ui/src/components");

  const components = fs
    .readdirSync(directory)
    .map(item => ({
      filename: path.resolve(directory, item)
    }))
    .filter(item => !item.filename.endsWith("/index.js"));

  components.forEach(component => {
    buildDocs({ component }).catch(error => {
      console.warn(`error building docs for ${component.filename}`);
      console.error(error);
      process.exit(1);
    });
  });
}

run();
