import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "@riipen-ui/styles/ThemeContext";

const renderer = new marked.Renderer();

const markedOptions = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  renderer
};

class MarkdownElement extends React.Component {
  static propTypes = {
    text: PropTypes.string
  };

  static contextType = ThemeContext;

  render() {
    const { text } = this.props;

    const theme = this.context;

    return (
      <React.Fragment>
        <div
          dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
        />
        <style jsx>{`
          div {
            font-family: ${theme.typography.fontFamily};
            font-size: 16px;
            color: ${theme.palette.text.primary};
          }
          div :global(h1) {
            font-family: ${theme.typography.h1.fontFamily};
            font-size: ${theme.typography.h1.fontSize};
            font-weight: ${theme.typography.h1.fontWeight};
            letter-spacing: ${theme.typography.h1.letterSpacing};
            line-height: ${theme.typography.h1.lineHeight};
            margin: 16px 0;
          }
          div :global(h2) {
            font-family: ${theme.typography.h2.fontFamily};
            font-size: ${theme.typography.h2.fontSize};
            font-weight: ${theme.typography.h2.fontWeight};
            letter-spacing: ${theme.typography.h2.letterSpacing};
            line-height: ${theme.typography.h2.lineHeight};
            margin: 40px 0 16px;
          }
          div :global(h3) {
            font-family: ${theme.typography.h3.fontFamily};
            font-size: ${theme.typography.h3.fontSize};
            font-weight: ${theme.typography.h3.fontWeight};
            letter-spacing: ${theme.typography.h3.letterSpacing};
            line-height: ${theme.typography.h3.lineHeight};
            margin: 40px 0 16px;
          }
          div :global(h4) {
            font-family: ${theme.typography.h4.fontFamily};
            font-size: ${theme.typography.h4.fontSize};
            font-weight: ${theme.typography.h4.fontWeight};
            letter-spacing: ${theme.typography.h4.letterSpacing};
            line-height: ${theme.typography.h4.lineHeight};
            margin: 32px 0 16px;
          }
          div :global(h5) {
            font-family: ${theme.typography.h5.fontFamily};
            font-size: ${theme.typography.h5.fontSize};
            font-weight: ${theme.typography.h5.fontWeight};
            letter-spacing: ${theme.typography.h5.letterSpacing};
            line-height: ${theme.typography.h5.lineHeight};
            margin: 32px 0 16px;
          }
          div :global(p) {
            line-height: 1.6;
            margin-top: 0;
            margin-bottom: 16px;
          }
          div :global(.description) {
            font-size: 25px;
            font-weight: ${theme.typography.fontWeight.medium};
            margin-bottom: 40px;
          }
          div :global(pre) {
            background-color: #333;
            border-radius: 2px;
            color: #fff;
            display: block;
            font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 14px;
            padding: 18px 12px;
            overflow: auto;
          }
          div :global(table) {
            width: 100%;
            display: block;
            overflow-x: auto;
            border-collapse: collapse;
            margin-bottom: 16px;
            border-spacing: 0;
            overflow: hidden;
          }
          div :global(table .prop-name) {
            font-size: 13px;
            font-family: 'Consolas, "Liberation Mono", Menlo, monospace';
          }
          div :global(table .required) {
            color: #006500;
          }
          div :global(table .prop-type) {
            font-size: 13px;
            font-family: 'Consolas, "Liberation Mono", Menlo, monospace';
            color: #932981;
          }
          div :global(table .prop-default) {
            font-size: 13px;
            font-family: 'Consolas, "Liberation Mono", Menlo, monospace';
            border-bottom: 1px dotted ${theme.palette.text.hint};
          }
          div :global(td) {
            border-bottom: 1px solid ${theme.palette.divider};
            padding: 16px;
            color: ${theme.palette.text.primary};
          }
          div :global(th) {
            font-size: 14px;
            line-height: 24px;
            font-weight: ${theme.typography.fontWeight.medium};
            color: ${theme.palette.text.primary};
            white-space: pre;
            border-bottom: 1px solid ${theme.palette.divider};
            padding: 16px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default MarkdownElement;
