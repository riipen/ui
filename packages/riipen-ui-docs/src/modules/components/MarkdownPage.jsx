import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import constants from 'src/constants';
import Demo from 'src/modules/components/Demo';
import Footer from 'src/modules/components/Footer';
import Head from 'src/modules/components/Head';
import MarkdownElement from 'src/modules/components/MarkdownElement';
import { getSections } from 'src/utils/parseMarkdown';

class MarkdownPage extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    req: PropTypes.func.isRequired,
    reqSource: PropTypes.func.isRequired,
  };

  render() {
    const {
      req,
      path,
      reqSource,
      title,
    } = this.props;

    let demos = {};
    let markdown;

    req.keys().forEach((filename) => {
      if (filename.indexOf('.md') !== -1) {
        markdown = req(filename).default;
      } else if (filename.indexOf('.jsx') !== -1) {
        const demoName = `${path}/${filename.replace(/\.\//g, '').replace(/\.jsx/g, '.js')}`;

        demos[demoName] = {
          name: demoName,
          jsx: req(filename).default,
          rawJS: reqSource(filename).default,
        };
      }
    });

    const sections = getSections(markdown);

    return (
      <div>
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
              throw new Error([
                `Missing demo: ${name}. You can use one of the following:`,
                Object.keys(demos),
              ].join('\n'));

              return (
                <div key={index}>
                  Missing demo `{name}`
                </div>
              );
            }

            return (
              <Demo
                key={index}
                demo={demos[name]}
                options={options}
              />
            );
          }

          return (
            <MarkdownElement
              key={index}
              text={section}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
};

export default MarkdownPage;
