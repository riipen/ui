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
import Spinner from "./Spinner";

class TableGenerator extends React.Component {
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
        align: PropTypes.oneOf(["left", "center", "right"]),
        cell: PropTypes.func.isRequired,
        header: PropTypes.func.isRequired,
        mobileFooter: PropTypes.bool,
        mobileHeader: PropTypes.bool
      })
    ),

    /**
     * The entities to render in the table rows.
     */
    data: PropTypes.array,

    /**
     * Whether or not to highlight rows on highlight.
     */
    hover: PropTypes.bool,

    /**
     * Whether or not the table data is loading.
     */
    loading: PropTypes.bool,

    /**
     * Node to display when loading
     * Defaults to Spinner
     */
    loadingNode: PropTypes.node,

    /**
     * The react node to display if no data is provided.
     */
    emptyNode: PropTypes.node,

    /**
     * Node to render for an expanded row.
     */
    expandedNode: PropTypes.func,

    /**
     * Function to determine if row should be expanded or not
     */
    expandRow: PropTypes.func,

    /**
     * Size to change table render from desktop to mobile.
     */
    mobileBreakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Funtion to call if a row is clicked in the generated table.
     */
    onRowClick: PropTypes.func
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
        margin: 0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px;
        min-width: calc(100% - ${theme.spacing(2)}px);
        overflow-x: auto;
      }

      .centeredTable {
        margin: auto;
        min-width: 50%;
        width: auto;
      }

      .noPadding {
        padding: 0;
      }

      .expandedRow {
        background-color: ${theme.palette.grey[100]};
      }

      td,
      th {
        max-width: 400px;
        vertical-align: middle;
      }
    `;
  };

  getCellAlignment(cell) {
    return cell?.align || "left";
  }

  static contextType = ThemeContext;

  handleRowMouseEnter = idx => () => this.setState({ hoverIdx: idx });
  handleRowMouseLeave = () => this.setState({ hoverIdx: null });

  handleRowClick = entity => () => {
    const { onRowClick } = this.props;
    if (!onRowClick) return;
    onRowClick(entity);
  };

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

    const linkedStyles = this.getLinkedStyles();

    return (
      <TableHeader>
        <TableRow border>
          {columns.map((col, i) => (
            <TableHeaderCell
              classes={[linkedStyles.className]}
              key={`header-column-${i}`}
              align={this.getCellAlignment(col)}
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
      loading,
      expandedNode,
      expandRow
    } = this.props;
    const { isMobile, hoverIdx } = this.state;

    const linkedStyles = this.getLinkedStyles();

    if (loading) {
      return this.renderLoading();
    }

    if (data.length === 0) {
      return this.renderEmpty();
    }

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
                  onClick={this.handleRowClick(row)}
                >
                  {columns.map((col, j) => (
                    <TableCell
                      classes={[linkedStyles.className]}
                      key={`default-cell-${i}-${j}`}
                      align={this.getCellAlignment(col)}
                    >
                      {col?.cell(row, isMobile)}
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

  renderEmpty() {
    const { emptyNode, columns } = this.props;
    return (
      <React.Fragment>
        {this.renderTableHeader()}
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} align="center">
              {emptyNode || "There doesn't appear to be anything here"}
            </TableCell>
          </TableRow>
        </TableBody>
      </React.Fragment>
    );
  }

  renderLoading() {
    const { columns, loadingNode } = this.props;
    return (
      <React.Fragment>
        {this.renderTableHeader()}
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} align="center">
              {loadingNode || <Spinner loading color="secondary" />}
            </TableCell>
          </TableRow>
        </TableBody>
      </React.Fragment>
    );
  }

  renderMobile() {
    const {
      hover,
      columns,
      data,
      loading,
      expandedNode,
      expandRow
    } = this.props;
    const { isMobile, hoverIdx } = this.state;

    const linkedStyles = this.getLinkedStyles();

    const rowCount = data.length;

    if (loading) {
      return this.renderLoading();
    }

    if (rowCount === 0) {
      return this.renderEmpty();
    }

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
                onClick={this.handleRowClick(row)}
                onMouseEnter={this.handleRowMouseEnter(i)}
                onMouseLeave={this.handleRowMouseLeave}
              >
                <TableCell classes={[linkedStyles.className, "noPadding"]}>
                  {mobileHeader && (
                    <Table backgroundColor="transparent">
                      <TableBody>
                        <TableRow>
                          <TableCell classes={[linkedStyles.className]}>
                            {mobileHeader?.cell(row, isMobile)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}
                  <Table
                    classes={[clsx(linkedStyles.className, "centeredTable")]}
                    layout="fixed"
                    backgroundColor="transparent"
                  >
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
                            {bodyColumn?.cell(row, isMobile)}
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
                            {mobileFooter?.cell(row, isMobile)}
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
    const { classes } = this.props;

    const linkedStyles = this.getLinkedStyles();

    return (
      <React.Fragment>
        <div className={clsx("container", linkedStyles.className, classes)}>
          <Table>{isMobile ? this.renderMobile() : this.renderDefault()}</Table>
        </div>
        {linkedStyles.styles}
      </React.Fragment>
    );
  }
}

export default withClasses(TableGenerator);
