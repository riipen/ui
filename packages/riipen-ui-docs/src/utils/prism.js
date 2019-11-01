import prism from "prismjs";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";

if (process.browser) {
  // eslint-disable-next-line global-require
  const theme = require("../styles/prism-okaidia.css").default;

  const styleNode = document.querySelector("#prismjs");

  styleNode.textContent = theme;
}

export default prism;
