import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import ButtonIcon from "./ButtonIcon";

describe("<ButtonIcon>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<ButtonIcon>children</ButtonIcon>);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<ButtonIcon>children</ButtonIcon>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<ButtonIcon>children</ButtonIcon>);

      const component = wrapper.find("ButtonIcon");
      expect(component.props().classes).toEqual([
        "riipen",
        "riipen-buttonicon"
      ]);
      expect(component.props().color).toEqual("default");
      expect(component.props().disabled).toEqual(false);
      expect(component.props().size).toEqual("medium");
      expect(component.props().variant).toEqual("icon");
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = "children";

      const wrapper = mount(<ButtonIcon>{child}</ButtonIcon>);

      expect(wrapper.find("ButtonIcon").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <ButtonIcon classes={classes}>children</ButtonIcon>
      );

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "secondary";

      const wrapper = mount(<ButtonIcon color={color}>children</ButtonIcon>);

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass(`icon-${color}`)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ButtonIcon color="pink">children</ButtonIcon>);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("component prop", () => {
    it("sets component with valid custom component", () => {
      const component = "span";

      const wrapper = mount(
        <ButtonIcon component={component}>children</ButtonIcon>
      );

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("sets component type to button when component prop is not provided", () => {
      const wrapper = mount(<ButtonIcon>children</ButtonIcon>);

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .name()
      ).toEqual("button");
    });

    it("sets component type to a when href is defined", () => {
      const href = "www.google.com";

      const wrapper = mount(<ButtonIcon href={href}>children</ButtonIcon>);

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .name()
      ).toEqual("a");
    });

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcd";

      mount(<ButtonIcon component={component}>children</ButtonIcon>);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("applies disabled class when disabled prop is true", () => {
      const disabled = true;

      const wrapper = mount(
        <ButtonIcon disabled={disabled}>children</ButtonIcon>
      );

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("does not apply disabled class when disabled prop is false", () => {
      const disabled = false;

      const wrapper = mount(
        <ButtonIcon disabled={disabled}>children</ButtonIcon>
      );

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(false);
    });

    it("passes given disabled value to button", () => {
      const disabled = true;

      const wrapper = mount(
        <ButtonIcon disabled={disabled}>children</ButtonIcon>
      );

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .props().disabled
      ).toEqual(disabled);
    });
  });

  describe("size prop", () => {
    it("sets font and icon with given valid custom size prop", () => {
      const size = "small";

      const wrapper = mount(<ButtonIcon size={size}>children</ButtonIcon>);

      expect(
        wrapper
          .find("ButtonIcon")
          .find("span")
          .hasClass("icon-small")
      ).toEqual(true);
      expect(
        wrapper
          .find("ButtonIcon")
          .find("span")
          .hasClass("font-small")
      ).toEqual(true);
    });

    it("gives an error given invalid size", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "sm";

      mount(<ButtonIcon size={size}>children</ButtonIcon>);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with a valid variant", () => {
      const variant = "outlined";

      const wrapper = mount(
        <ButtonIcon variant={variant}>children</ButtonIcon>
      );

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass(`${variant}-default`)
      ).toEqual(true);
    });

    it("gives an error when given an invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ButtonIcon variant="bad">children</ButtonIcon>);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("focusVisible state", () => {
    it("does not apply focusVisible class when component is rendered", () => {
      const wrapper = mount(<ButtonIcon>children</ButtonIcon>);

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });

    it("applies focusVisible class when focus event occurs", () => {
      const wrapper = mount(<ButtonIcon>children</ButtonIcon>);

      wrapper.simulate("focus");

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("does not apply focusVisible class when blur event occurs", () => {
      const wrapper = mount(<ButtonIcon>children</ButtonIcon>);

      wrapper.simulate("focus");
      wrapper.simulate("blur");

      expect(
        wrapper
          .find("ButtonIcon")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });
});
