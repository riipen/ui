import PropTypes from 'prop-types';
import React from 'react';

import ThemeContext from '../ThemeContext';
import defaultTheme from '../themes/default';

function withStyles(styles, options) {
  return (Component) => {
    class WithStyles extends React.Component {
      render() {
        const theme = React.useContext(ThemeContext) || defaultTheme;

        const themedStyles = styles(theme);

        return <Component styles={themedStyles} {...this.props} />;
      }
    }

    return WithStyles;
  };
}

export default withStyles;
