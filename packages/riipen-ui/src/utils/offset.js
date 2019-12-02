/**
 * @param {object} rect - The bounding rectangle of an element
 * @param {string | number} vertical - The type of vertical offset to calculate from the element
 * @return {string} The parent document element that contains the element
 */
export function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}

/**
 * @param {object} rect - The bounding rectangle of an element
 * @param {string | number} horizontal - The type of horizontal offset to calculate from the element
 * @return {string} The parent document element that contains the element
 */
export function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}

export default { getOffsetLeft, getOffsetTop };
