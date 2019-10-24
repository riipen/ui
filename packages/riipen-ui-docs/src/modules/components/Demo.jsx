import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeContext from '@riipen-ui/styles/ThemeContext';

import MarkdownElement from 'src/modules/components/MarkdownElement';
import Sandbox from 'src/modules/components/Sandbox';

class Demo extends React.Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
  };

  static contextType = ThemeContext;

  render() {
    const { demo, options, styles } = this.props;

    const theme = this.context;

    return (
      <div className="root">
        <div className="demo">
          <Sandbox
            component={demo.jsx}
            name={demo.name}
          />
        </div>
        <div className="code">
          <MarkdownElement text={`\`\`\`jsx\n${demo.rawJS}\n\`\`\``} />
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
            position: relative;
            outline: 0;
            margin: auto;
            border-radius: ${theme.shape.borderRadius.large};
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            padding: 20px;
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
          .code :global(code) {
            background-color: rgba(255,229,100,0.1);
            border-radius: 2px;
            color: ${theme.palette.text.primary};
            display: block;
            font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 14px;
            padding: 18px 12px;
            overflow: auto;
          }
          .code :global(code[class*="language-"]) {
            background-color: #333;
            color: #fff;
          }
        `}</style>
      </div>
    );
  }
}

export default Demo;
