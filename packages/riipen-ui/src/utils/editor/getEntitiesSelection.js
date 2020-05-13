import { findLinkEntities } from "./findEntities";

/**
 * Get current selected entities
 *
 * @param  {Draft.ContentState}
 * @param  {Draft.SelectionState}
 * @param  {String}
 * @return {String}
 */
const getEntitiesSelection = (selection, contentState, entityType) => {
  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const blocks = contentState.getBlockMap();

  let lastWasEnd = false;
  const selectedBlock = blocks
    .skipUntil(block => block.getKey() === startKey)
    .takeUntil(block => {
      const result = lastWasEnd;

      if (block.getKey() === endKey) {
        lastWasEnd = true;
      }

      return result;
    });

  const entityRanges = {};
  let found = false;

  selectedBlock.forEach(block => {
    const key = block.getKey();
    entityRanges[key] = [];

    let start = 0;
    let end = block.getText().length;

    if (key === startKey) {
      start = selection.getStartOffset();
    }
    if (key === endKey) {
      end = selection.getEndOffset();
    }

    findLinkEntities(
      block,
      (entityStart, entityEnd) => {
        const startBefore = start < entityStart && end > entityStart;
        const endAfter = end > entityEnd && start < entityEnd;

        const startWithin = start > entityStart && start < entityEnd;
        const endWithin = end > entityStart && end < entityEnd;
        const selectionInside = startWithin || endWithin;

        const exactSelection = start === entityStart && end === entityEnd;

        if (startBefore || endAfter || selectionInside || exactSelection) {
          entityRanges[key].push({ start: entityStart, end: entityEnd });
          found = true;
        }
      },
      contentState,
      entityType
    );
  });

  return {
    entityRanges,
    found
  };
};

export const getLinksSelection = (...args) =>
  getEntitiesSelection(...args, "LINK");

export default getEntitiesSelection;
