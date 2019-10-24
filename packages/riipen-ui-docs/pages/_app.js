import App from 'next/app'
import React from 'react'
import {ThemeProvider} from 'react-jss'

import ThemeContext from '@riipen-ui/styles/ThemeContext';
import defaultTheme from '@riipen-ui/themes/default';

function AppWrapper(props) {
  const { children } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    // const element = document.getElementById('jss-server-side')

    // if (element) {
    //   element.remove();
    // }
  }, []);

  return children;
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper>
        <ThemeContext.Provider value={defaultTheme}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </AppWrapper>
    );
  }
}

export default MyApp;
