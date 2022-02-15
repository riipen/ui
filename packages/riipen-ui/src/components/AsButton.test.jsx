import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import AsButton from "./AsButton";

describe("AsButton component", () => {
  const child = <div>A child</div>;
  it("renders without errors", () => {
    let error;

    try {
      mount(<AsButton ariaLabel="click to be cool">{child}</AsButton>);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(
      <AsButton ariaLabel="click to be cool">{child}</AsButton>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(
        <AsButton ariaLabel="click to be cool">{child}</AsButton>
      );

      expect(wrapper.find("AsButton").props().classes).toEqual([]);
      expect(wrapper.find("AsButton").props().clearButtonStyle).toEqual(true);
      expect(wrapper.find("AsButton").props().type).toEqual("button");
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const wrapper = mount(
        <AsButton ariaLabel="click to be cool">{child}</AsButton>
      );

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classVariant = ["newClass"];

      const wrapper = mount(
        <AsButton ariaLabel="click to be cool" classes={classVariant}>
          {child}
        </AsButton>
      );

      expect(
        wrapper
          .find("AsButton")
          .childAt(0)
          .hasClass(classVariant[0])
      ).toEqual(true);
    });
  });

  describe("clearButtonStyle prop", () => {
    it("Does not apply clearButtonStyle class when clearButtonStyle prop is false", () => {
      const clearButtonStyle = false;

      const wrapper = mount(
        <AsButton
          ariaLabel="click to be cool"
          clearButtonStyle={clearButtonStyle}
        >
          {child}
        </AsButton>
      );

      expect(wrapper.find("AsButton").props().clearButtonStyle).toEqual(
        clearButtonStyle
      );
      expect(
        wrapper
          .find("AsButton")
          .find("button")
          .hasClass("clearButtonStyle")
      ).toEqual(false);
    });

    it("Applies clearButtonStyle class when clearButtonStyle prop is true", () => {
      const wrapper = mount(
        <AsButton ariaLabel="click to be cool">{child}</AsButton>
      );

      expect(wrapper.find("AsButton").props().clearButtonStyle).toEqual(true);
      expect(
        wrapper
          .find("AsButton")
          .find("button")
          .hasClass("clearButtonStyle")
      ).toEqual(true);
    });
  });

  describe("type prop", () => {
    it("Applies type to button", () => {
      const type = "submit";

      const wrapper = mount(
        <AsButton ariaLabel="click to be cool" type={type}>
          {child}
        </AsButton>
      );

      expect(wrapper.find("AsButton").props().type).toEqual(type);
    });
  });

  describe("ariaLabel prop", () => {
    it("Applies ariaLabel to button", () => {
      const ariaLabel = "cool";

      const wrapper = mount(<AsButton ariaLabel={ariaLabel}>{child}</AsButton>);

      expect(wrapper.find("AsButton").props().ariaLabel).toEqual(ariaLabel);
      expect(wrapper.find("button[aria-label='cool']")).toHaveLength(1);
    });
  });
});
