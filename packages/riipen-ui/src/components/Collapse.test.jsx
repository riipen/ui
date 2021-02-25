import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Collapse from "./Collapse";

describe("<Collapse>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Collapse />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Collapse />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Collapse />);

      expect(wrapper.find("Collapse").props().component).toEqual("div");
    });
  });

  describe("children prop", () => {
    it("renders given childen", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Collapse>{child}</Collapse>);

      expect(wrapper.find("Collapse").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies given classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Collapse classes={classes} />);

      expect(
        wrapper
          .find("Collapse")
          .childAt(0)
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Collapse classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("component prop", () => {
    it("sets component type as span", () => {
      const component = "span";

      const wrapper = mount(<Collapse component={component} />);

      expect(
        wrapper
          .find("Collapse")
          .childAt(0)
          .childAt(0)
          .type()
      ).toEqual(component);
    });
  });

  describe("in prop", () => {
    it("sets class name as entered when in prop is true", () => {
      const isTransition = true;

      const wrapper = mount(<Collapse in={isTransition} />);

      expect(
        wrapper
          .find("Collapse")
          .childAt(0)
          .childAt(0)
          .hasClass("entered")
      ).toEqual(true);
    });

    it("sets class name as exited when in prop is false", () => {
      const isTransition = false;

      const wrapper = mount(<Collapse in={isTransition} />);

      expect(
        wrapper
          .find("Collapse")
          .childAt(0)
          .childAt(0)
          .hasClass("exited")
      ).toEqual(true);
    });
  });
});
