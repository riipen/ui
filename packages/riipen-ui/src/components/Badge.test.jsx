import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Badge from "./Badge";

describe("<Badge>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<Badge />);
    } catch (theError) {
      error = theError;
    }
    expect(error).toEqual(undefined);
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Badge().type.defaultProps;

      const wrapper = mount(<Badge />);

      expect(wrapper.find("Badge").props().anchor.horizontal).toEqual(
        defaultProps.anchor.horizontal
      );
      expect(wrapper.find("Badge").props().anchor.vertical).toEqual(
        defaultProps.anchor.vertical
      );
      expect(wrapper.find("Badge").props().color).toEqual(defaultProps.color);
      expect(wrapper.find("Badge").props().component).toEqual(
        defaultProps.component
      );
      expect(wrapper.find("Badge").props().max).toEqual(defaultProps.max);
      expect(wrapper.find("Badge").props().overlap).toEqual(
        defaultProps.overlap
      );
      expect(wrapper.find("Badge").props().showZero).toEqual(
        defaultProps.showZero
      );
      expect(wrapper.find("Badge").props().size).toEqual(defaultProps.size);
      expect(wrapper.find("Badge").props().variant).toEqual(
        defaultProps.variant
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("anchor prop", () => {
    it("sets anchor class name with valid custom anchor", () => {
      const anchor = { horizontal: "left", vertical: "bottom" };

      const wrapper = mount(<Badge anchor={anchor} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass("bottom-left-rectangle")
      ).toEqual(true);
    });

    it("gives an error when given an invalid anchor", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const anchor = { horizontal: "side", vertical: "up" };

      mount(<Badge anchor={anchor} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Badge>{child}</Badge>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classVariant = ["newClass"];

      const wrapper = mount(<Badge classes={classVariant} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass(classVariant[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "muted";

      const wrapper = mount(<Badge color={color} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Badge color="blue" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("component prop", () => {
    it("sets component with valid custom component", () => {
      const component = "a";

      const wrapper = mount(<Badge component={component} />);

      expect(wrapper.find(component)).toHaveLength(1);
      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcdefg";

      mount(<Badge component={component} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("content prop", () => {
    it("badge renders when content is 0 and showZero is false", () => {
      const content = 0;

      const wrapper = mount(<Badge content={content} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass("hidden")
      ).toEqual(true);
      expect(Number(wrapper.text())).toEqual(content);
    });

    it("badge renders when content is 0 and showZero is true", () => {
      const content = 0;
      const showZero = true;

      const wrapper = mount(<Badge content={content} showZero={showZero} />);

      expect(Number(wrapper.find("Badge").text())).toEqual(content);
    });

    it("badge renders when content is greater than 0 and showZero is true", () => {
      const content = 1;
      const showZero = true;

      const wrapper = mount(<Badge content={content} showZero={showZero} />);

      expect(Number(wrapper.find("Badge").text())).toEqual(content);
    });
  });

  describe("max prop", () => {
    it("displays max value given content greater than max value", () => {
      const max = 9;
      const content = 11;

      const wrapper = mount(<Badge max={max} content={content} />);

      expect(wrapper.text()).toEqual(`${max}+`);
    });

    it("displays content value given content less than max value", () => {
      const max = 9;
      const content = 8;

      const wrapper = mount(<Badge max={max} content={content} />);

      expect(Number(wrapper.text())).toEqual(content);
    });
  });

  describe("overlap prop", () => {
    it("sets overlap class name with valid custom overlap", () => {
      const anchor = { horizontal: "left", vertical: "top" };
      const overlap = "circle";

      const wrapper = mount(<Badge anchor={anchor} overlap={overlap} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass("top-left-circle")
      ).toEqual(true);
    });

    it("gives an error when given an invalid overlap", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Badge overlap="square" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("showZero prop", () => {
    it("badge renders when showZero prop value is true", () => {
      const showZero = true;

      const wrapper = mount(<Badge showZero={showZero} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass("hidden")
      ).toEqual(false);
    });
  });

  describe("size prop", () => {
    it("sets size class name with a valid size", () => {
      const size = "small";
      const variant = "standard";

      const wrapper = mount(<Badge size={size} variant={variant} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass(size)
      ).toEqual(true);
    });

    it("does not set size class name when non standard variant prop used", () => {
      const size = "small";
      const variant = "dot";

      const wrapper = mount(<Badge size={size} variant={variant} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass(size)
      ).toEqual(false);
    });

    it("gives an error when given an invalid size", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "large";

      mount(<Badge size={size} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with valid custom variant", () => {
      const variant = "dot";

      const wrapper = mount(<Badge variant={variant} />);

      expect(
        wrapper
          .find("Badge")
          .childAt(0)
          .childAt(0)
          .hasClass(variant)
      ).toEqual(true);
    });

    it("throws an error with with invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Badge variant="circle" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
