import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import RadioGroup from "./RadioGroup.jsx";
import Radio from "./Radio.jsx";

describe("<RadioGroup>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<RadioGroup />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<RadioGroup />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given non null children", () => {
      const child = <Radio label="one" readOnly />;
      const child2 = <Radio label="two" readOnly />;

      const wrapper = mount(
        <RadioGroup>
          {child}
          {null}
          {child2}
        </RadioGroup>
      );

      const childrenNodes = wrapper.find("fieldset").find("Radio");
      expect(childrenNodes.at(0).props().label).toEqual("one");
      expect(childrenNodes.at(1).props().label).toEqual("two");
    });
  });

  describe("error prop", () => {
    it("displays error", () => {
      const error = <span>an error!</span>;

      const wrapper = mount(<RadioGroup error={error} />);

      expect(wrapper.find("fieldset").contains(error)).toEqual(true);
    });
  });

  describe("hint prop", () => {
    it("renders InputLabel when hint is provided", () => {
      const hint = "it's a hint";

      const wrapper = mount(<RadioGroup hint={hint} />);

      expect(wrapper.find("InputLabel")).toHaveLength(1);
    });

    it("passes given hint to InputLabel", () => {
      const hint = "it's a hint";

      const wrapper = mount(<RadioGroup hint={hint} />);

      expect(wrapper.find("InputLabel").props().hint).toEqual(hint);
    });
  });

  describe("label prop", () => {
    it("renders Inputlabel and passes label to InputLabel as children", () => {
      const label = "it's a label";

      const wrapper = mount(<RadioGroup label={label} />);

      expect(wrapper.find("InputLabel").props().children).toEqual(label);
      expect(wrapper.find("InputLabel")).toHaveLength(1);
    });

    it("does not render InputLabel when both label and hint are not provided", () => {
      const wrapper = mount(<RadioGroup />);

      expect(wrapper.find("InputLabel")).toHaveLength(0);
    });
  });

  describe("name prop", () => {
    it("passes given name to InputLabel as htmlFor prop", () => {
      const name = "hello";
      const label = "it's a label";
      const child = <Radio id="one" />;

      const wrapper = mount(
        <RadioGroup name={name} label={label}>
          {child}
        </RadioGroup>
      );

      expect(wrapper.find("InputLabel").props().htmlFor).toEqual(name);
    });
  });

  describe("onChange prop", () => {
    it("sets onChange prop of children nodes", () => {
      const child = <Radio label="one" readOnly />;

      const wrapper = mount(<RadioGroup>{child}</RadioGroup>);

      expect(wrapper.find("Radio").props().onChange).toBeDefined();
    });

    it("invokes handler when child Radio is changed", () => {
      const child = <Radio label="one" readOnly />;
      const onChange = jest.fn();

      const wrapper = mount(
        <RadioGroup onChange={onChange}>{child}</RadioGroup>
      );

      wrapper
        .find("Radio")
        .find("input")
        .invoke("onChange")({ target: { value: "a" } });

      expect(onChange).toHaveBeenCalledWith({ target: { value: "a" } }, "a");
    });
  });

  describe("required prop", () => {
    it("passes required prop to InputLabel", () => {
      const label = "it's a label";
      const required = true;

      const wrapper = mount(<RadioGroup label={label} required={required} />);

      expect(wrapper.find("InputLabel").props().required).toEqual(required);
    });
  });

  describe("suffix prop", () => {
    it("passes suffix prop to InputLabel", () => {
      const suffix = <span>"Test"</span>;

      const wrapper = mount(<RadioGroup suffix={suffix} />);

      expect(wrapper.find("InputLabel").props().suffix).toEqual(suffix);
    });
  });

  describe("value prop", () => {
    it("sets the childs checked prop according to the value", () => {
      const child = <Radio value="one" id="one" />;

      const wrapper = mount(<RadioGroup value="one">{child}</RadioGroup>);

      expect(wrapper.find("Radio").props().checked).toEqual(true);
    });
  });

  describe("warning prop", () => {
    it("displays warning", () => {
      const warning = "oh no";

      const wrapper = mount(<RadioGroup warning={warning} />);

      expect(wrapper.find("fieldset").contains(warning)).toEqual(true);
    });
  });
});
