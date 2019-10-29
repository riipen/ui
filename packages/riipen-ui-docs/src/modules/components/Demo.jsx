import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/oceanicNext";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "@riipen-ui/styles/ThemeContext";

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
          <Highlight
            {...defaultProps}
            code={demo.rawJS}
            language="jsx"
            theme={prismTheme}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
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
            border-radius: ${theme.shape.borderRadius.large};
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
            padding: 0;
            margin-bottom: ${theme.spacing(1)};
            margin-right: 0;
          }
          .code :global(pre) {
            background-color: rgba(255, 229, 100, 0.1);
            border-radius: 2px;
            color: ${theme.palette.text.primary};
            display: block;
            font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 14px;
            padding: 18px 12px;
            overflow: auto;
          }
        `}</style>
      </div>
    );
  }
}

export default Demo;
