import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import Table from "./Table";
import TableHeader from "./TableHeader";

describe("<Table>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Table />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Table />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Table />);

      const component = wrapper.find("Table");
      expect(component.props().backgroundColor).toEqual("grey50");
      expect(component.props().layout).toEqual("auto");
    });
  });

  describe("backgroundColor prop", () => {
    it("sets custom valid backgroundColor with mapped hex color", () => {
      const color = "grey400";

      const wrapper = mount(<Table backgroundColor={color} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(
        `${defaultTheme.palette.grey[400]}`
      );
    });

    it("sets transparent color given transparent backgroundColor", () => {
      const color = "transparent";

      const wrapper = mount(<Table backgroundColor={color} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(color);
    });

    it("gives an error given an invalid backgroundColor", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "white";

      mount(<Table backgroundColor={color} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("renders all non null children", () => {
      const child = <TableHeader />;

      const wrapper = mount(
        <Table>
          {null}
          {child}
        </Table>
      );

      expect(wrapper.find("Table").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the root node", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Table classes={classes} />);

      expect(
        wrapper
          .find("Table")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-table"];

      const wrapper = mount(<Table />);

      expect(
        wrapper
          .find("Table")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("layout prop", () => {
    it("applies valid custom layout", () => {
      const layout = "fixed";

      const wrapper = mount(<Table layout={layout} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(layout);
    });

    it("gives an error given an invalid layout", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const layout = "left";

      mount(<Table layout={layout} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
