import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeContext from '../styles/ThemeContext';

class Text extends React.Component {
  static propTypes = {
    /**
     * The content of the headline.
     */
    children: PropTypes.any,

    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array.isRequired,

    /**
     * The color to use.
     */
    color: PropTypes.oneOf([
      'negative',
      'positive',
      'primary',
      'secondary',
      'tertiary',
    ]),
  };

  static defaultProps = {
    classes: [],
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      color,
     } = this.props;

     const theme = this.context;

     const className = clsx(
      color,
      classes,
    );


    return (
      <React.Fragment>
        <span className={className}>
          {children}
        </span>
        <style jsx>{`
          .primary {
            color: ${theme.palette.primary.main};
          }

          .secondary {
            color: ${theme.palette.secondary.main};
          }

          .tertiary {
            color: ${theme.palette.tertiary.main};
          }

          .positive {
            color: ${theme.palette.positive.main};
          }

          .negative {
            color: ${theme.palette.negative.main};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Text;
