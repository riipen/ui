import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
     * An object consisting of key value errors, an array of strings, an array of
     * react elements, or a single string to display as an error.
     */
    error: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.node,
      PropTypes.object,
      PropTypes.string
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
      this.props.error &&
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

  static contextType = ThemeContext;

  handleKeyPress = e => {
    const { enter } = this.props;

    if (e.key === "Enter" && !enter) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  renderErrorObjectItemMessage = (key, message) => (
    <li key={key}>
      <Typography>
        {key}
        {": "}
        {message}
      </Typography>
    </li>
  );

  renderErroObjectItem(error, key) {
    if (!error) return [];

    let newError;

    if (Array.isArray(error)) {
      newError = error.map((e, i) => {
        const newKey = key ? `${key} ${i}` : i;

        return this.renderErroObjectItem(e, newKey);
      });
    } else if (typeof error === "object" && !React.isValidElement(error)) {
      newError = Object.entries(error).map(([k, e]) => {
        const newKey = key ? `${key} ${k}` : k;

        return this.renderErroObjectItem(e, newKey);
      });
    } else {
      newError = this.renderErrorObjectItemMessage(key, error);
    }

    return newError;
  }

  renderErrorArrayString = error => {
    const theme = this.context;

    return (
      <ul className={clsx("errors")}>
        {error.map((e, i) => (
          <li key={i}>
            <Typography>{e}</Typography>
          </li>
        ))}
        <style jsx>{`
          .errors {
            margin: ${theme.spacing(2)}px ${theme.spacing(4)}px;
            padding: 0;
          }
        `}</style>
      </ul>
    );
  };

  renderErrorArrayNode = error => {
    const theme = this.context;

    return (
      <ul className={clsx("errors")}>
        {error.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
        <style jsx>{`
          .errors {
            margin: ${theme.spacing(2)}px ${theme.spacing(4)}px;
            padding: 0;
          }
        `}</style>
      </ul>
    );
  };

  renderErrorObject = error => {
    const theme = this.context;

    return (
      <ul className={clsx("errors")}>
        {this.renderErroObjectItem(error)}
        <style jsx>{`
          .errors {
            margin: ${theme.spacing(2)}px ${theme.spacing(3)}px;
            padding: 0;
          }
        `}</style>
      </ul>
    );
  };

  renderErrorString = error => <Typography>{error}</Typography>;

  render() {
    const { children, classes, error, ...other } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    // Remove any unwanted props from "other"
    other.enter = undefined;

    let errorRenderer;

    if (error) {
      if (typeof error === "string") {
        errorRenderer = this.renderErrorString;
      } else if (
        Array.isArray(error) &&
        error.length > 0 &&
        typeof error[0] === "string"
      ) {
        errorRenderer = this.renderErrorArrayString;
      } else if (
        Array.isArray(error) &&
        error.length > 0 &&
        React.isValidElement(error[0])
      ) {
        errorRenderer = this.renderErrorArrayNode;
      } else if (typeof error === "object" && Object.keys(error).length > 0) {
        errorRenderer = this.renderErrorObject;
      }
    }

    return (
      <React.Fragment>
        {errorRenderer && (
          <div className={clsx("error")} ref={this.setError}>
            <Notice color="negative">{errorRenderer(error)}</Notice>
          </div>
        )}
        <form className={className} onKeyPress={this.handleKeyPress} {...other}>
          {children}
        </form>
        <style jsx>{`
          form {
            width: 100%;
          }

          .errors {
            margin: ${theme.spacing(2)}px ${theme.spacing(4)}px;
            padding: 0;
          }

          .error {
            margin-bottom: ${theme.spacing(5)}px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Form);
