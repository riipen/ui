import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Notice from "./Notice.jsx";

describe("<Notice>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Notice />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Notice />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Notice().type.defaultProps;

      const wrapper = mount(<Notice />);

      const component = wrapper.find("Notice");
      expect(component.props().color).toEqual(defaultProps.color);
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <h5>hi hi</h5>;

      const wrapper = mount(<Notice>{child}</Notice>);

      expect(
        wrapper
          .find("Notice")
          .childAt(0)
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the div inside of Notice", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Notice classes={classes} />);

      expect(
        wrapper
          .find("Notice")
          .find("div")
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-notice"];

      const wrapper = mount(<Notice />);

      expect(
        wrapper
          .find("Notice")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Notice classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "positive";

      const wrapper = mount(<Notice color={color} />);

      expect(
        wrapper
          .find("Notice")
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Notice color="red" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
