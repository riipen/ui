import constants from "src/constants";

export function getSections(markdown) {
  return markdown
    .split(/^{{("demo":[^}]*)}}$/gm) // Split markdown into an array, separating demos
    .filter(section => !constants.REGEX.EMPTY.test(section)); // Remove empty lines
}

export default {
  getSections
};
