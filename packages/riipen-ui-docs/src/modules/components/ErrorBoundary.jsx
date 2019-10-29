import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <div>
          This demo had a runtime error!
          <pre>{error.toString()}</pre>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
