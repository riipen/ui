import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../../styles/ThemeContext";
import withClasses from "../../utils/withClasses";

class ControlButton extends React.Component {
  static propTypes = {
    /**
     * If the control is active.
     *
     */
    active: PropTypes.bool.isRequired,

    /**
     * The display for the button. We use a string or <Icon />.
     *
     */
    label: PropTypes.node.isRequired,

    /**
     * Function to execute on control button click.
     *
     */
    onClick: PropTypes.func.isRequired,

    /**
     * The width of the control button.
     *
     */
    size: PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    size: "small"
  };

  onClick = e => {
    e.preventDefault();
    this.props.onClick();
  };

  static contextType = ThemeContext;

  render() {
    const { active, size } = this.props;
    const classNames = ["controlButton", size, active && "activeButton"].filter(
      Boolean
    );

    const theme = this.context;

    return (
      <span className={clsx(classNames)} onMouseDown={this.onClick}>
        {this.props.label}
        <style jsx>{`
          .controlButton {
            color: ${theme.palette.text.secondary};
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            padding: 3px ${theme.spacing(2)}px;
            text-align: center;
          }

          .small {
            width: 41px;
          }

          .medium {
            width: 82px;
          }

          .large {
            width: 123px;
          }

          .controlButton:hover {
            background-color: ${theme.palette.background.default};
            color: ${theme.palette.text.secondary};
          }

          .activeButton,
          .activeButton:hover {
            background-color: ${theme.palette.background.default};
            color: ${theme.palette.common.black};
          }
        `}</style>
      </span>
    );
  }
}

export default withClasses(ControlButton);
