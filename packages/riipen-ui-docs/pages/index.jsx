import NextLink from "next/link";
import React from "react";

import { AppBar, Grid, GridItem, Headline, Link, Text } from "@riipen-ui/components";

import MarkdownElement from "src/modules/components/MarkdownElement";

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar>
          <Link href="/">
            Riipen-UI
          </Link>
        </AppBar>
        <div className="hero">
          <img
            src="/static/images/riipen-255.png"
            alt="Riipen Logo"
            className="logo"
          />
          <div>
            <Headline variant="h1" color="primary">
              Riipen-UI
            </Headline>
            <Headline variant="h2" color="primary">
              React components for easier web development. Build your
              applications to spec with Riipen-UI.
            </Headline>
          </div>
        </div>
        <Grid spacing={4}>
          <GridItem lg={6} sm={12}>
            <div className="how-to">
              <Headline variant="h1" color="primary">
                Installation
              </Headline>
              <Text>
                Install Riipen-UI's source files via npm. We take care of
                injecting the CSS needed.
              </Text>
              <MarkdownElement
                text={`
\`\`\`sh
$ npm install @riipen-ui
\`\`\`
                `}
              />
              <Text>Load the default Roboto font.</Text>
              <MarkdownElement
                text={`
\`\`\`html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
\`\`\`
                `}
              />
              <NextLink href="/getting-started/installation">
                Installation Docs
              </NextLink>
            </div>
          </GridItem>
          <GridItem lg={6} sm={12}>
            <div className="how-to">
              <Headline variant="h1" color="primary">
                Usage
              </Headline>
              <Text>
                Riipen-UI components work without any additional setup, and
                don't pollute the global scope.
              </Text>
              <MarkdownElement
                text={`
\`\`\`jsx
import React from 'react';

import Button from '@riipen-ui/Button';

const App = () => (
  <Button color="primary">
    Hello World
  </Button>
);
\`\`\`
                `}
              />
              <NextLink href="/getting-started/usage">Usage Docs</NextLink>
            </div>
          </GridItem>
        </Grid>
        <style jsx>{`
          .hero {
            margin-top: 72px;
          }
          .how-to {
            background-color: #f5f5f5;
            border-radius: 4px;
            padding: 20px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Index;
