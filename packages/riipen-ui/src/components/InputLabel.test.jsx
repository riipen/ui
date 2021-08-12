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

  describe("children prop", () => {
    it("renders given children inside the label and Typography element", () => {
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel>{child}</InputLabel>);

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .find("Typography")
          .contains(child)
      ).toEqual(true);
    });

    it("does not render label element when children is not given", () => {
      const wrapper = mount(<InputLabel />);

      expect(wrapper.find("InputLabel").find("label")).toHaveLength(0);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the label element when children is given", () => {
      const classes = ["classOne"];
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel classes={classes}>{child}</InputLabel>);

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
    it("passes color prop through to Typography", () => {
      const color = "white";
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel color={color}>{child}</InputLabel>);

      expect(
        wrapper
          .find("Typography")
          .at(0)
          .props().color
      ).toEqual(color);
    });

    it("applies color class to the InputHint element with a valid color", () => {
      const color = "black";
      const hint = "hint";

      const wrapper = mount(<InputLabel color={color} hint={hint} />);

      expect(wrapper.find("InputHint").props().color).toEqual(color);
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
        <InputLabel required={required}>{child}</InputLabel>
      );

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .text()
          .substr(-1)
      ).toEqual("*");
    });

    it("does not display an asterisk when required is false", () => {
      const child = <div>it's a label</div>;
      const required = false;

      const wrapper = mount(
        <InputLabel required={required}>{child}</InputLabel>
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

  describe("tooltip prop", () => {
    it("renders tooltip inside the label and Typography element", () => {
      const tooltip = <span>Tooltip</span>;

      const wrapper = mount(<InputLabel>{tooltip}</InputLabel>);

      expect(
        wrapper
          .find("InputLabel")
          .find("label")
          .find("Typography")
          .contains(tooltip)
      ).toEqual(true);
    });
  });

  describe("fontWeight prop", () => {
    it("Passes fontWeight to the underlying typography", () => {
      const fontWeight = "bold";
      const child = <div>it's a label</div>;

      const wrapper = mount(
        <InputLabel fontWeight={fontWeight}>{child}</InputLabel>
      );

      expect(
        wrapper
          .find("Typography")
          .at(0)
          .props().fontWeight
      ).toEqual(fontWeight);
    });
  });

  describe("variant prop", () => {
    it("Passes variant to the underlying typography", () => {
      const variant = "h4";
      const child = <div>it's a label</div>;

      const wrapper = mount(<InputLabel variant={variant}>{child}</InputLabel>);

      expect(
        wrapper
          .find("Typography")
          .at(0)
          .props().variant
      ).toEqual(variant);
    });
  });
});
