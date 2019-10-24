import React from 'react';

import defaultTheme from '../themes/default';

const ThemeContext = React.createContext(defaultTheme);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
