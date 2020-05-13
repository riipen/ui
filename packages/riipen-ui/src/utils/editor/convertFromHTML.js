import { convertFromHTML as convertFromHtml } from "draft-convert";

// draft-convert configuration for converting HTML to EditorState.
export const fromHtmlConfig = {
  htmlToEntity: (nodeName, node, createEntity) => {
    switch (nodeName) {
      case "a":
        return createEntity("LINK", "MUTABLE", { url: node.href });
      case "img":
        return createEntity("IMAGE", "IMMUTABLE", {
          alt: node.alt,
          src: node.src
        });
      default:
        return null;
    }
  },
  htmlToBlock: nodeName => {
    switch (nodeName) {
      case "div":
        return {
          type: "atomic",
          data: {}
        };
      default:
        return null;
    }
  }
};

/**
 * Wrapper of draft-convert convertFromHTML that has a predefined config.
 * @param {String} html
 * @returns {ContentState} Draft.js ContentState object.
 */
export const convertFromHTML = html => {
  return convertFromHtml(fromHtmlConfig)(html || "");
};

export default { convertFromHTML, fromHtmlConfig };
