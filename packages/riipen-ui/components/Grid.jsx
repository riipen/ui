import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import withStyles from '../styles/withStyles';
import flexbox from '../styles/flexbox';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    marginLeft: '-20px',
    minHeight: 0,
    position: 'relative',
  },
});

class Grid extends React.Component {
  static propTypes = {
    /**
     * The content of the grid.
     */
    children: PropTypes.any,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * A themed styles object to apply to the component.
     */
    styles: PropTypes.object.isRequired,
  };

  static defaultProps = {
    classes: [],
  };

  render() {
    const {
      children,
      classes,
      styles: styleProp,
    } = this.props;

    const className = clsx(
      styleProp.root,
      classes,
    );

    return <div className={className}>{children}</div>;
  }
}

export default withStyles(style)(Grid);
