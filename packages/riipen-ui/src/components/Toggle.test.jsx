import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Toggle from "./Toggle";

describe.only("<Toggle>", () => {
  let props;

  beforeEach(() => {
    props = {};
    props.name = "test";
    props.options = [
      {
        label: "first",
        value: "first"
      },
      {
        label: "second",
        value: "second"
      }
    ];
  });

  it("renders without errors", () => {
    let error;

    try {
      mount(<Toggle {...props} />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Toggle {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Toggle {...props} />);

      const component = wrapper.find("Toggle");
      expect(component.props().color).toEqual("primary");
      expect(component.props().size).toEqual("medium");
      expect(component.props().variant).toEqual("joined");
    });
  });

  describe("value prop", () => {
    it("sets checked on input with provided value", () => {
      const wrapper = mount(<Toggle {...props} value="first" />);

      expect(
        wrapper
          .find("Toggle")
          .find(`input[name="${props.name}-first"]`)
          .props().checked
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Toggle classes={classes} {...props} />);

      expect(wrapper.find(".classOne").length).toEqual(1);
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "secondary";

      const wrapper = mount(<Toggle color={color} {...props} />);

      expect(wrapper.find(".secondary").length).toEqual(1);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Toggle color="pink" {...props} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("sets disabled with given disabled value", () => {
      const disabled = true;

      const wrapper = mount(<Toggle disabled={disabled} {...props} />);

      expect(
        wrapper
          .find("Toggle")
          .find(`input[name="${props.name}-first"]`)
          .props().disabled
      ).toEqual(disabled);
    });

    it("applies disabled class name when disabled is true", () => {
      const disabled = true;

      const wrapper = mount(<Toggle disabled={disabled} {...props} />);

      expect(wrapper.find("div.disabled").length).toEqual(1);
      expect(wrapper.find("span.disabled").length).toEqual(2);
    });

    it("applies the disabled class to disabled options", () => {
      props.options = [
        {
          label: "first",
          value: "first",
          disabled: true
        },
        {
          label: "second",
          value: "second"
        }
      ];

      const wrapper = mount(<Toggle {...props} />);

      expect(wrapper.find("div.disabled").length).toEqual(0);
      expect(wrapper.find("span.disabled").length).toEqual(1);
    });
  });

  describe("label prop", () => {
    it("displays given label in the label element", () => {
      const label = "this is a label";

      const wrapper = mount(<Toggle label={label} {...props} />);

      expect(wrapper.find("InputLabel").contains(label)).toEqual(true);
    });
  });

  describe("hint prop", () => {
    it("displays given hint in the label element", () => {
      const hint = "this is a hint";

      const wrapper = mount(<Toggle hint={hint} {...props} />);

      expect(wrapper.find("InputLabel").contains(hint)).toEqual(true);
    });
  });

  describe("required prop", () => {
    it("displays an asterisk at the end of the label when required is true", () => {
      const label = "this is a label";
      const required = true;

      const wrapper = mount(
        <Toggle required={required} label={label} {...props} />
      );

      expect(
        wrapper
          .find("Toggle")
          .find("InputLabel")
          .text()
          .substr(-1)
      ).toEqual("*");
    });
  });
});
