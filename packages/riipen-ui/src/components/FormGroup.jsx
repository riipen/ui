import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
    title: PropTypes.node,

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
          <div className="children">{children}</div>
        </fieldset>
        <style jsx>{`
          fieldset {
            border: none;
            margin: 0 0 ${theme.spacing(8)}px 0;
            padding: 0;
          }

          fieldset:last-child {
            margin-bottom: 0;
          }

          .children {
            margin-top: ${theme.spacing(4)}px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses()(FormGroup);
