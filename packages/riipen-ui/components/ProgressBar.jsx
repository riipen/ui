import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeContext from '../styles/ThemeContext';

class ProgressBar extends React.Component {
  static propTypes = {
    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array.isRequired,

    /**
     * The color to use.
     */
    color: PropTypes.oneOf([
      'disabled',
      'negative',
      'positive',
      'primary',
      'secondary',
      'tertiary',
    ]),

    /**
     * The percentage of the progress between 0 and 1.
     */
    progress: PropTypes.number,
  };

  static defaultProps = {
    classes: [],
    color: 'primary',
    progress: 0,
  };

  static contextType = ThemeContext;

  render() {
    const {
      classes,
      color,
      completion,
     } = this.props;

     const theme = this.context;

     const className = clsx(
      color,
    );

    return (
      <div>
        <progress value={completion} />
        <style jsx>{`
          progress {
            -moz-appearance: none;
            -webkit-appearance: none;
            background: ${theme.palette.background.default};
            border: none;
            border-radius: ${theme.shape.borderRadius.large};
            height: 8px;
            margin: 0;
            width: 100%;
          }

          progress::-webkit-progress-bar {
            background: ${theme.palette.background.default};
            border-radius: ${theme.shape.borderRadius.large};
          }

          progress::-webkit-progress-value {
            border-radius: ${theme.shape.borderRadius.large};
          }

          progress::-moz-progress-bar {
            border-radius: ${theme.shape.borderRadius.large};
          }

          .primary::-webkit-progress-value {
            background: ${theme.palette.primary.main};
          }

          .primary::-moz-progress-bar {
            background: ${theme.palette.primary.main};
          }
        `}</style>
      </div>
    );
  }
}

export default ProgressBar;
