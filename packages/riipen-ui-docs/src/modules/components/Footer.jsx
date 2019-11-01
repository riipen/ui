import React from "react";

import {
  Grid,
  GridItem,
  Headline,
  Link,
  List,
  ListItem
} from "@riipen-ui/components";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Grid>
          <GridItem lg={4} sm={12}>
            <Headline variant="h3">Community</Headline>
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
            <Headline variant="h3">Resources</Headline>
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
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
