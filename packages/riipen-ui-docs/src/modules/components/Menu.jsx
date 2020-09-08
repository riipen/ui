import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Accordion from "riipen-ui/components/Accordion";
import AccordionDetails from "riipen-ui/components/AccordionDetails";
import AccordionSummary from "riipen-ui/components/AccordionSummary";
import ThemeContext from "riipen-ui/styles/ThemeContext";

import Link from "src/modules/components/Link";
import pages from "src/pages";

const Menu = () => {
  const theme = React.useContext(ThemeContext);

  const getLinks = (parent, links) => {
    const returnLinks = links || [];

    return parent.children.map((child, j) => {
      const listItem = (
        <li key={`${child.name}-${j}`}>
          {!child.pathname ? (
            <label>{child.name}</label>
          ) : (
            <Link href={child.pathname}>{child.name}</Link>
          )}

          <style jsx>{`
            li {
              padding: ${theme.spacing(1)}px;
            }
          `}</style>
        </li>
      );

      if (!child.children) return listItem;

      return (
        <React.Fragment key={`${parent.name}-list-${j}`}>
          {listItem}
          <ul>{getLinks(child, returnLinks)}</ul>
        </React.Fragment>
      );
    });
  };

  const Icon = <FontAwesomeIcon icon={faChevronDown} />;

  return (
    <div>
      <ul>
        {pages.map((parent, i) => (
          <li key={i}>
            <Accordion {...parent.props}>
              <AccordionSummary icon={Icon} iconProps={{ size: "small" }}>
                {parent.name}
              </AccordionSummary>
              <AccordionDetails>
                <ul>{getLinks(parent)}</ul>
              </AccordionDetails>
            </Accordion>
          </li>
        ))}
      </ul>
      <style jsx>{`
        div {
          font-family: ${theme.typography.fontFamily};
          width: 250px;
        }
        ul {
          font-weight: ${theme.typography.fontWeight.bold};
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        ul ul {
          font-weight: ${theme.typography.fontWeight.regular};
          list-style-type: none;
          margin: 0;
          padding-left: ${theme.spacing(2)}px;
        }
        li {
          padding: ${theme.spacing(1)}px;
        }
      `}</style>
    </div>
  );
};

export default Menu;
