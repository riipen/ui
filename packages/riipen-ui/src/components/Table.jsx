import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import TableColumn from "./TableColumn";
import TableHeader from "./TableHeader";
import TableContainer from "./TableContainer";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableCellHeader from "./TableCellHeader";

class Table extends React.Component {
  static propTypes = {
    /**
     * Displays the label instead of the header
     */
    allowSearch: PropTypes.bool,

    /**
     * The children columns to render
     * Must be of type TableColumn
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.oneOf([TableColumn]) })
      ),
      PropTypes.shape({ type: PropTypes.oneOf([TableColumn]) })
    ]),

    /**
     * Classes to apply to the root element
     */
    classes: PropTypes.arrayOf(PropTypes.string),

    /**
     * The entities to render in the table
     */
    entities: PropTypes.array,

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
    entities: [],
    mobileBreakpoint: "md",
    hover: true,
    allowSearch: true
  };

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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

  renderTableHeader(tableContent) {
    const { allowSearch } = this.props;
    return (
      <TableHeader>
        <TableRow border>
          {Object.keys(tableContent).map(key => (
            <TableCell>
              {(allowSearch && tableContent[key]?.header()) ||
                tableContent[key]?.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
    );
  }

  renderDefault(tableContent, entities) {
    const { hover } = this.props;
    return (
      <React.Fragment>
        {this.renderTableHeader(tableContent)}
        <TableBody>
          {entities.map((entity, i) => {
            return (
              <TableRow hover={hover} key={`${i}`}>
                {Object.keys(tableContent).map(key => (
                  <TableCell>{tableContent[key]?.cell(entity)}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </React.Fragment>
    );
  }

  renderMobile(tableContent, entities) {
    const { hover } = this.props;

    const primary = Object.entries(tableContent).find(
      ([, values]) => values.primary
    );

    let bodyContent = {};
    let primaryContent;
    let primaryKey;

    if (primary) {
      [primaryKey, primaryContent] = primary;
      bodyContent = Object.keys(tableContent).reduce((object, key) => {
        if (key !== primaryKey) {
          object[key] = tableContent[key];
        }
        return object;
      }, {});
    }

    const entityCount = entities.length;

    return (
      <React.Fragment>
        <TableBody>
          {entities.map((entity, i) => {
            return (
              <TableRow
                hover={hover}
                border={i !== entityCount - 1}
                key={`entity-${i}`}
              >
                <TableCell spacing={0}>
                  {primaryContent && (
                    <TableContainer background={false}>
                      <TableBody>
                        <TableRow>
                          <TableCell span={2}>
                            {primaryContent?.cell(entity)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </TableContainer>
                  )}
                  <TableContainer centered fixed background={false}>
                    <TableBody>
                      {Object.keys(bodyContent).map((key, j) => (
                        <TableRow border={false} key={`${i}-${j}`}>
                          <TableCellHeader>
                            {tableContent[key]?.label ||
                              tableContent[key]?.header(entity)}
                          </TableCellHeader>
                          <TableCell>
                            {tableContent[key]?.cell(entity)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </TableContainer>
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
    const { entities, children, classes } = this.props;

    const theme = this.context;

    let nodes = children;
    if (!children.length) {
      nodes = [children];
    }

    const tableContent = nodes.reduce(
      (acc, child) =>
        Object.assign(acc, {
          [child.key]: {
            label: child.props.label,
            primary: child.props.primary,
            header: child.props.header,
            cell: child.props.cell
          }
        }),
      {}
    );

    return (
      <React.Fragment>
        <div className={clsx("container", classes)}>
          <TableContainer>
            {isMobile
              ? this.renderMobile(tableContent, entities)
              : this.renderDefault(tableContent, entities)}
          </TableContainer>
        </div>
        <style jsx>{`
          .container {
            border: 1px solid ${theme.palette.grey[400]};
            border-radius: 4px;
            display: inline-block;
            width: 100%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Table;
