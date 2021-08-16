import css from "styled-jsx/css";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import clsx from "clsx";

import withClasses from "../utils/withClasses";
import withThemeContext from "../utils/withThemeContext";

import InputLabel from "./InputLabel";
import Typography from "./Typography";

const RadioButtonGroup = ({
  children,
  error,
  hint,
  id,
  label,
  labelProps,
  onChange,
  required,
  theme,
  value,
  variant,
  warning,
  ...other
}) => {
  const linkedStyles = css.resolve`
    .connected.radioButtons .radioButton:first-child {
      border-top-left-radius: ${theme.shape.borderRadius.md};
      border-bottom-left-radius: ${theme.shape.borderRadius.md};
    }

    .connected.radioButtons .radioButton:last-child {
      border-top-right-radius: ${theme.shape.borderRadius.md};
      border-bottom-right-radius: ${theme.shape.borderRadius.md};
    }

    .connected..radioButtons .radioButton:not(:first-child) {
      border-left-color: transparent;
    }

    .connected.radioButtons .radioButton:not(:first-child .checked):hover {
      border-left-color: inherit;
    }

    .separate.radioButtons .radioButton {
      border-radius: ${theme.shape.borderRadius.md};
    }

    .separate.radioButtons .radioButton:not(:last-child) {
      margin-right: ${theme.spacing(4)}px;
    }
  `;

  const handleChange = e => {
    if (onChange) {
      onChange(e, e.target.value);
    }
  };

  const childrenWithProps = React.Children.map(
    children,
    child =>
      child &&
      React.cloneElement(child, {
        checked: value === child.props.value,
        onChange: handleChange,
        ...other,
        ...child.props,
        classes: [
          linkedStyles.className,
          "radioButton",
          ...(child.props.classes || [])
        ]
      })
  ).filter(Boolean);

  return (
    <>
      <fieldset id={id}>
        {(label || hint) && (
          <InputLabel
            hint={hint}
            htmlFor={other.name}
            required={required}
            {...labelProps}
          >
            {label}
          </InputLabel>
        )}

        <div className={clsx("radioButtons", variant, linkedStyles.className)}>
          {childrenWithProps}
        </div>

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
          padding: 0;
        }
      `}</style>
    </>
  );
};

RadioButtonGroup.displayName = "RadioButtonGroup";

RadioButtonGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * An error to display below the input.
   */
  error: PropTypes.node,

  /**
   * Hint text to display under the label of the input.
   */
  hint: PropTypes.node,

  /**
   * An ID to set on this component.
   */
  id: PropTypes.string,

  /**
   * Label text to display for the input.
   */
  label: PropTypes.node,

  /**
   * Any props to pass through to the InputLabel
   */
  labelProps: PropTypes.object,

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
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The value of the selected radio button
   */
  value: PropTypes.any,

  /**
   * Radio button group variant to display
   */
  variant: PropTypes.oneOf(["connected", "separate"]),

  /**
   * A warning to display below the input.
   */
  warning: PropTypes.node
};

RadioButtonGroup.defaultProps = {
  variant: "connected"
};

export default withThemeContext(withClasses(RadioButtonGroup));
