import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Chip from "./Chip";

describe("<Chip>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<Chip />);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(undefined);
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Chip().type.defaultProps;

      const wrapper = mount(<Chip />);

      const component = wrapper.find("Chip").childAt(0);
      expect(component.name()).toEqual("div");
      expect(component.hasClass(defaultProps.color)).toEqual(true);
      expect(component.hasClass("disabled")).toEqual(false);
      expect(component.hasClass("hover")).toEqual(false);
      expect(component.hasClass(defaultProps.size)).toEqual(true);
      expect(component.hasClass(defaultProps.variant)).toEqual(true);
      expect(component.childAt(0).name()).toEqual("span");

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with a valid variant", () => {
      const variant = "outlined";
      const wrapper = mount(<Chip variant={variant} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass(variant)
      ).toEqual(true);
    });
  });

  describe("component prop", () => {
    it("sets component with valid custom component", () => {
      const component = "a";
      const wrapper = mount(<Chip component={component} />);

      expect(wrapper.find(component)).toHaveLength(1);
      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .name()
      ).toEqual(component);
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "dark";

      const wrapper = mount(<Chip color={color} />);

      expect(wrapper.find("Chip").props().color).toEqual(color);
      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Chip color="red" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("label prop", () => {
    it("displays label from label prop", () => {
      const label = "A test label";

      const wrapper = mount(<Chip label={label} />);

      expect(
        wrapper
          .find("Chip")
          .find("span")
          .text()
      ).toEqual(label);
    });

    it("prioritizes displaying label over children", () => {
      const label = "label";
      const child = <div>"child"</div>;
      const wrapper = mount(<Chip label={label}>{child}</Chip>);

      expect(
        wrapper
          .find(".label")
          .children()
          .contains(child)
      ).toEqual(false);
      expect(
        wrapper
          .find("Chip")
          .find("span")
          .text()
      ).toEqual(label);
    });
  });

  describe("children prop", () => {
    it("displays label from child", () => {
      const label = "A label given as a child";
      const child = <div>{label}</div>;

      const wrapper = mount(<Chip>{child}</Chip>);

      expect(
        wrapper
          .find(".label")
          .children()
          .contains(child)
      ).toEqual(true);
      expect(
        wrapper
          .find(".label")
          .childAt(0)
          .text()
      ).toEqual(label);
    });
  });

  describe("onClick prop", () => {
    it("invokes onClick handler when clicked", () => {
      const handler = jest.fn();

      const wrapper = mount(<Chip onClick={handler} />);

      wrapper.find("Chip").simulate("click");
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });
});
