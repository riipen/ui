import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeContext from '../styles/ThemeContext';

class Headline extends React.Component {
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

    /**
     * The variant of the headline in abbreviated format (h1, h2, etc).
     */
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  };

  static defaultProps = {
    classes: [],
    variant: 'h1',
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      color,
      variant,
     } = this.props;

     const theme = this.context;

     const className = clsx(
      color,
      classes,
    );

     const element = variant;

    return (
      <React.Fragment>
        {React.createElement(element, { className }, children)}
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

export default Headline;
