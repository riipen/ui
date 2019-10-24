import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {JssProvider, SheetsRegistry} from 'react-jss'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new SheetsRegistry();

    const page = ctx.renderPage((App) => (props) =>
      <JssProvider registry={sheets}>
        <App {...props} />
      </JssProvider>
    );

    console.log('server page', page);

    const styles = sheets.toString();

    console.log('server styles', styles);

    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, styles };
  }

  render() {
    const { styles } = this.props;

    return (
      <html>
        <Head>
          <style type="text/css" id="jss-server-side">
            {styles.toString()}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

