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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
