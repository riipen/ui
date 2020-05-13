/**
 * Get current selected text
 * see: https://github.com/facebook/draft-js/issues/442#issuecomment-223816158
 *
 * @param  {Draft.ContentState}
 * @param  {Draft.SelectionState}
 * @param  {String}
 * @return {String}
 */
export default (selection, contentState, blockDelimiter = "\n") => {
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

  return selectedBlock
    .map(block => {
      const key = block.getKey();
      let text = block.getText();

      let start = 0;
      let end = text.length;

      if (key === startKey) {
        start = selection.getStartOffset();
      }
      if (key === endKey) {
        end = selection.getEndOffset();
      }

      text = text.slice(start, end);
      return text;
    })
    .join(blockDelimiter);
};
