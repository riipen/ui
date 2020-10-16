import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Notice from "./Notice";
import Typography from "./Typography";

const isEmpty = value => {
  return !value || !Object.keys(value).length;
};

const Form = ({
  children,
  classes,
  enter,
  error,
  errors,
  errorScroll,
  ...other
}) => {
  const theme = React.useContext(ThemeContext);

  const errorRef = useRef(null);

  useEffect(() => {
    if ((error || !isEmpty(errors)) && errorScroll) {
      const padding = theme.spacing(20);

      const rect = errorRef.current.getBoundingClientRect();

      // Only scroll if it's not already visible
      if (rect.y - padding < 0 || rect.y - padding > window.innerHeight) {
        window.scrollTo(0, rect.top + window.pageYOffset - padding);
      }
    }
  }, [errorScroll, error, errors]);

  const getLinkedStyles = () => {
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

  const handleKeyPress = e => {
    if (e.key === "Enter" && !enter) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const renderErrorsString = values => {
    return values.map((e, i) => (
      <li key={i}>
        <Typography>{e}</Typography>
      </li>
    ));
  };

  const renderErrorsNode = values => {
    return values.map((e, i) => <li key={i}>{e}</li>);
  };

  const renderErrorsObject = () => {
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

  const renderErrorNode = val => val;
  const renderErrorString = val => <Typography>{val}</Typography>;

  const linkedStyles = getLinkedStyles();

  let errorRenderer;
  let errorsRenderer;

  if (error) {
    if (typeof error === "string") {
      errorRenderer = renderErrorString;
    } else if (React.isValidElement(error)) {
      errorRenderer = renderErrorNode;
    }
  }

  if (!isEmpty(errors)) {
    if (Array.isArray(errors) && typeof errors[0] === "string") {
      errorsRenderer = renderErrorsString;
    } else if (Array.isArray(errors) && React.isValidElement(errors[0])) {
      errorsRenderer = renderErrorsNode;
    } else if (typeof errors === "object") {
      errorsRenderer = renderErrorsObject;
    }
  }

  return (
    <React.Fragment>
      {(errorRenderer || errorsRenderer) && (
        <div
          className={clsx(linkedStyles.className, "errorContainer")}
          ref={errorRef}
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
      <form className={clsx(classes)} onKeyPress={handleKeyPress} {...other}>
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
};

Form.displayName = "Form";

Form.propTypes = {
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

Form.defaultProps = {
  classes: [],
  enter: true,
  errorScroll: true
};

export default withClasses(Form);
