import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import AppBar from "riipen-ui/components/AppBar";
import ButtonIcon from "riipen-ui/components/ButtonIcon";
import Divider from "riipen-ui/components/Divider";
import Popover from "riipen-ui/components/Popover";
import ThemeContext from "riipen-ui/styles/ThemeContext";

import constants from "src/constants";
import Demo from "src/modules/components/Demo";
import Footer from "src/modules/components/Footer";
import Link from "src/modules/components/Link";
import MarkdownElement from "src/modules/components/MarkdownElement";
import Menu from "src/modules/components/Menu";
import TOC from "src/modules/components/TOC";
import { getSections } from "src/utils/parseMarkdown";

const MarkdownPage = ({ req, path, reqSource, title }) => {
  const theme = React.useContext(ThemeContext);

  const [anchorState, setAnchorState] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorState(menuOpen ? null : event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const demos = {};
  let markdown;

  req.keys().forEach((filename) => {
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
      <Head>
        <title>{title ? `${title} | ` : ""}Riipen UI</title>
      </Head>
      <AppBar>
        <Link href="/" color="inherit">
          Riipen-UI
        </Link>
        <div className="menuMobile">
          <React.Fragment>
            <ButtonIcon color="white" onClick={handleMenuOpen}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </ButtonIcon>
            <Popover
              anchorEl={anchorState}
              anchorPosition={{
                vertical: "bottom",
                horizontal: "center"
              }}
              closeOnScrolled={false}
              fullWidth
              isOpen={menuOpen}
              lockScroll
            >
              <Menu />
            </Popover>
          </React.Fragment>
        </div>
      </AppBar>
      <div className="page">
        <div className="menu">
          <Menu />
        </div>
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

              return <Demo key={index} demo={demos[name]} options={options} />;
            }

            return <MarkdownElement key={index} text={section} />;
          })}
          <div className="footer">
            <Divider />
            <Footer />
          </div>
        </div>
        <div className="toc">
          <TOC sections={sections} />
        </div>
      </div>
      <style jsx>{`
        .page {
          display: flex;
          justify-content: space-between;
          padding-top: 22px;
          position: relative;
          top: 50px;
          width: 100%;
        }
        .page :global(*:target) {
          padding-top: 50px;
        }
        .content {
          padding: 0 20px;
          overflow-x: auto;
          width: 100%;
        }
        .menu {
          padding: ${theme.spacing(2)}px;
        }
        .menuMobile {
          display: none;
        }
        .menuMobile :global(.popover) {
          overflow-y: auto;
        }
        .toc {
          top: 70px;
          position: sticky;
          max-width: 250px;
          min-width: 175px;
        }
        @media (max-width: ${theme.breakpoints.md}px) {
          .menu,
          .toc {
            display: none;
          }

          .menuMobile {
            display: initial;
            margin-left: auto;
          }
        }
        .footer {
          margin: ${theme.spacing(10)}px 0;
        }
        .footer :global(footer) {
          margin-top: ${theme.spacing(10)}px;
        }
      `}</style>
    </div>
  );
};

MarkdownPage.propTypes = {
  path: PropTypes.string.isRequired,
  req: PropTypes.func.isRequired,
  reqSource: PropTypes.func,
  title: PropTypes.string
};

export default MarkdownPage;
