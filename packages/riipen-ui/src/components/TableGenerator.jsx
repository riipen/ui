import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import debounce from "../utils/debounce";
import withClasses from "../utils/withClasses";

import TableHeader from "./TableHeader";
import Table from "./Table";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
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
      isMobile: false,
      hoverIdx: null
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

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      .container {
        border: 1px solid ${theme.palette.grey[400]};
        border-radius: 4px;
        display: inline-block;
        min-width: calc(100% - ${theme.spacing(2)}px);
        overflow-x: auto;
      }

      .noPadding {
        padding: 0;
      }

      .expandedRow {
        background-color: ${theme.palette.grey[100]};
      }
    `;
  };

  static contextType = ThemeContext;

  handleRowMouseEnter = idx => () => this.setState({ hoverIdx: idx });
  handleRowMouseLeave = () => this.setState({ hoverIdx: null });

  updateWindowDimensions = () => {
    const theme = this.context;
    const windowWidth = window.innerWidth;
    const breakpoint = theme.breakpoints[this.props.mobileBreakpoint];

    this.setState({
      isMobile: windowWidth <= breakpoint
    });
  };

  renderTableHeader() {
    const { isMobile } = this.state;
    const { columns } = this.props;

    return (
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
    );
  }

  renderDefault() {
    const {
      hover,
      data,
      columns,
      expandedNode,
      expandRow,
      rowProps
    } = this.props;
    const { isMobile, hoverIdx } = this.state;

    const linkedStyles = this.getLinkedStyles();

    const isExpandable = expandRow && expandedNode;
    const rowCount = data.length;

    return (
      <React.Fragment>
        {this.renderTableHeader()}
        <TableBody>
          {data.map((row, i) => {
            const isExpanded = isExpandable && expandRow(row);
            const isHovering = hover && hoverIdx === i;
            const isNotLastRow = i !== rowCount - 1;

            return (
              <React.Fragment key={`default-row-${i}`}>
                <TableRow
                  border={isNotLastRow || isExpanded}
                  forceHover={isHovering}
                  onMouseEnter={this.handleRowMouseEnter(i)}
                  onMouseLeave={this.handleRowMouseLeave}
                  {...rowProps}
                >
                  {columns.map((col, j) => (
                    <TableCell
                      classes={[linkedStyles.className]}
                      key={`default-cell-${i}-${j}`}
                      {...col.cellProps?.(row, i, isMobile)}
                    >
                      {col?.cell(row, i, isMobile)}
                    </TableCell>
                  ))}
                </TableRow>
                {isExpanded && (
                  <TableRow
                    border={isNotLastRow}
                    forceHover={isHovering}
                    onMouseEnter={this.handleRowMouseEnter(i)}
                    onMouseLeave={this.handleRowMouseLeave}
                  >
                    <TableCell
                      classes={[linkedStyles.className, "expandedRow"]}
                      padding={0}
                      colSpan={columns.length}
                    >
                      {expandedNode(row)}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </React.Fragment>
    );
  }

  renderMobile() {
    const {
      hover,
      columns,
      data,
      expandedNode,
      expandRow,
      rowProps
    } = this.props;
    const { isMobile, hoverIdx } = this.state;

    const linkedStyles = this.getLinkedStyles();

    const rowCount = data.length;

    const mobileHeader = columns.find(x => x.mobileHeader);
    const mobileFooter = columns.find(x => x.mobileFooter);
    const bodyColumns = columns.filter(x => !x.mobileFooter && !x.mobileHeader);

    const isExpandable = expandRow && expandedNode;

    return (
      <TableBody>
        {data.map((row, i) => {
          const isExpanded = isExpandable && expandRow(row);
          const isHovering = hover && hoverIdx === i;
          const isNotLastRow = i !== rowCount - 1;

          return (
            <React.Fragment key={`entity-${i}`}>
              <TableRow
                border={isNotLastRow}
                forceHover={isHovering}
                onMouseEnter={this.handleRowMouseEnter(i)}
                onMouseLeave={this.handleRowMouseLeave}
                {...rowProps}
              >
                <TableCell classes={[linkedStyles.className, "noPadding"]}>
                  {mobileHeader && (
                    <Table backgroundColor="transparent">
                      <TableBody>
                        <TableRow>
                          <TableCell classes={[linkedStyles.className]}>
                            {mobileHeader?.cell(row, i, isMobile)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}
                  <Table layout="fixed" backgroundColor="transparent">
                    <TableBody>
                      {bodyColumns.map((bodyColumn, j) => (
                        <TableRow border={false} key={`${i}-${j}`}>
                          <TableHeaderCell
                            align="left"
                            classes={[linkedStyles.className]}
                          >
                            {bodyColumn?.header(isMobile)}
                          </TableHeaderCell>
                          <TableCell classes={[linkedStyles.className]}>
                            {bodyColumn?.cell(row, i, isMobile)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {mobileFooter && (
                    <Table backgroundColor="transparent">
                      <TableBody>
                        <TableRow border={false}>
                          <TableCell classes={[linkedStyles.className]}>
                            {mobileFooter?.cell(row, i, isMobile)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}
                </TableCell>
              </TableRow>
              {isExpanded && (
                <TableRow
                  classes={[linkedStyles.className, "expandedRow"]}
                  border={isNotLastRow}
                  forceHover={isHovering}
                  onMouseEnter={this.handleRowMouseEnter(i)}
                  onMouseLeave={this.handleRowMouseLeave}
                >
                  <TableCell padding={0}>{expandedNode(row)}</TableCell>
                </TableRow>
              )}
            </React.Fragment>
          );
        })}
      </TableBody>
    );
  }

  render() {
    const { isMobile } = this.state;
    const { classes, data, empty, loading } = this.props;

    const linkedStyles = this.getLinkedStyles();

    return (
      <React.Fragment>
        <div className={clsx("container", linkedStyles.className, classes)}>
          <Table>{isMobile ? this.renderMobile() : this.renderDefault()}</Table>
          {loading}
          {!loading && data.length === 0 && empty}
        </div>
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default withClasses(TableGenerator);
