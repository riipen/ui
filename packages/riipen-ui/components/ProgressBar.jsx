import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import withStyles from '../styles/withStyles';

export const styles = (theme) => ({
  root: {
    background: theme.palette.background.default,
    border: 'none',
    borderRadius: theme.shape.borderRadius.large,
    height: '8px',
    margin: 0,
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    width: '100%'
    ,
    '&::-webkit-progress-bar': {
      background: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius.large,
    },

    '&::-webkit-progress-value': {
      borderRadius: theme.shape.borderRadius.large,
    },

    '&[value]::moz-progress-bar': {
      borderRadius: theme.shape.borderRadius.large,
    },
  },

  // Variants

  primary: {
    '&::-webkit-progress-value': {
      background: theme.palette.primary.main,
    },

    '&[value]::-moz-progress-bar': {
      background: theme.palette.primary.main,
    },

  }
});

class ProgressBar extends React.Component {
  static propTypes = {
    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array.isRequired,

    /**
     * The percentage of the progress between 0 and 1.
     */
    progress: PropTypes.number,

    /**
     * A themed styles object to apply to the component.
     */
    styles: PropTypes.object.isRequired,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf([
      'disabled',
      'negative',
      'positive',
      'primary',
      'secondary',
      'tertiary',
    ]),
  };

  static defaultProps = {
    classes: [],
    progress: 0,
    variant: 'primary',
  };

  render() {
    const {
      classes,
      completion,
      styles,
      variant,
     } = this.props;

     console.log(styles);

     const className = clsx(
      styles.root,
      styles[variant],
      classes,
    );

    return (
      <progress className={className} value={completion} />
    );
  }
}

export default withStyles(styles)(ProgressBar);
