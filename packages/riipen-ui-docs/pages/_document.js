import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage((App) => (props) =>
      <App {...props} />
    );

    const styles = flush();

    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, styles };
  }

  render() {
    const { styles } = this.props;

    return (
      <html>
        <Head>
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

