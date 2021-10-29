import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import debounce from "../utils/debounce";
import withClasses from "../utils/withClasses";

import TableHeader from "./TableHeader";
import Table from "./Table";
import TableRow from "./TableRow";
import TableGeneratorRow from "./TableGeneratorRow";
import TableBody from "./TableBody";
import TableHeaderCell from "./TableHeaderCell";

class TableGenerator extends React.Component {
  static displayName = "TableGenerator";

  static propTypes = {
    /**
     * Classes to apply to the root element.
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The columns to render.
     */
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        cell: PropTypes.func.isRequired,
        cellProps: PropTypes.func,
        header: PropTypes.func.isRequired,
        headerProps: PropTypes.func,
        mobileFooter: PropTypes.bool,
        mobileHeader: PropTypes.bool
      })
    ),

    /**
     * The entities to render in the table rows.
     */
    data: PropTypes.array,

    /**
     * The react node to display if no data is provided.
     */
    empty: PropTypes.node,

    /**
     * Function to determine if row should be expanded or not
     */
    expandRow: PropTypes.func,

    /**
     * Node to render for an expanded row.
     */
    expandedNode: PropTypes.func,

    /**
     * Whether or not to highlight rows on highlight.
     */
    hover: PropTypes.bool,

    /**
     * A react node to display if data is loading. will display if provided.
     */
    loading: PropTypes.node,

    /**
     * Size to change table render from desktop to mobile.
     */
    mobileBreakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Properties to pass to a rendered row.
     */
    rowProps: PropTypes.object
  };

  static defaultProps = {
    columns: [],
    data: [],
    hover: true,
    mobileBreakpoint: "md"
  };

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };

    this.updateWindowDimensions = debounce(this.updateWindowDimensions);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  static contextType = ThemeContext;

  updateWindowDimensions = () => {
    const theme = this.context;
    const windowWidth = window.innerWidth;
    const breakpoint = theme.breakpoints[this.props.mobileBreakpoint];

    this.setState({
      isMobile: windowWidth <= breakpoint
    });
  };

  render() {
    const { isMobile } = this.state;
    const {
      classes,
      data,
      empty,
      loading,
      hover,
      columns,
      expandedNode,
      expandRow,
      rowProps
    } = this.props;

    const theme = this.context;

    const rowCount = data.length;

    return (
      <>
        <div className={clsx("container", classes)}>
          <Table>
            {!isMobile && (
              <TableHeader>
                <TableRow border>
                  {columns.map((col, i) => (
                    <TableHeaderCell
                      key={`header-column-${i}`}
                      {...col.headerProps?.(isMobile)}
                    >
                      {col?.header(isMobile)}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHeader>
            )}
            <TableBody>
              {data.map((row, i) => {
                const isLastRow = i === rowCount - 1;

                return (
                  <TableGeneratorRow
                    key={`row-${i}`}
                    columns={columns}
                    data={row}
                    expandedNode={expandedNode}
                    expandRow={expandRow}
                    hover={hover}
                    isLastRow={isLastRow}
                    mobile={isMobile}
                    rowProps={rowProps}
                    rowNum={i}
                  />
                );
              })}
            </TableBody>
          </Table>
          {loading}
          {!loading && data.length === 0 && empty}
        </div>
        <style jsx>{`
          .container {
            border: 1px solid ${theme.palette.grey[400]};
            border-radius: 4px;
            display: inline-block;
            min-width: 100%;
            overflow-x: auto;
          }
        `}</style>
      </>
    );
  }
}

export default withClasses(TableGenerator);
