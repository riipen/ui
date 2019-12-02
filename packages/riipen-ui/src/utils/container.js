/**
 * Get document element for owner container
 * @param {element} node - An element in the DOM
 * @return {string} The parent document element that contains the element
 */
export function getDocument(node) {
  return (node && node.ownerDocument) || document;
}

/**
 * Get view elemtn for owner container
 * @param {element} node - An element in the DOM
 * @return {string} The parent view element that contains the element
 */
export function getContainer(node) {
  const doc = getDocument(node);
  return doc.defaultView || window;
}

export default { getDocument, getContainer };
