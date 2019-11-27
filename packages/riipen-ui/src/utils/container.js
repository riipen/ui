export function getDocument(node) {
  return (node && node.ownerDocument) || document;
}

export function getContainer(node) {
  const doc = getDocument(node);
  return doc.defaultView || window;
}

export default { getDocument, getContainer };
