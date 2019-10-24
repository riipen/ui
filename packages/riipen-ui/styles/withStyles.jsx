import PropTypes from 'prop-types';
import React from 'react';
import {createUseStyles} from 'react-jss'

import ThemeContext from './ThemeContext';
import defaultTheme from '../themes/default';

function withStyles(styles, options) {
  return (Component) => {
    const WithStyles = (props) => {
      const theme = React.useContext(ThemeContext);

      const themedStyles = createUseStyles(styles(theme))();

      return (
        <ThemeContext.Consumer>
          {(value) => {
            return <Component styles={themedStyles} {...props} />
          }}
        </ThemeContext.Consumer>
      );
    }

    return WithStyles;
  };
}

export default withStyles;
