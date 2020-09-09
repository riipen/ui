import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import AccordionContext from "./AccordionContext";
import ButtonIcon from "./ButtonIcon";

const AccordionSummary = props => {
  const { children, classes, iconProps, icon, ...other } = props;

  const theme = React.useContext(ThemeContext);

  const [focusedState, setFocusedState] = React.useState(false);

  const getLinkedStyles = () => {
    return css.resolve`
      .root {
        align-items: center;
        cursor: pointer;
        display: flex;
        transition: ${theme.transitions.create([
          "background-color",
          "min-height"
        ])};
        user-select: none;
      }
      .root.disabled {
        cursor: initial;
      }

      .content {
        flex-grow: 1;
        transition: ${theme.transitions.create(["margin"])};
      }

      .icon {
        transform: rotate(0deg);
        transition: ${theme.transitions.create(["transform"])};
      }
      .icon.expanded {
        transform: rotate(180deg);
      }
    `;
  };

  const handleFocusVisible = () => {
    setFocusedState(true);
  };

  const handleBlur = () => {
    setFocusedState(false);
  };

  const { disabled = false, expanded, toggle } = React.useContext(
    AccordionContext
  );

  const handleClick = event => {
    if (toggle && !disabled) {
      toggle(event);
    }
  };

  const linkedStyles = getLinkedStyles();

  return (
    <div
      disabled={disabled}
      aria-expanded={expanded}
      className={clsx(
        linkedStyles.className,
        "root",
        {
          disabled,
          expanded,
          focused: focusedState
        },
        classes
      )}
      onClick={handleClick}
      onFocusVisible={handleFocusVisible}
      onBlur={handleBlur}
      {...other}
    >
      <div
        className={clsx(linkedStyles.className, "content", {
          expanded
        })}
      >
        {children}
      </div>
      {icon && (
        <ButtonIcon
          component="div"
          {...iconProps}
          classes={[
            clsx(
              linkedStyles.className,
              "icon",
              {
                expanded
              },
              iconProps.classes
            )
          ]}
          disabled={disabled}
        >
          {icon}
        </ButtonIcon>
      )}
      {linkedStyles.styles}
    </div>
  );
};

AccordionSummary.propTypes = {
  /**
   * The content of the accordion summary.
   */
  children: PropTypes.node,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The icon to display as the expand indicator.
   */
  icon: PropTypes.node,

  /**
   * Props applied to the `ButtonIcon` element wrapping the expand icon.
   */
  iconProps: PropTypes.object
};

AccordionSummary.defaultProps = {
  classes: [],
  iconProps: {}
};

AccordionSummary.displayName = "AccordionSummary";

export default AccordionSummary;
