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

export const findLinkEntities = (...args) => findEntities(...args, "LINK");

export default findEntities;
