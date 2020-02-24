import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";

import ThemeContext from "../styles/ThemeContext";

import debounce from "../utils/debounce";

import TableHeader from "./TableHeader";
import Table from "./Table";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";

class TableGenerator extends React.Component {
  static propTypes = {
    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The columns to render
     */
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        align: PropTypes.oneOfType(["left", "center", "right"]),
        cell: PropTypes.func.isRequired,
        header: PropTypes.func.isRequired,
        mobileFooter: PropTypes.bool,
        mobileHeader: PropTypes.bool
      })
    ),

    /**
     * The entities to render in the table rows
     */
    data: PropTypes.array,

    /**
     * Whether or not to highlight rows on highlight
     */
    hover: PropTypes.bool,

    /**
     * Size to change table render from desktop to mobile
     */
    mobileBreakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"])
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

  getLinkedStyles = () => {
    const theme = this.context;

    return css.resolve`
      .container {
        border: 1px solid ${theme.palette.grey[400]};
        border-radius: 4px;
        display: inline-block;
        width: 100%;
      }

      .centeredTable {
        margin: auto;
        min-width: 50%;
        width: auto;
      }

      .noPadding {
        padding: 0;
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
    const { hover, data, columns } = this.props;
    const { isMobile } = this.state;

    const linkedStyles = this.getLinkedStyles();

    return (
      <React.Fragment>
        {this.renderTableHeader()}
        <TableBody>
          {data.map((row, i) => {
            return (
              <TableRow hover={hover} key={`default-row-${i}`}>
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
            );
          })}
        </TableBody>
      </React.Fragment>
    );
  }

  renderMobile() {
    const { hover, columns, data } = this.props;
    const { isMobile } = this.state;

    const linkedStyles = this.getLinkedStyles();

    const bodyColumns = Object.assign([], columns);
    let mobileHeader;
    let mobileFooter;

    const mobileHeaderIndex = bodyColumns.findIndex(x => x.mobileHeader);
    if (mobileHeaderIndex !== -1) {
      mobileHeader = bodyColumns.splice(mobileHeaderIndex, 1)[0];
    }

    const mobileFooterIndex = bodyColumns.findIndex(x => x.mobileFooter);
    if (mobileFooterIndex !== -1) {
      mobileFooter = bodyColumns.splice(mobileFooterIndex, 1)[0];
    }

    const rowCount = data.length;

    return (
      <React.Fragment>
        <TableBody>
          {data.map((row, i) => {
            return (
              <TableRow
                hover={hover}
                border={i !== rowCount - 1}
                key={`entity-${i}`}
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
            );
          })}
        </TableBody>
      </React.Fragment>
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

export default TableGenerator;
