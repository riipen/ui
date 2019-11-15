import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Typography from "./Typography";

class FormGroup extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * A title for the field set.
     */
    title: PropTypes.string,

    /**
     * A subtitle for the field set.
     */
    subtitle: PropTypes.node
  };

  static defaultProps = {
    classes: []
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, title, subtitle } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <fieldset className={className}>
          {title && (
            <Typography component="p" gutter variant="h3">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography component="p" gutter variant="h4">
              {subtitle}
            </Typography>
          )}
          {children}
        </fieldset>
        <style jsx>{`
          fieldset {
            border: none;
            margin: ${theme.spacing(3)}px 0;
            padding: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default FormGroup;
