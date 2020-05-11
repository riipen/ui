import React from "react";

import Link from "src/modules/components/Link";
import pages from "src/pages";

import ThemeContext from "@riipen-ui/styles/ThemeContext";

class Menu extends React.Component {
  getLinks = (parent, links) => {
    const returnLinks = links || [];

    const theme = this.context;

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
        <React.Fragment>
          {listItem}
          <ul>{this.getLinks(child, returnLinks)}</ul>
        </React.Fragment>
      );
    });
  };

  static contextType = ThemeContext;

  render() {
    const theme = this.context;

    return (
      <div>
        <ul>
          {pages.map((parent, i) => (
            <li key={i}>
              {parent.name}
              <ul>{this.getLinks(parent)}</ul>
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
            padding-left: 10px;
          }
          li {
            padding: ${theme.spacing(1)}px;
          }
        `}</style>
      </div>
    );
  }
}

export default Menu;
