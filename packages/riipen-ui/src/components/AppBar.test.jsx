import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import AppBar from "./AppBar";

describe("<AppBar>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<AppBar />);
    } catch (theError) {
      error = theError;
    }
    expect(error).toEqual(undefined);
  });

  it("sets correct default props", () => {
    const defaultProps = new AppBar().type.defaultProps;

    const wrapper = mount(<AppBar />);

    const component = wrapper.find("AppBar").childAt(0);
    expect(component.hasClass(defaultProps.color)).toEqual(true);
    expect(component.hasClass(defaultProps.position)).toEqual(true);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("displays custom label from child", () => {
      const label = "A label given as a child";
      const child = <div>{label}</div>;

      const wrapper = mount(<AppBar>{child}</AppBar>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
      expect(wrapper.text(".label")).toEqual(label);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classVariant = ["newClass"];

      const wrapper = mount(<AppBar classes={classVariant} />);

      expect(
        wrapper
          .find("AppBar")
          .childAt(0)
          .hasClass(classVariant[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("sets color class name with valid custom colour", () => {
      const colorVariant = "secondary";

      const wrapper = mount(<AppBar color={colorVariant} />);

      expect(wrapper.find("AppBar").props().color).toEqual(colorVariant);
    });

    it("sets color class name with invalid colour", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<AppBar color="orange" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("position prop", () => {
    it("sets position class name with valid custom position", () => {
      const positionVariant = "absolute";

      const wrapper = mount(<AppBar color={positionVariant} />);

      expect(wrapper.find("AppBar").props().color).toEqual(positionVariant);
    });

    it("sets position class name with invalid position", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<AppBar position="upright" />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
