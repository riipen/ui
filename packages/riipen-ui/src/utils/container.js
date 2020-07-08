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

/**
 * Get closest parent that is scrollable
 * @param {element} node - An element in the DOM
 * @return {string} The closest scrollable parent view element that contains the element
 */
export function getClosestScrollableParent(node) {
  if (!node || node === getDocument(node)) {
    return window;
  }
  const overflowY = window.getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== "visible" && overflowY !== "hidden";

  if (isScrollable) {
    return node;
  }
  return getClosestScrollableParent(node.parentElement);
}

export default { getDocument, getContainer };
