import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Spinner extends React.Component {
  static displayName = "Spinner";

  static propTypes = {
    /**
     * The content of the component to display when it is not loading.
     */
    children: PropTypes.node,

    /**
     * The color of the spinner.
     */
    color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),

    /**
     * Whether to display the spinner or the content
     */
    loading: PropTypes.bool
  };

  static defaultProps = {
    color: "primary"
  };

  static contextType = ThemeContext;

  render() {
    const { children, color, loading } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <div className="loadingContainer">
          {loading ? (
            <div className={clsx("loader", color)}>Loading...</div>
          ) : (
            children
          )}
        </div>
        <style jsx>{`
          .loadingContainer {
            min-height: 200px;
          }

          .loader,
          .loader:before,
          .loader:after {
            background: #ffffff;
            -webkit-animation: load1 1s infinite ease-in-out;
            animation: load1 1s infinite ease-in-out;
            width: 1em;
            height: 4em;
          }
          .loader.primary,
          .loader.primary:before,
          .loader.primary:after {
            background: ${theme.palette.primary.main};
          }
          .loader.secondary,
          .loader.secondary:before,
          .loader.secondary:after {
            background: ${theme.palette.secondary.main};
          }
          .loader.tertiary,
          .loader.tertiary:before,
          .loader.tertiary:after {
            background: ${theme.palette.tertiary.main};
          }
          .loader {
            color: #ffffff;
            text-indent: -9999em;
            margin: 88px auto;
            position: relative;
            font-size: 11px;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
          }
          .loader.primary {
            color: ${theme.palette.primary.main};
          }
          .loader.secondary {
            color: ${theme.palette.secondary.main};
          }
          .loader.tertiary {
            color: ${theme.palette.tertiary.main};
          }
          .loader:before,
          .loader:after {
            position: absolute;
            top: 0;
            content: "";
          }
          .loader:before {
            left: -1.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
          }
          .loader:after {
            left: 1.5em;
          }
          @-webkit-keyframes load1 {
            0%,
            80%,
            100% {
              box-shadow: 0 0;
              height: 4em;
            }
            40% {
              box-shadow: 0 -2em;
              height: 5em;
            }
          }
          @keyframes load1 {
            0%,
            80%,
            100% {
              box-shadow: 0 0;
              height: 4em;
            }
            40% {
              box-shadow: 0 -2em;
              height: 5em;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Spinner);
