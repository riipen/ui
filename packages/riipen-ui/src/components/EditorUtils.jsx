import { convertFromHTML, convertToHTML } from "draft-convert";

import React from "react";

const EDITOR_ENTITY_TYPES = {
  LINK: "LINK",
  IMAGE: "IMAGE"
};

const fromHtmlConfig = {
  htmlToEntity: (nodeName, node, createEntity) => {
    switch (nodeName) {
      case "a":
        return createEntity(EDITOR_ENTITY_TYPES.LINK, "MUTABLE", {
          url: node.href
        });
      case "img":
        return createEntity(EDITOR_ENTITY_TYPES.IMAGE, "IMMUTABLE", {
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
 *
 * @param   {String} html - The html to convert into editor state
 *
 * @returns {Object} The RTE contentState (https://draftjs.org/docs/api-reference-content-state)
 */
const fromHtml = html => convertFromHTML(fromHtmlConfig)(html || "");

const toHtmlConfig = {
  blockToHTML: block => {
    switch (block.type) {
      case "code-block":
        return <pre />;
      case "atomic":
        return <div />;
      case "section":
        return <section />;
      case "unstyled":
        return <p />;
      default:
        return null;
    }
  },
  entityToHTML: (entity, originalText) => {
    switch (entity.type) {
      case EDITOR_ENTITY_TYPES.LINK:
        return <a href={entity.data.url}>{originalText}</a>;
      case EDITOR_ENTITY_TYPES.IMAGE:
        return <img alt={entity.data.alt} src={entity.data.src} />;
      default:
        return originalText;
    }
  }
};

/**
 * Wrapper of draft-convert convertFromHTML that has a predefined config.
 *
 * @param   {Object} contentState - The RTE contentState (https://draftjs.org/docs/api-reference-content-state)
 *
 * @returns {String} the html contained in the provided content state
 */
const toHtml = contentState => convertToHTML(toHtmlConfig)(contentState);

const findEntities = (contentBlock, callback, contentState, entityType) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      (!entityType ||
        contentState.getEntity(entityKey).getType() === entityType)
    );
  }, callback);
};

// find all content blocks within a selection range
const getSelectedBlocks = (selection, contentState) => {
  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const blocks = contentState.getBlockMap();

  let lastWasEnd = false;
  return blocks
    .skipUntil(block => block.getKey() === startKey)
    .takeUntil(block => {
      if (lastWasEnd) return true;

      if (block.getKey() === endKey) {
        lastWasEnd = true;
      }

      return false;
    });
};

/**
 * Get the selection ranges for entities of a given type within a selection range
 *
 * @param  {Object} selectionState - The RTE selectionState (https://draftjs.org/docs/api-reference-selection-state)
 * @param  {Object} contentState   - The RTE contentState (https://draftjs.org/docs/api-reference-content-state)
 * @param  {String} entityType     - The entity type to find selection ranges for
 *
 * @return {Object} The selection ranges of desired entities within the total selection range
 */
const getSelectedEntities = (selection, contentState, entityType) => {
  if (!selection || !contentState) return null;

  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const selectedBlocks = getSelectedBlocks(selection, contentState);

  const entityRanges = {};
  let found = false;

  selectedBlocks.forEach(block => {
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

    findEntities(
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

/**
 * Get the text currently selected in the RichTextEditor
 * see: https://github.com/facebook/draft-js/issues/442#issuecomment-223816158
 *
 * @param  {Object} selectionState - The RTE selectionState (https://draftjs.org/docs/api-reference-selection-state)
 * @param  {Object} contentState   - The RTE contentState (https://draftjs.org/docs/api-reference-content-state)
 * @param  {String} blockDelimiter - Delimiter to join separate selected blocks
 *
 * @return {String} The selected text in the editor as a string
 */
const getSelectedText = (selection, contentState, blockDelimiter = "\n") => {
  if (!selection || !contentState) return null;

  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const selectedBlock = getSelectedBlocks(selection, contentState);

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

export default {
  EDITOR_ENTITY_TYPES,
  findEntities,
  fromHtml,
  getSelectedEntities,
  getSelectedText,
  toHtml
};
