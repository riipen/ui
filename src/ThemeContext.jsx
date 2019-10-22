import React from 'react';

import defaultTheme from './themes/default';

const ThemeContext = React.createContext(
  defaultTheme
);

export default ThemeContext;
