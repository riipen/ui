import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import Container from "./Container";

describe("<Container>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Container />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Container />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Container().type.defaultProps;

      const wrapper = mount(<Container />);

      expect(wrapper.find("Container").props().maxWidth).toEqual(
        defaultProps.maxWidth
      );
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Container>{child}</Container>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Container classes={classes} />);

      expect(
        wrapper
          .find("Container")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to default classes prop with withClass decorator", () => {
      const wrapper = mount(<Container />);

      expect(wrapper.find("Container").props().classes).toEqual([
        "riipen",
        "riipen-container"
      ]);
    });
  });

  describe("maxWidth prop", () => {
    it("container renders with custom valid maxWidth", () => {
      const max = "md";

      const wrapper = mount(<Container maxWidth={max} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(
        `${defaultTheme.breakpoints[max]}px`
      );
    });

    it("container renders at 100% width", () => {
      const max = false;

      const wrapper = mount(<Container maxWidth={max} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain("100%");
    });

    it("throws an error with invalid maxWidth variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const maxWidth = "s";

      mount(<Container maxWidth={maxWidth} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
