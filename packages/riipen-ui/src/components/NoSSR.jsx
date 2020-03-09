import PropTypes from "prop-types";
import React from "react";

class NoSSR extends React.Component {
  static propTypes = {
    /**
     * The children not to render server side.
     */
    children: PropTypes.node,

    /**
     * The fallback content to display.
     */
    fallback: PropTypes.node
  };

  static defaultProps = {
    fallback: null
  };

  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true
    });
  }

  render() {
    const { children, fallback } = this.props;
    const { mounted } = this.state;

    // We need the Fragment here to force react-docgen to recognise NoSSR as a component.
    return <React.Fragment>{mounted ? children : fallback}</React.Fragment>;
  }
}

export default NoSSR;
