import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const icon = i => props => <FontAwesomeIcon icon={i} {...props} />;

describe("<Button>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Button />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Button />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Button value />);

      expect(wrapper.find("Button").props().classes).toEqual([]);
      expect(wrapper.find("Button").props().color).toEqual("default");
      expect(wrapper.find("Button").props().disabled).toEqual(false);
      expect(wrapper.find("Button").props().fullWidth).toEqual(false);
      expect(wrapper.find("Button").props().size).toEqual("medium");
      expect(wrapper.find("Button").props().type).toEqual("button");
      expect(wrapper.find("Button").props().variant).toEqual("text");
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Button>{child}</Button>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Button classes={classes} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "blue";

      mount(<Button color={color} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("component prop", () => {
    it("sets custom component", () => {
      const component = "a";

      const wrapper = mount(<Button component={component} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("sets component type to button when component prop is not provided", () => {
      const wrapper = mount(<Button />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .name()
      ).toEqual("button");
    });

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcd";

      mount(<Button component={component} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("disabled prop", () => {
    it("sets disabled class name with valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<Button disabled={disabled} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("sets valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<Button disabled={disabled} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .props().disabled
      ).toEqual(disabled);
    });
  });

  describe("fullWidth prop", () => {
    it("sets fullWidth class name with valid custom fullWidth", () => {
      const fullWidth = true;

      const wrapper = mount(<Button fullWidth={fullWidth} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass("full-width")
      ).toEqual(true);
    });
  });

  describe("href prop", () => {
    it("sets custom href", () => {
      const href = "https://ui.riipen.com/";

      const wrapper = mount(<Button href={href} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .name()
      ).toEqual("a");
    });
  });

  describe("iconEnd prop", () => {
    it("sets iconEnd class name with valid custom iconEnd", () => {
      const iconEnd = icon(faTrash);

      const wrapper = mount(<Button iconEnd={iconEnd} />);

      expect(
        wrapper
          .find(".label")
          .childAt(0)
          .hasClass("icon-end")
      ).toEqual(true);
    });

    it("renders iconEnd with a component icon", () => {
      const iconEnd = icon(faTrash);

      const wrapper = mount(<Button iconEnd={iconEnd} />);

      expect(
        wrapper
          .find(".icon-end")
          .childAt(0)
          .childAt(0)
          .name()
      ).toEqual("FontAwesomeIcon");
    });

    it("renders iconEnd with a jsx icon", () => {
      const wrapper = mount(
        <Button iconEnd={<FontAwesomeIcon icon={faTrash} />} />
      );

      expect(
        wrapper
          .find(".icon-end")
          .childAt(0)
          .name()
      ).toEqual("FontAwesomeIcon");
    });
  });

  describe("iconStart prop", () => {
    it("sets iconStart class name with valid custom iconStart", () => {
      const iconStart = icon(faTrash);

      const wrapper = mount(<Button iconStart={iconStart} />);

      expect(
        wrapper
          .find(".label")
          .childAt(0)
          .hasClass("icon-start")
      ).toEqual(true);
    });

    it("renders iconStart with a component icon", () => {
      const iconStart = icon(faTrash);

      const wrapper = mount(<Button iconStart={iconStart} />);

      expect(
        wrapper
          .find(".icon-start")
          .childAt(0)
          .childAt(0)
          .name()
      ).toEqual("FontAwesomeIcon");
    });

    it("renders iconStart with a jsx icon", () => {
      const wrapper = mount(
        <Button iconStart={<FontAwesomeIcon icon={faTrash} />} />
      );

      expect(
        wrapper
          .find(".icon-start")
          .childAt(0)
          .name()
      ).toEqual("FontAwesomeIcon");
    });
  });

  describe("size prop", () => {
    it("sets size class name with valid custom size", () => {
      const size = "large";

      const wrapper = mount(<Button size={size} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(size)
      ).toEqual(true);
    });

    it("gives an error when given an invalid size", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "x-small";

      mount(<Button size={size} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("type prop", () => {
    it("sets custom valid type", () => {
      const type = "reset";

      const wrapper = mount(<Button type={type} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .props().type
      ).toEqual(type);
    });

    it("gives an error when given an invalid type", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const type = "enter";

      mount(<Button type={type} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("variant prop", () => {
    it("sets contained variant class name for contained variant", () => {
      const variant = "contained";
      const color = "primary";

      const wrapper = mount(<Button variant={variant} color={color} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(`contained-${color}`)
      ).toEqual(true);
    });

    it("sets text and default variant class name for text variant", () => {
      const variant = "text";
      const color = "primary";

      const wrapper = mount(<Button variant={variant} color={color} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(`text-${color}`)
      ).toEqual(true);
      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(variant)
      ).toEqual(true);
    });

    it("sets outlined variant class name for outlined variant", () => {
      const variant = "outlined";
      const color = "primary";

      const wrapper = mount(<Button variant={variant} color={color} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(`outlined-${color}`)
      ).toEqual(true);
    });

    it("sets inverted variant class name for inverted variant", () => {
      const variant = "inverted";
      const color = "primary";

      const wrapper = mount(<Button variant={variant} color={color} />);

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass(`inverted-${color}`)
      ).toEqual(true);
    });

    it("gives an error when given an invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const variant = "default";

      mount(<Button variant={variant} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("focusVisible state", () => {
    it("sets correct class name when focus event occurs", () => {
      const wrapper = mount(<Button value />);

      wrapper.find("button").invoke("onFocus")({});

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("sets correct class name when blur event occurs", () => {
      const wrapper = mount(<Button value />);

      wrapper.find("button").invoke("onFocus")({});
      wrapper.find("button").invoke("onBlur")({});

      expect(
        wrapper
          .find("Button")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });
});
