import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import AsButton from "./AsButton";

describe("AsButton component", () => {
  let props;
  let children;

  beforeEach(() => {
    children = <div>A child</div>;
    props = {
      ariaLabel: "click to be cool"
    };
  });
  it("renders without errors", () => {
    let error;

    try {
      mount(<AsButton {...props}>{children}</AsButton>);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<AsButton {...props}>{children}</AsButton>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<AsButton {...props}>{children}</AsButton>);

      expect(wrapper.find("AsButton").props().classes).toEqual([]);
      expect(wrapper.find("AsButton").props().variant).toEqual("default");
      expect(wrapper.find("AsButton").props().type).toEqual("button");
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const wrapper = mount(<AsButton {...props}>{children}</AsButton>);

      expect(wrapper.containsMatchingElement(children)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      props.classes = "newClass";

      const wrapper = mount(<AsButton {...props}>{children}</AsButton>);

      expect(
        wrapper
          .find("AsButton")
          .childAt(0)
          .hasClass(props.classes)
      ).toEqual(true);
    });
  });

  describe("variant prop", () => {
    it("applies variant class", () => {
      props.variant = "basic";

      const wrapper = mount(<AsButton {...props}>{children}</AsButton>);

      expect(wrapper.find("AsButton").props().variant).toEqual(props.variant);
      expect(
        wrapper
          .find("AsButton")
          .find("button")
          .hasClass(props.variant)
      ).toEqual(true);
    });
  });

  describe("type prop", () => {
    it("applies type to button", () => {
      const type = "submit";

      const wrapper = mount(
        <AsButton {...props} type={type}>
          {children}
        </AsButton>
      );

      expect(wrapper.find("AsButton").props().type).toEqual(type);
    });
  });

  describe("ariaLabel prop", () => {
    it("applies ariaLabel to button", () => {
      props.ariaLabel = "cool";

      const wrapper = mount(<AsButton {...props}>{children}</AsButton>);

      expect(wrapper.find("AsButton").props().ariaLabel).toEqual(
        props.ariaLabel
      );
      expect(wrapper.find("button[aria-label='cool']")).toHaveLength(1);
    });
  });
});
