import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import InputLabel from "./InputLabel.jsx";

describe("<InputLabel>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<InputLabel />);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<InputLabel />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new InputLabel().type.defaultProps;

      const wrapper = mount(<InputLabel />);

      const component = wrapper.find("InputLabel");
      expect(component.props().color).toEqual(defaultProps.color);
      expect(component.props().required).toEqual(defaultProps.required);
      expect(component.props().weight).toEqual(defaultProps.weight);
    });
  });

  describe("children prop", () => {
    it("renders given children inside the label and Typography element", () => {
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel children={child} />);

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .find("Typography")
          .contains(child)
      ).toEqual(true);
    });

    it("does not render label and Typography elements when children is not given", () => {
      const wrapper = mount(<InputLabel />);

      expect(wrapper.find("InputLabel").find("label")).toHaveLength(0);
      expect(wrapper.find("InputLabel").find("Typography")).toHaveLength(0);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the label element when children is given", () => {
      const classes = ["classOne"];
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel classes={classes} children={child} />);

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-inputlabel"];

      const wrapper = mount(<InputLabel />);

      expect(
        wrapper
          .find("InputLabel")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<InputLabel classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("applies color class to the label element with a valid color", () => {
      const color = "black";
      const child = <div>it's a label</div>;
      const hint = <span>it's a hint</span>;

      const wrapper = mount(
        <InputLabel color={color} children={child} hint={hint} />
      );

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .hasClass(color)
      ).toEqual(true);
    });

    it("applies color class to the InputHint element with a valid color", () => {
      const color = "black";
      const child = <div>it's a label</div>;
      const hint = <span>it's a hint</span>;

      const wrapper = mount(
        <InputLabel color={color} children={child} hint={hint} />
      );

      expect(
        wrapper
          .find("InputLabel")
          .find("InputHint")
          .props().color
      ).toEqual(color);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<InputLabel color="red" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("hint prop", () => {
    it("displays given hint node inside the InputHint element", () => {
      const hint = <span>it's a hint</span>;

      const wrapper = mount(<InputLabel hint={hint} />);

      expect(
        wrapper
          .find("InputLabel")
          .find("InputHint")
          .contains(hint)
      ).toEqual(true);
    });

    it("does not render InputHint element when hint is not given", () => {
      const wrapper = mount(<InputLabel />);

      expect(wrapper.find("InputLabel").find("InputHint")).toHaveLength(0);
    });
  });

  describe("required prop", () => {
    it("displays an asterisk at the end of the label when required is true", () => {
      const child = <div>it's a label</div>;
      const required = true;

      const wrapper = mount(
        <InputLabel children={child} required={required} />
      );

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .text()
          .substr(-1)
      ).toEqual("*");
    });

    it("does not display an asterick when required is false", () => {
      const child = <div>it's a label</div>;
      const required = false;

      const wrapper = mount(
        <InputLabel children={child} required={required} />
      );

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .text()
          .substr(-1)
      ).not.toEqual("*");
    });
  });

  describe("weight prop", () => {
    it("applies weight class name on label element with a valid weight", () => {
      const weight = "bold";
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel children={child} weight={weight} />);

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .hasClass(weight)
      ).toEqual(true);
    });

    it("gives an error when given an invalid weight", () => {
      const weight = "heavy";
      const child = <div>it's a label</div>;
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<InputLabel children={child} weight={weight} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
