import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import TableCell from "./TableCell";
import Table from "./Table";
import TableBody from "./TableBody";
import TableRow from "./TableRow";

describe("<TableCell>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      );
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new TableCell().type.defaultProps;

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(wrapper.find("TableCell").props().colSpan).toEqual(
        defaultProps.colSpan
      );
      expect(wrapper.find("TableCell").props().padding).toEqual(
        defaultProps.padding
      );
      expect(wrapper.find("TableCell").props().rowSpan).toEqual(
        defaultProps.rowSpan
      );
      expect(wrapper.find("TableCell").props().textAlign).toEqual(
        defaultProps.textAlign
      );
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{child}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell classes={classes} />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(
        wrapper
          .find("TableCell")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-tablecell"];

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(
        wrapper
          .find("TableCell")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("colSpan prop", () => {
    it("sets custom colSpan", () => {
      const colSpan = 2;

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={colSpan} />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(
        wrapper
          .find("TableCell")
          .find("td")
          .props().colSpan
      ).toEqual(colSpan);
    });
  });

  describe("padding prop", () => {
    it("sets custom padding", () => {
      const padding = 2;

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell padding={padding} />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(
        wrapper
          .find("TableCell")
          .childAt(0)
          .props().style.padding
      ).toEqual(`${defaultTheme.spacing(padding)}px`);
    });
  });

  describe("rowSpan prop", () => {
    it("sets custom rowSpan", () => {
      const rowSpan = 2;

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={rowSpan} />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(
        wrapper
          .find("TableCell")
          .find("td")
          .props().rowSpan
      ).toEqual(rowSpan);
    });
  });

  describe("textAlign prop", () => {
    it("sets custom valid textAlign", () => {
      const textAlign = "center";

      const wrapper = mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell textAlign={textAlign} />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(
        wrapper
          .find("TableCell")
          .childAt(0)
          .props().style.textAlign
      ).toEqual(textAlign);
    });

    it("gives an error when given an invalid textAlign", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const textAlign = "centered";

      mount(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell textAlign={textAlign} />
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
