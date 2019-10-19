import NextHead from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

class Head extends React.Component {
  static propTypes = {
    /**
     * The title of the page.
     */
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;

    return (
      <NextHead>
        <title>{title}</title>
      </NextHead>
    );
  }
};

export default Head;