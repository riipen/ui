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

  it("renders correct snapshot", () => {
    const wrapper = mount(<Chip />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Chip />);

      const component = wrapper.find("Chip");
      expect(component.childAt(0).name()).toEqual("div");
      expect(component.props().color).toEqual("default");
      expect(component.props().disabled).toEqual(false);
      expect(component.props().hover).toEqual(false);
      expect(component.props().size).toEqual("medium");
      expect(component.props().variant).toEqual("default");
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

  describe("classes prop", () => {
    it("applies all classes to the root node of Chip", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Chip classes={classes} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-chip"];

      const wrapper = mount(<Chip />);

      expect(
        wrapper
          .find("Chip")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Chip classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "greyA400";

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

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcdefg";

      mount(<Chip component={component} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("applies disabled class when disabled prop is true", () => {
      const disabled = true;

      const wrapper = mount(<Chip disabled={disabled} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("does not apply disabled class when disabled prop is false", () => {
      const disabled = false;

      const wrapper = mount(<Chip disabled={disabled} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(false);
    });
  });

  describe("hover prop", () => {
    it("applies hover class when hover prop is true", () => {
      const hover = true;

      const wrapper = mount(<Chip hover={hover} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("hover")
      ).toEqual(true);
    });

    it("does not apply hover class when hover prop is false", () => {
      const hover = false;

      const wrapper = mount(<Chip hover={hover} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("hover")
      ).toEqual(false);
    });
  });

  describe("icon prop", () => {
    it("displays icon when given", () => {
      const icon = <span>{"icon"}</span>;

      const wrapper = mount(<Chip icon={icon} />);

      expect(
        wrapper
          .find(".icon")
          .children()
          .contains(icon)
      ).toEqual(true);
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

  describe("onClick prop", () => {
    it("sets clickable class name ", () => {
      const handler = jest.fn();

      const wrapper = mount(<Chip onClick={handler} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("clickable")
      ).toEqual(true);
    });

    it("invokes onClick handler when clicked", () => {
      const handler = jest.fn();

      const wrapper = mount(<Chip onClick={handler} />);

      wrapper
        .find("div")
        .at(0)
        .invoke("onClick")();

      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe("size prop", () => {
    it("sets size class name with a valid size", () => {
      const size = "small";

      const wrapper = mount(<Chip size={size} />);

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass(size)
      ).toEqual(true);
    });

    it("gives an error when given an invalid size", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "large";

      mount(<Chip size={size} />);

      expect(errors).toHaveBeenCalledTimes(1);
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

    it("gives an error when given an invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const variant = "somethingInvalid";

      mount(<Chip variant={variant} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("focusVisible state", () => {
    it("applies focusVisible class when focus event occurs", () => {
      const wrapper = mount(<Chip label="test" />);

      wrapper
        .find("div")
        .at(0)
        .invoke("onFocus")({});

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("does not apply focusVisible class when blur event occurs", () => {
      const wrapper = mount(<Chip label="test" />);

      wrapper
        .find("div")
        .at(0)
        .invoke("onFocus")({});
      wrapper
        .find("div")
        .at(0)
        .invoke("onBlur")();

      expect(
        wrapper
          .find("Chip")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });
});
