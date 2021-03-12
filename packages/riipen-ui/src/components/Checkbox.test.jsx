import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Checkbox from "./Checkbox";

describe("<Checkbox>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Checkbox readOnly />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Checkbox readOnly />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Checkbox readOnly />);

      const component = wrapper.find("Checkbox");
      expect(component.props().checked).toEqual(false);
      expect(component.props().disabled).toEqual(false);
      expect(component.props().required).toEqual(false);
    });
  });

  describe("checked prop", () => {
    it("sets checked with given checked value", () => {
      const checked = true;

      const wrapper = mount(<Checkbox checked={checked} readOnly />);

      expect(
        wrapper
          .find("Checkbox")
          .find("input")
          .props().checked
      ).toEqual(checked);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Checkbox classes={classes} readOnly />);

      expect(
        wrapper
          .find("Checkbox")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "secondary";

      const wrapper = mount(<Checkbox color={color} readOnly />);

      expect(
        wrapper
          .find("Checkbox")
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Checkbox color="pink" readOnly />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("sets disabled with given disabled value", () => {
      const disabled = true;

      const wrapper = mount(<Checkbox disabled={disabled} readOnly />);

      expect(
        wrapper
          .find("Checkbox")
          .find("input")
          .props().disabled
      ).toEqual(disabled);
    });

    it("applies disabled class name when disabled is true", () => {
      const disabled = true;

      const wrapper = mount(<Checkbox disabled={disabled} readOnly />);

      expect(
        wrapper
          .find("Checkbox")
          .find(".checkmark")
          .hasClass("disabled")
      ).toEqual(true);
    });
  });

  describe("error prop", () => {
    it("displays given error", () => {
      const error = <span>error!</span>;

      const wrapper = mount(<Checkbox error={error} readOnly />);

      expect(wrapper.childAt(0).contains(error)).toEqual(true);
    });
  });

  describe("label prop", () => {
    it("displays given label in the label element", () => {
      const label = "this is a label";

      const wrapper = mount(<Checkbox label={label} readOnly />);

      expect(wrapper.find("label").contains(label)).toEqual(true);
    });
  });

  describe("required prop", () => {
    it("displays an asterisk at the end of the label when required is true", () => {
      const label = <span>this is a label</span>;
      const required = true;

      const wrapper = mount(
        <Checkbox required={required} label={label} readOnly />
      );

      expect(
        wrapper
          .find("Checkbox")
          .find("label")
          .text()
          .substr(-1)
      ).toEqual("*");
    });

    it("does not display an asterisk when required is false", () => {
      const label = "this is a label";
      const required = false;

      const wrapper = mount(
        <Checkbox required={required} label={label} readOnly />
      );

      expect(
        wrapper
          .find("Checkbox")
          .find("label")
          .text()
          .substr(-1)
      ).not.toEqual("*");
    });
  });

  describe("warning prop", () => {
    it("displays given warning", () => {
      const warning = <span>warning!</span>;

      const wrapper = mount(<Checkbox warning={warning} readOnly />);

      expect(wrapper.childAt(0).contains(warning)).toEqual(true);
    });
  });

  describe("focusVisible state", () => {
    it("applies focusVisible class when focus event occurs", () => {
      const wrapper = mount(<Checkbox readOnly />);

      wrapper.find("input").simulate("focus");

      expect(
        wrapper
          .find("Checkbox")
          .find("input")
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("does not apply focusVisible class when blur event occurs", () => {
      const wrapper = mount(<Checkbox readOnly />);

      wrapper.find("input").simulate("focus");
      wrapper.find("input").simulate("blur");

      expect(
        wrapper
          .find("Checkbox")
          .find("input")
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });

  describe("onKeyDown event", () => {
    it("invokes handleKeyDown on valid keydown event", () => {
      const handler = jest.fn();

      const wrapper = mount(<Checkbox onKeyDown={handler} readOnly />);

      wrapper.find("input").simulate("keydown", { key: "Enter" });

      expect(handler).toHaveBeenCalledTimes(1);
    });
  });
});
