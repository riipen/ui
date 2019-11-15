import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Typography from "./Typography";

class Breadcrumbs extends React.Component {
  static propTypes = {
    /**
     * The breadcrumb children.
     */
    children: PropTypes.node.isRequired,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default, it maps the variant to a good default headline component.
     */
    component: PropTypes.elementType,

    /**
     * Custom separator node.
     */
    separator: PropTypes.node
  };

  static defaultProps = {
    component: "nav",
    separator: "/"
  };

  static contextType = ThemeContext;

  render() {
    const { children, component, separator, ...other } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <Typography component={component} {...other}>
          <ol>
            {children.map((child, index) => {
              if (index < children.length - 1) {
                return [
                  <li key={`child-${index}`}>{child}</li>,
                  <li key={`separator-${index}`}>{separator}</li>
                ];
              }

              return <li key={`child-${index}`}>{child}</li>;
            })}
          </ol>
        </Typography>
        <style jsx>{`
          ol {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
          }

          li {
            list-style: none;
            margin-right: ${theme.spacing(2)}px;
          }
          li::last-child {
            margin-right: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Breadcrumbs;
