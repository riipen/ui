import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    ctx.renderPage(App => props => <App {...props} />);

    const styles = flush();

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, styles };
  }

  render() {
    const { styles } = this.props;

    return (
      <html lang="en">
        <Head>
          {styles}
          <style id="prismjs" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
