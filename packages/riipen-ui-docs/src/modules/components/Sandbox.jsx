import PropTypes from "prop-types";
import React from "react";

import ErrorBoundary from "src/modules/components/ErrorBoundary";

class Sandbox extends React.Component {
  static propTypes = {
    component: PropTypes.elementType.isRequired
  };

  render() {
    const { component: Component } = this.props;

    return (
      <ErrorBoundary>
        <React.Fragment>
          <Component />
        </React.Fragment>
      </ErrorBoundary>
    );
  }
}

export default Sandbox;
