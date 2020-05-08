import { ContentBlock, ContentState } from "draft-js";
import PropTypes from "prop-types";
import React from "react";

class RteImage extends React.Component {
  static propTypes = {
    // draft-js CompositeDecorator
    /**
     * The draft-js ContentState to render with.
     *
     */
    contentState: PropTypes.instanceOf(ContentState).isRequired,

    /**
     * The draft-js block to render with.
     *
     */
    block: PropTypes.instanceOf(ContentBlock).isRequired,

    /**
     * The content/text to render.
     *
     */
    children: PropTypes.node
  };

  render() {
    const { block, contentState } = this.props;

    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src, alt } = entity.getData();

    return (
      <React.Fragment>
        <img alt={alt} src={src} className={"image"} />
        <style jsx>{`
          .image {
            max-width: 100%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default RteImage;
