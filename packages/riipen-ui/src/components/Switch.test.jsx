import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Switch from "./Switch";

describe("<Switch>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Switch />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Switch />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Switch />);

      const component = wrapper.find("Switch");
      expect(component.props().checked).toEqual(false);
      expect(component.props().classes).toEqual([]);
      expect(component.props().color).toEqual("secondary");
      expect(component.props().size).toEqual("medium");
    });
  });

  describe("checked prop", () => {
    it("passes given checked value to input element", () => {
      const checked = true;

      const wrapper = mount(<Switch checked={checked} />);

      expect(wrapper.find("input").props().checked).toEqual(checked);
    });
  });

  describe("classes prop", () => {
    it("applies given classes to the root node", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Switch classes={classes} />);

      expect(
        wrapper
          .find("Switch")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("applies valid custom color class name", () => {
      const color = "positive";

      const wrapper = mount(<Switch color={color} />);

      expect(wrapper.find("input").hasClass(color)).toEqual(true);
    });

    it("gives an error given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "default";

      mount(<Switch color={color} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("passes given disabled value to input element", () => {
      const disabled = true;

      const wrapper = mount(<Switch disabled={disabled} />);

      expect(wrapper.find("input").props().disabled).toEqual(true);
    });
  });

  describe("id", () => {
    it("passes given id value to input element", () => {
      const id = "ID";

      const wrapper = mount(<Switch id={id} />);

      expect(wrapper.find("input").props().id).toEqual(id);
    });
  });

  describe("onChange prop", () => {
    it("invokes onChange handler on change event", () => {
      const onChange = jest.fn();
      const wrapper = mount(<Switch onChange={onChange} checked />);

      wrapper.find("input").simulate("change");

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("required prop", () => {
    it("passes given required value to input element", () => {
      const required = true;

      const wrapper = mount(<Switch required={required} />);

      expect(wrapper.find("input").props().required).toEqual(required);
    });
  });

  describe("size prop", () => {
    it("applies valid custom size class name to input element", () => {
      const size = "small";

      const wrapper = mount(<Switch size={size} />);

      expect(wrapper.find("input").hasClass(size)).toEqual(true);
    });

    it("gives an error given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "large";

      mount(<Switch size={size} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("value prop", () => {
    it("passes given value to input element", () => {
      const value = "pizza";

      const wrapper = mount(<Switch value={value} />);

      expect(wrapper.find("input").props().value).toEqual(value);
    });
  });
});
