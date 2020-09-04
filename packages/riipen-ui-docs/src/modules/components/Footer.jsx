import React from "react";

import {
  Grid,
  GridItem,
  Link,
  List,
  ListItem,
  Typography
} from "riipen-ui/components";

import ThemeContext from "riipen-ui/styles/ThemeContext";

class Footer extends React.Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;

    return (
      <footer>
        <Grid>
          <GridItem lg={4} sm={12}>
            <Typography gutter variant="h3">
              Community
            </Typography>
            <List>
              <ListItem>
                <Link
                  color="inherit"
                  href="https://github.com/riipen/ui"
                  target="_blank"
                >
                  GitHub
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="inherit"
                  href="https://twitter.com/riipen"
                  target="_blank"
                >
                  Twitter
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="inherit"
                  href="https://riipen.com/careers"
                  target="_blank"
                >
                  Careers
                </Link>
              </ListItem>
            </List>
          </GridItem>
          <GridItem lg={4} sm={12}>
            <Typography gutter variant="h3">
              Resources
            </Typography>
            <List>
              <ListItem>
                <Link
                  color="inherit"
                  href="https://riipen.com/"
                  target="_blank"
                >
                  Riipen
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="inherit"
                  href="https://medium.com/riipen-engineering"
                  target="_blank"
                >
                  Blog
                </Link>
              </ListItem>
            </List>
          </GridItem>
        </Grid>
        <style jsx>{`
          footer {
            font-family: ${theme.typography.fontFamily};
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
