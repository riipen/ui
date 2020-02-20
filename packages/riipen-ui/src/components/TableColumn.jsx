import PropTypes from "prop-types";
import React from "react";

class TableColumn extends React.Component {
  static propTypes = {
    /**
     * A callback function that returns
     * the header cell to render for the column
     * when called with the entity
     */
    cell: PropTypes.func,

    /**
     * A callback function that returns
     * the header cell to render for the column
     */
    header: PropTypes.func,

    /**
     * The label to display when not rendering the header
     */
    label: PropTypes.string
  };

  static defaultProps = {
    cell: () => {},
    header: () => {}
  };
}

export default TableColumn;
