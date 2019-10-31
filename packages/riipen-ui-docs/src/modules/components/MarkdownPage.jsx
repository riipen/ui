import PropTypes from "prop-types";
import React from "react";

import constants from "src/constants";
import Demo from "src/modules/components/Demo";
import Footer from "src/modules/components/Footer";
import MarkdownElement from "src/modules/components/MarkdownElement";
import TOC from "src/modules/components/TOC";
import { getSections } from "src/utils/parseMarkdown";

class MarkdownPage extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    req: PropTypes.func.isRequired,
    reqSource: PropTypes.func
  };

  render() {
    const { req, path, reqSource } = this.props;

    const demos = {};
    let markdown;

    req.keys().forEach(filename => {
      if (filename.indexOf(".md") !== -1) {
        markdown = req(filename).default;
      } else if (filename.indexOf(".jsx") !== -1) {
        const demoName = `${path}/${filename
          .replace(/\.\//g, "")
          .replace(/\.jsx/g, ".js")}`;

        demos[demoName] = {
          name: demoName,
          jsx: req(filename).default,
          rawJS: reqSource(filename).default
        };
      }
    });

    const sections = getSections(markdown);

    return (
      <div>
        <div className="page">
          <div className="content">
            {sections.map((section, index) => {
              if (demos && constants.REGEX.DEMO.test(section)) {
                let options;

                try {
                  options = JSON.parse(`{${section}}`);
                } catch (err) {
                  console.error(err);
                  return null;
                }

                const name = options.demo;

                if (!demos || !demos[name]) {
                  throw new Error(
                    [
                      `Missing demo: ${name}. You can use one of the following:`,
                      Object.keys(demos)
                    ].join("\n")
                  );
                }

                return (
                  <Demo key={index} demo={demos[name]} options={options} />
                );
              }

              return <MarkdownElement key={index} text={section} />;
            })}
          </div>
          <div className="toc">
            <TOC sections={sections} />
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .page {
            display: flex;
          }
          .content {
            padding-right: 20px;
            width: 100%;
          }
          .toc {
            top: 70px;
            position: sticky;
            max-width: 250px;
            min-width: 175px;
          }
        `}</style>
      </div>
    );
  }
}

export default MarkdownPage;
