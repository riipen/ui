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
    const wrapper = mount(<AppBar />);

    expect(wrapper.find("AppBar").props().color).toEqual("primary");
    expect(wrapper.find("AppBar").props().position).toEqual("fixed");

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>A child</div>;

      const wrapper = mount(<AppBar>{child}</AppBar>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
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
      expect(
        wrapper
          .find("AppBar")
          .childAt(0)
          .hasClass(colorVariant)
      ).toEqual(true);
    });

    it("throws an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<AppBar color="orange" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("position prop", () => {
    it("sets position class name with valid custom position", () => {
      const positionVariant = "absolute";

      const wrapper = mount(<AppBar position={positionVariant} />);

      expect(wrapper.find("AppBar").props().position).toEqual(positionVariant);
      expect(
        wrapper
          .find("AppBar")
          .childAt(0)
          .hasClass(positionVariant)
      ).toEqual(true);
    });

    it("throws an error with invalid position", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<AppBar position="upright" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});