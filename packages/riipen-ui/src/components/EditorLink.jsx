import { ContentState } from "draft-js";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class EditorLink extends React.Component {
  static propTypes = {
    /**
     * The draft-js ContentState to render with.
     */
    contentState: PropTypes.instanceOf(ContentState).isRequired,

    /**
     * The key to access the entity instance.
     */
    entityKey: PropTypes.string.isRequired,

    /**
     * The content/text to render.
     */
    children: PropTypes.node
  };

  static contextType = ThemeContext;

  render() {
    const { children, contentState, entityKey } = this.props;

    const { url } = contentState.getEntity(entityKey).getData();

    const theme = this.context;

    return (
      <React.Fragment>
        <a href={url} className={"link"}>
          {children}
        </a>
        <style jsx>{`
          .link {
            color: ${theme.palette.primary.light};
            cursor: text;
            text-decoration: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(EditorLink);
