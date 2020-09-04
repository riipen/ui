import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

import prism from "src/utils/prism";

import ThemeContext from "riipen-ui/styles/ThemeContext";

const renderer = new marked.Renderer();

const markedOptions = {
  baseUrl: process.env.URL_PREFIX,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code, language) {
    let prismLanguage;

    switch (language) {
      case "sh":
        prismLanguage = prism.languages.bash;
        break;

      case "js":
        prismLanguage = prism.languages.jsx;
        break;

      default:
        prismLanguage = prism.languages[language];
        break;
    }

    if (!prismLanguage) {
      if (language) {
        throw new Error(`unsupported language: "${language}", "${code}"`);
      } else {
        prismLanguage = prism.languages.jsx;
      }
    }

    return prism.highlight(code, prismLanguage);
  },
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
          div :global(a) {
            color: ${theme.palette.secondary.main};
            text-decoration: none;
          }
          div :global(a:hover) {
            text-decoration: underline;
          }
          div :global(pre) {
            background-color: #333;
            border-radius: 2px;
            color: #fff;
            display: block;
            font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 14px;
            padding: 18px 12px;
            overflow-x: auto;
          }
          div :global(table) {
            border-collapse: collapse;
            border-spacing: 0;
            display: block;
            margin-bottom: 16px;
            overflow-x: auto;
            width: 100%;
          }
          div :global(table .prop-name) {
            font-family: 'Consolas, "Liberation Mono", Menlo, monospace';
            font-size: 13px;
          }
          div :global(table .required) {
            color: #006500;
          }
          div :global(table .prop-type) {
            color: #932981;
            font-family: 'Consolas, "Liberation Mono", Menlo, monospace';
            font-size: 13px;
          }
          div :global(table .prop-default) {
            border-bottom: 1px dotted ${theme.palette.text.hint};
            font-family: 'Consolas, "Liberation Mono", Menlo, monospace';
            font-size: 13px;
          }
          div :global(td) {
            border-bottom: 1px solid ${theme.palette.divider};
            color: ${theme.palette.text.primary};
            padding: 16px;
          }
          div :global(th) {
            border-bottom: 1px solid ${theme.palette.divider};
            color: ${theme.palette.text.primary};
            font-size: 14px;
            font-weight: ${theme.typography.fontWeight.medium};
            line-height: 24px;
            padding: 16px;
            white-space: pre;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default MarkdownElement;
