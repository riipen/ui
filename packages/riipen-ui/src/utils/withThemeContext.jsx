import React from "react";

import ThemeContext from "../styles/ThemeContext";

const withThemeContext = Component => {
  return props => (
    <ThemeContext.Consumer>
      {context => <Component {...props} theme={context} />}
    </ThemeContext.Consumer>
  );
};

export default withThemeContext;
