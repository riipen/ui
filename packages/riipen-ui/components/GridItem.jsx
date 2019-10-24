import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import React from 'react';

const styles = (theme) => ({
  root: {
    display: 'inline-block';
    paddingLeft: '20px';
    verticalAlign: 'top';
  },
});

class GridItem extends React.Component {
  static propTypes = {
    /**
     * The content of the grid item.
     */
    children: PropTypes.any,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The fractional width to use at the desktop resolution.
     */
    desktop: PropTypes.string,

    /**
     * The fractional width to use at the mobile resolution.
     */
    mobile: PropTypes.string,

    /**
     * The fractional width to use at the tablet resolution.
     */
    tablet: PropTypes.string,
  };

  static defaultProps = {
    classes: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      onWindowResize: throttle(this.handleWindowResize, 500),
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.state.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.state.onWindowResize);
  }

  setItemRef = (ref) => {
    this.item = ref;
  };

  handleWindowResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    // The width of the browser window
    const windowWidth = window.innerWidth;

    const style = {};

    // Calculate which resolution we should render the item at
    let width;

    // Default to desktop resolution
    if (this.props.desktop === 'hidden') {
      style.display = 'none';
    } else {
      width = this.props.desktop;
    }

    if (windowWidth <= RESOLUTIONS_TABLET && this.props.tablet) {
      if (this.props.tablet === 'hidden') {
        style.display = 'none';
      } else {
        width = this.props.tablet;
      }
    }

    if (windowWidth <= RESOLUTIONS_MOBILE && this.props.mobile) {
      if (this.props.mobile === 'hidden') {
        style.display = 'none';
      } else {
        width = this.props.mobile;
      }
    }

    if (width) {
      // Convert the string fraction into a numeric percentage
      const columns = width.split('/');
      const percent = (columns[0] / columns[1]) * 100;

      style.width = `${percent}%`;
    }

    const classNames = this.props.classes.join(' ');

    return (
      <div ref={this.setItemRef} style={style} className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default GridItem;
