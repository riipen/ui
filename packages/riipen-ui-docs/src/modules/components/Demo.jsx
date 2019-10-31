import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "@riipen-ui/styles/ThemeContext";

import MarkdownElement from "src/modules/components/MarkdownElement";
import Sandbox from "src/modules/components/Sandbox";

class Demo extends React.Component {
  static propTypes = {
    demo: PropTypes.object.isRequired
  };

  static contextType = ThemeContext;

  render() {
    const { demo } = this.props;

    const theme = this.context;

    return (
      <div className="root">
        <div className="demo">
          <Sandbox component={demo.jsx} name={demo.name} />
        </div>
        <div className="code">
          <MarkdownElement text={`\`\`\`\n${demo.rawJS}\n\`\`\``} />
        </div>

        <style jsx>{`
          .root {
            margin-bottom: 40px;
            margin-left: -${theme.spacing(2)};
            margin-right: -${theme.spacing(2)};
          }
          @media (min-width: ${theme.breakpoints.sm}px) {
            .root {
              padding: ${theme.spacing(0, 1)};
              margin-left: 0;
              margin-right: 0;
            }
          }
          .demo {
            background-color: #f5f5f5;
            border-radius: ${theme.shape.borderRadius.md};
            margin: auto;
            outline: 0;
            overflow: auto;
            padding: 20px;
            position: relative;
          }
          @media (min-width: ${theme.breakpoints.sm}px) {
            .demo {
              padding: ${theme.spacing(3)};
            }
          }
          .code {
            border-radius: 2px;
            display: block;
            font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 14px;
            margin-bottom: ${theme.spacing(1)};
            margin-right: 0;
            overflow: auto;
          }
        `}</style>
      </div>
    );
  }
}

export default Demo;
