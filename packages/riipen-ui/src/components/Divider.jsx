import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Divider extends React.Component {
  static displayName = "Divider";

  static propTypes = {
    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(["fullWidth", "middle"])
  };

  static defaultProps = {
    classes: [],
    variant: "fullWidth"
  };

  static contextType = ThemeContext;

  render() {
    const { classes, variant } = this.props;

    const theme = this.context;

    const className = clsx(variant, classes);

    return (
      <>
        <div className={className} />
        <style jsx>{`
          div {
            background-color: ${theme.palette.divider};
            height: 1px;
          }

          .middle {
            margin-left: ${theme.spacing(2)}px;
            margin-right: ${theme.spacing(2)}px;
          },
        `}</style>
      </>
    );
  }
}

export default withClasses(Divider);
