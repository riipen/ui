import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Notice from "./Notice";
import Typography from "./Typography";

class Form extends React.Component {
  static displayName = "Form";

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
     * Top level form error to display. One of either string or react node.
     */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * A list of form errors to display. One of an object consisting of key value errors,
     * an array of strings, or an array of react nodes.
     */
    errors: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.object
    ]),

    /**
     * If `false`, error will not be scrolled to when it is passed to the form.
     */
    errorScroll: PropTypes.bool,

    /**
     * If `false`, pressing enter to submit the form will be disabled.
     */
    enter: PropTypes.bool
  };

  static defaultProps = {
    classes: [],
    enter: true,
    errorScroll: true
  };

  componentDidUpdate(prevProps) {
    const theme = this.context;

    // If an error id dynamically added to the form, scroll the error notice in to view
    if (
      !prevProps.error &&
      !prevProps.errors &&
      (this.props.error || this.props.errors) &&
      this.error &&
      this.props.errorScroll
    ) {
      const padding = theme.spacing(20);
      const rect = this.error.getBoundingClientRect();

      // Only scroll if it's not already visible
      if (rect.y - padding < 0 || rect.y - padding > window.innerHeight) {
        window.scrollTo(0, rect.top + window.pageYOffset - padding);
      }
    }
  }

  setError = ref => {
    this.error = ref;
  };

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      .errorContainer {
        margin-bottom: ${theme.spacing(5)}px;
      }

      .error {
      }

      .errors {
        margin: 0 ${theme.spacing(3)}px;
        padding: 0;
      }

      .errorContainer > div > .error + .errors {
        margin-top: ${theme.spacing(2)}px;
      }
    `;
  };

  static contextType = ThemeContext;

  handleKeyPress = e => {
    const { enter } = this.props;

    if (e.key === "Enter" && !enter) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  renderErrorsString = errors => {
    return errors.map((e, i) => (
      <li key={i}>
        <Typography>{e}</Typography>
      </li>
    ));
  };

  renderErrorsNode = errors => {
    return errors.map((e, i) => <li key={i}>{e}</li>);
  };

  renderErrorsObject = errors => {
    const renderEntry = (key, message) => (
      <li key={key}>
        <Typography component="span">
          {key}
          {": "}
          {message}
        </Typography>
      </li>
    );

    const renderObject = (obj, key) => {
      if (!obj) return [];

      let newError;

      if (Array.isArray(obj)) {
        newError = obj.map((e, i) => {
          const newKey = key ? `${key} ${i}` : i;

          return renderObject(e, newKey);
        });
      } else if (typeof obj === "object" && !React.isValidElement(obj)) {
        newError = Object.entries(obj).map(([k, e]) => {
          const newKey = key ? `${key} ${k}` : k;

          return renderObject(e, newKey);
        });
      } else {
        newError = renderEntry(key, obj);
      }

      return newError;
    };

    return renderObject(errors);
  };

  renderErrorNode = error => error;
  renderErrorString = error => <Typography>{error}</Typography>;

  render() {
    const { children, classes, error, errors, ...other } = this.props;

    const linkedStyles = this.getLinkedStyles();

    const className = clsx(classes);

    // Remove any unwanted props from "other"
    delete other.enter;
    delete other.errorScroll;

    let errorRenderer;
    let errorsRenderer;

    if (error) {
      if (typeof error === "string") {
        errorRenderer = this.renderErrorString;
      } else if (React.isValidElement(error)) {
        errorRenderer = this.renderErrorNode;
      }
    }

    if (errors) {
      if (
        Array.isArray(errors) &&
        errors.length > 0 &&
        typeof errors[0] === "string"
      ) {
        errorsRenderer = this.renderErrorsString;
      } else if (
        Array.isArray(errors) &&
        errors.length > 0 &&
        React.isValidElement(errors[0])
      ) {
        errorsRenderer = this.renderErrorsNode;
      } else if (typeof errors === "object" && Object.keys(errors).length > 0) {
        errorsRenderer = this.renderErrorsObject;
      }
    }

    return (
      <React.Fragment>
        {(errorRenderer || errorsRenderer) && (
          <div
            className={clsx(linkedStyles.className, "errorContainer")}
            ref={this.setError}
          >
            <Notice classes={[linkedStyles.className]} color="negative">
              {errorRenderer && (
                <span className={clsx(linkedStyles.className, "error")}>
                  {errorRenderer(error)}
                </span>
              )}
              {errorsRenderer && (
                <ul className={clsx(linkedStyles.className, "errors")}>
                  {errorsRenderer(errors)}
                </ul>
              )}
            </Notice>
          </div>
        )}
        <form className={className} onKeyPress={this.handleKeyPress} {...other}>
          {children}
        </form>
        <style jsx>{`
          form {
            width: 100%;
          }
        `}</style>
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default withClasses(Form);
