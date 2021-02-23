import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import TableRow from "./TableRow";
import Table from "./Table";
import TableHeader from "./TableHeader";

describe("<TableRow>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Table>
          <TableHeader>
            <TableRow />
          </TableHeader>
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
        <TableHeader>
          <TableRow />
        </TableHeader>
      </Table>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new TableRow().type.defaultProps;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow />
          </TableHeader>
        </Table>
      );

      expect(wrapper.find("TableRow").props().border).toEqual(
        defaultProps.border
      );
      expect(wrapper.find("TableRow").props().forceHover).toEqual(
        defaultProps.forceHover
      );
    });
  });

  describe("border prop", () => {
    it("sets border with custom color when border is true", () => {
      const border = true;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow border={border} />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .find("JSXStyle")
          .props().dynamic
      ).toContain(defaultTheme.palette.divider);
    });

    it("does not set border when border is false", () => {
      const border = false;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow border={border} />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .find("JSXStyle")
          .props().dynamic
      ).not.toContain(defaultTheme.palette.divider);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <td>Test</td>;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow>{child}</TableRow>
          </TableHeader>
        </Table>
      );

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the tbody node", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow classes={classes} />
          </TableHeader>
        </Table>
      );

      expect(wrapper.find("TableRow").props().classes).toContain(classes[0]);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-tablerow"];

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("forceHover prop", () => {
    it("sets correct class name when forceHover is true", () => {
      const forceHover = true;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow forceHover={forceHover} />
          </TableHeader>
        </Table>
      );

      expect(wrapper.find("tr").hasClass("forceHover")).toEqual(true);
    });
  });

  describe("hover prop", () => {
    it("sets background color when hover is true", () => {
      const hover = true;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow hover={hover} />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .find("JSXStyle")
          .props().dynamic
      ).toContain(`background-color: ${defaultTheme.palette.common.white};`);
    });

    it("does not set background color when hover is false", () => {
      const hover = false;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow hover={hover} />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .find("JSXStyle")
          .props().dynamic
      ).not.toContain(
        `background-color: ${defaultTheme.palette.common.white};`
      );
    });

    it("sets border-left as solid when hover is true", () => {
      const hover = true;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow hover={hover} />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .find("JSXStyle")
          .props().dynamic
      ).toContain(
        `border-left: 3px solid ${defaultTheme.palette.secondary.main};`
      );
    });

    it("does not set border-left as solid when hover is false", () => {
      const hover = false;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow hover={hover} />
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableRow")
          .find("JSXStyle")
          .props().dynamic
      ).not.toContain(
        `border-left: 3px solid ${defaultTheme.palette.secondary.main};`
      );
    });
  });
});
