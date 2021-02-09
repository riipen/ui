import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import RadioButtonGroup from "./RadioButtonGroup";
import RadioButton from "./RadioButton";

describe("<RadioButtonGroup>", () => {
  it("renders without errors", () => {
    let error;
    const child = <RadioButton />;

    try {
      mount(<RadioButtonGroup>{child}</RadioButtonGroup>);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const child = <RadioButton />;

    const wrapper = mount(<RadioButtonGroup>{child}</RadioButtonGroup>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders non null children", () => {
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup>
          {null}
          {child}
        </RadioButtonGroup>
      );

      const childrenNodes = wrapper
        .find("fieldset")
        .find("span")
        .children();

      expect(childrenNodes.at(0).props().id).toEqual("one");
    });
  });

  describe("error prop", () => {
    it("displays error", () => {
      const error = <span>an error!</span>;
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup error={error}>{child}</RadioButtonGroup>
      );

      expect(wrapper.find("fieldset").contains(error)).toEqual(true);
    });
  });

  describe("hint prop", () => {
    it("renders InputLabel when hint is provided", () => {
      const hint = "it's a hint";
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup hint={hint}>{child}</RadioButtonGroup>
      );

      expect(wrapper.find("InputLabel")).toHaveLength(1);
    });

    it("passes given hint to InputLabel", () => {
      const hint = "it's a hint";
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup hint={hint}>{child}</RadioButtonGroup>
      );

      expect(wrapper.find("InputLabel").props().hint).toEqual(hint);
    });
  });

  describe("label prop", () => {
    it("passes label to InputLabel as children", () => {
      const label = "it's a label";
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup label={label}>{child}</RadioButtonGroup>
      );

      expect(wrapper.find("InputLabel").props().children).toEqual(label);
    });
  });

  describe("name prop", () => {
    it("passes given name to InputLabel as htmlFor prop", () => {
      const name = "hello";
      const label = "it's a label";
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup name={name} label={label}>
          {child}
        </RadioButtonGroup>
      );

      expect(wrapper.find("InputLabel").props().htmlFor).toEqual(name);
    });
  });

  describe("onChange prop", () => {
    it("sets onChange prop of children nodes", () => {
      const child = <RadioButton id="one" />;

      const wrapper = mount(<RadioButtonGroup>{child}</RadioButtonGroup>);

      expect(wrapper.find("RadioButton").props().onChange).toBeDefined();
    });

    it("invokes handler when child RadioButton is changed", () => {
      const child = <RadioButton id="one" />;
      const onChange = jest.fn();

      const wrapper = mount(
        <RadioButtonGroup onChange={onChange}>{child}</RadioButtonGroup>
      );

      wrapper
        .find("RadioButton")
        .find("input")
        .simulate("change");

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("required prop", () => {
    it("passes required prop to InputLabel", () => {
      const child = <RadioButton id="one" />;
      const required = true;
      const label = "it's a label";

      const wrapper = mount(
        <RadioButtonGroup required={required} label={label}>
          {child}
        </RadioButtonGroup>
      );

      expect(wrapper.find("InputLabel").props().required).toEqual(required);
    });
  });

  describe("warning prop", () => {
    it("displays warning", () => {
      const warning = "oh no";
      const child = <RadioButton id="one" />;

      const wrapper = mount(
        <RadioButtonGroup warning={warning}>{child}</RadioButtonGroup>
      );

      expect(wrapper.find("fieldset").contains(warning)).toEqual(true);
    });
  });
});
