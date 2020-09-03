import PropTypes from "prop-types";
import React from "react";

import { Link as RiipenLink } from "riipen-ui/components";

class Link extends React.Component {
  static propTypes = {
    /**
     * The content of the link.
     */
    children: PropTypes.any
  };

  render() {
    const { children, ...other } = this.props;

    const href = `${process.env.URL_PREFIX}${other.href}`;

    return (
      <RiipenLink href={href} {...other}>
        {children}
      </RiipenLink>
    );
  }
}

export default Link;
