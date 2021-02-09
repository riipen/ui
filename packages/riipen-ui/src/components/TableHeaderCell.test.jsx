import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Table from "./Table";
import TableHeader from "./TableHeader";
import TableHeaderCell from "./TableHeaderCell";
import TableRow from "./TableRow";

describe("<TableHeaderCell>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell />
            </TableRow>
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
          <TableRow>
            <TableHeaderCell />
          </TableRow>
        </TableHeader>
      </Table>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new TableHeaderCell().type.defaultProps;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell />
            </TableRow>
          </TableHeader>
        </Table>
      );

      const component = wrapper.find("TableHeaderCell");
      expect(component.props().textAlign).toEqual(defaultProps.textAlign);
    });
  });

  describe("children prop", () => {
    it("renders given children in the th element", () => {
      const child = <span>child</span>;

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>{child}</TableHeaderCell>
            </TableRow>
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableHeaderCell")
          .find("th")
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of Typography", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell classes={classes} />
            </TableRow>
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableHeaderCell")
          .find("th")
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-tableheadercell"];

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell />
            </TableRow>
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableHeaderCell")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("textAlign prop", () => {
    it("applies valid textAlign to the style", () => {
      const textAlign = "right";

      const wrapper = mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell textAlign={textAlign} />
            </TableRow>
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("TableHeaderCell")
          .find("th")
          .props().style.textAlign
      ).toEqual(textAlign);
    });

    it("gives an error given an invalid textAlign", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const textAlign = "middle";

      mount(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell textAlign={textAlign} />
            </TableRow>
          </TableHeader>
        </Table>
      );

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
