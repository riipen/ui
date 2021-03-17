import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Table from "./Table.jsx";
import TableHeader from "./TableHeader.jsx";
import TableRow from "./TableRow.jsx";

describe("<TableHeader>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Table>
          <TableHeader />
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
        <TableHeader />
      </Table>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given non null children", () => {
      const child = <TableRow />;

      const wrapper = mount(
        <Table>
          <TableHeader>
            {null}
            {child}
          </TableHeader>
        </Table>
      );

      expect(
        wrapper
          .find("thead")
          .childAt(0)
          .matchesElement(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <Table>
          <TableHeader classes={classes} />
        </Table>
      );

      expect(wrapper.find("thead").hasClass(classes[0])).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-tableheader"];

      const wrapper = mount(
        <Table>
          <TableHeader />
        </Table>
      );

      expect(
        wrapper
          .find("TableHeader")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });
});
