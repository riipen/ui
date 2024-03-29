import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Typography from "./Typography";

class FormGroup extends React.Component {
  static displayName = "FormGroup";

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

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      p.subtitle {
        color: ${theme.palette.text.secondary};
        font-weight: ${theme.typography.fontWeight.regular};
      }

      p.title {
        font-weight: ${theme.typography.fontWeight.medium};
        font-size: 22px;
        margin-bottom: ${theme.spacing(3)}px;
      }
    `;
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, title, subtitle } = this.props;

    const theme = this.context;

    const linkedStyles = this.getLinkedStyles();
    const className = clsx(classes);

    return (
      <>
        <fieldset className={className}>
          {title && (
            <Typography
              classes={[linkedStyles.className, "title"]}
              component="p"
              variant="h3"
            >
              {title}
              {linkedStyles.styles}
            </Typography>
          )}
          {subtitle && (
            <Typography
              classes={[linkedStyles.className, "subtitle"]}
              component="p"
              gutter
              variant="body1"
            >
              {subtitle}
              {linkedStyles.styles}
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
      </>
    );
  }
}

export default withClasses(FormGroup);
