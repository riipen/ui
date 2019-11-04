import React from "react";

import Link from "src/modules/components/Link";
import pages from "src/pages";

import ThemeContext from "@riipen-ui/styles/ThemeContext";

class Menu extends React.Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;

    return (
      <div>
        <ul>
          {pages.map((parent, i) => (
            <li key={i}>
              {parent.name}
              <ul>
                {parent.children.map((child, j) => (
                  <li key={j}>
                    <Link href={child.pathname}>{child.name}</Link>
                  </li>
                ))}
              </ul>
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
