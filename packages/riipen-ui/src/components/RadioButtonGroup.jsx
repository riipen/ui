import css from "styled-jsx/css";
import PropTypes from "prop-types";
import React from "react";

import clsx from "clsx";

import withClasses from "../utils/withClasses";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

const RadioButtonGroup = ({
  children,
  error,
  hint,
  label,
  name,
  onChange,
  required,
  warning
}) => {
  const linkedStyles = css.resolve`
    .radioButtons .radioButton:first-child {
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }

    .radioButtons .radioButton:not(:first-child) {
      border-left: none;
    }

    .radioButtons .radioButton:last-child {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  `;

  const handleChange = e => {
    if (onChange) {
      onChange(e, e.target.value);
    }
  };

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      onChange: handleChange,
      classes: [linkedStyles.className, "radioButton"]
    })
  );

  return (
    <React.Fragment>
      <fieldset>
        {(label || hint) && (
          <InputLabel hint={hint} htmlFor={name} required={required}>
            {label}
          </InputLabel>
        )}

        <span className={clsx("radioButtons", linkedStyles.className)}>
          {childrenWithProps}
        </span>

        {error && (
          <Typography color="negative" variant="body2">
            {error}
          </Typography>
        )}
        {warning && (
          <Typography color="secondary" variant="body2">
            {warning}
          </Typography>
        )}
      </fieldset>
      {linkedStyles.styles}
      <style jsx>{`
        fieldset {
          border: none;
          margin: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

RadioButtonGroup.displayName = "RadioButtonGroup";

RadioButtonGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * An error to display below the input.
   */
  error: PropTypes.node,

  /**
   * Hint text to display under the label of the input.
   */
  hint: PropTypes.node,

  /**
   * Label text to display for the input.
   */
  label: PropTypes.node,

  /**
   * The name of the form element the label is bound to.
   */
  name: PropTypes.string,

  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,

  /**
   * If true, an asterisk will be appended to the end of the label.
   */
  required: PropTypes.bool,

  /**
   * A warning to display below the input.
   */
  warning: PropTypes.node
};

export default withClasses(RadioButtonGroup);
