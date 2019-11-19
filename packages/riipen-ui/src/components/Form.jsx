import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Notice from "./Notice";
import Typography from "./Typography";

class Form extends React.Component {
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
     * Top level form error to display.
     * An object consisting of key value errors or a single string
     * to display as an error.
     */
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    /**
     * If `false`, pressing enter to submit the form will be disabled.
     */
    enter: PropTypes.bool
  };

  static defaultProps = {
    classes: [],
    enter: true
  };

  static contextType = ThemeContext;

  handleKeyPress = e => {
    const { enter } = this.props;

    if (e.key === "Enter" && !enter) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  renderErrorListItem = (key, message) => (
    <li key={key}>
      <Typography>
        {key}
        {": "}
        {message}
      </Typography>
    </li>
  );

  renderErrorList(error, key) {
    if (!error) return [];

    let newError;

    if (Array.isArray(error)) {
      newError = error.map((e, i) => {
        const newKey = key ? `${key} ${i}` : i;

        return this.renderErrorList(e, newKey);
      });
    } else if (typeof error === "object") {
      newError = Object.entries(error).map(([k, e]) => {
        const newKey = key ? `${key} ${k}` : k;

        return this.renderErrorList(e, newKey);
      });
    } else {
      newError = this.renderErrorListItem(key, error);
    }

    return newError;
  }

  renderErrorObject = error => <ul>{this.renderErrorList(error)}</ul>;

  renderErrorString = error => <Typography>{error}</Typography>;

  render() {
    const { children, classes, error, ...other } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    return (
      <React.Fragment>
        {error && (
          <Notice classes={clsx("error")} color="negative">
            {typeof error === "string" && this.renderErrorString(error)}
            {typeof error === "object" &&
              Object.keys(error).lenght > 0 &&
              this.renderErrorObject(error)}
          </Notice>
        )}
        <form className={className} onKeyPress={this.handleKeyPress} {...other}>
          {children}
        </form>
        <style jsx>{`
          form {
            width: 100%;
          }

          .error {
            margin-bottom: ${theme.spacing(3)}px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Form;
