import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";

import withClasses from "../utils/withClasses";

import Table from "./Table";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";

const TableGeneratorRow = ({
  hover,
  data,
  columns,
  expandedNode,
  expandRow,
  isLastRow,
  mobile,
  rowNum,
  rowProps
}) => {
  const [hovering, setHovering] = useState(false);
  const theme = React.useContext(ThemeContext);

  const handleRowMouseEnter = hover ? () => setHovering(true) : undefined;
  const handleRowMouseLeave = hover ? () => setHovering(false) : undefined;

  const isExpandable = expandRow && expandedNode;
  const isExpanded = isExpandable && expandRow(data);

  const renderDefault = () =>
    columns.map((col, j) => (
      <TableCell
        key={`default-cell-${rowNum}-${j}`}
        {...col.cellProps?.(data, rowNum, mobile)}
      >
        {col?.cell(data, rowNum, mobile)}
      </TableCell>
    ));

  const renderMobile = () => {
    const mobileHeader = columns.find(x => x.mobileHeader);
    const mobileFooter = columns.find(x => x.mobileFooter);
    const bodyColumns = columns.filter(x => !x.mobileFooter && !x.mobileHeader);

    return (
      <TableCell padding={0}>
        {mobileHeader && (
          <Table backgroundColor="transparent">
            <TableBody>
              <TableRow>
                <TableCell>
                  {mobileHeader?.cell(data, rowNum, mobile)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        <Table layout="fixed" backgroundColor="transparent">
          <TableBody>
            {bodyColumns.map((bodyColumn, j) => (
              <TableRow border={false} key={`${rowNum}-${j}`}>
                <TableHeaderCell align="left">
                  {bodyColumn?.header(mobile)}
                </TableHeaderCell>
                <TableCell>{bodyColumn?.cell(data, rowNum, mobile)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {mobileFooter && (
          <Table backgroundColor="transparent">
            <TableBody>
              <TableRow border={false}>
                <TableCell>
                  {mobileFooter?.cell(data, rowNum, mobile)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </TableCell>
    );
  };

  return (
    <>
      <TableRow
        border={!isLastRow || isExpanded}
        forceHover={hovering}
        onMouseEnter={handleRowMouseEnter}
        onMouseLeave={handleRowMouseLeave}
        {...rowProps}
      >
        {!mobile && renderDefault()}
        {mobile && renderMobile()}
      </TableRow>
      {isExpanded && (
        <TableRow
          border={!isLastRow}
          forceHover={hovering}
          onMouseEnter={handleRowMouseEnter}
          onMouseLeave={handleRowMouseLeave}
        >
          <TableCell
            classes={["expanded"]}
            padding={0}
            colSpan={columns.length}
          >
            {expandedNode(data)}
          </TableCell>
        </TableRow>
      )}
      <style jsx>{`
        .expanded {
          background-color: ${theme.palette.grey[100]};
        }
      `}</style>
    </>
  );
};

TableGeneratorRow.displayName = "TableGeneratorRow";

TableGeneratorRow.propTypes = {
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
   * Row data to render.
   */
  data: PropTypes.object,

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
   * Is this the last row or not.
   */
  isLastRow: PropTypes.bool,

  /**
   * Render mobile view or not.
   */
  mobile: PropTypes.bool,

  /**
   * The number of this row
   */
  rowNum: PropTypes.number,

  /**
   * Properties to pass to a rendered row.
   */
  rowProps: PropTypes.object
};

TableGeneratorRow.defaultProps = {
  columns: [],
  data: {},
  hover: true,
  mobile: false,
  isLastRow: false
};

export default withClasses(TableGeneratorRow);
