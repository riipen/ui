import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import TableBody from "./TableBody";
import Table from "./Table";

describe("<TableBody>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Table>
          <TableBody />
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
        <TableBody />
      </Table>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = (
        <tr>
          <td>Test</td>
        </tr>
      );

      const wrapper = mount(
        <Table>
          <TableBody>{child}</TableBody>
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
          <TableBody classes={classes} />
        </Table>
      );

      expect(wrapper.find("tbody").props().classes).toContain(classes[0]);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-tablebody"];

      const wrapper = mount(
        <Table>
          <TableBody />
        </Table>
      );

      expect(
        wrapper
          .find("TableBody")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });
});
