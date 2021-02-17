import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Input from "./Input";
import Typography from "./Typography";
import InputLabel from "./InputLabel";

describe("<Input>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Input />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Input />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Input />);

      expect(wrapper.find("Input").props().disabled).toEqual(false);
      expect(wrapper.find("Input").props().multiline).toEqual(false);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Input classes={classes} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("disabled prop", () => {
    it("sets disabled class name with valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<Input disabled={disabled} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("sets valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<Input disabled={disabled} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .props().disabled
      ).toEqual(disabled);
    });
  });

  describe("error prop", () => {
    it("sets valid custom error", () => {
      const error = <span>Error</span>;

      const wrapper = mount(<Input error={error} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("error")
      ).toEqual(true);
    });

    it("renders error", () => {
      const error = <span>Error</span>;

      const wrapper = mount(<Input error={error} />);

      expect(
        wrapper
          .find("Input")
          .children()
          .contains(Typography)
      ).toEqual(true);
    });
  });

  describe("hint prop", () => {
    it("sets valid custom hint", () => {
      const hint = "Test";

      const wrapper = mount(<Input hint={hint} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .type()
      ).toEqual(InputLabel);
      expect(wrapper.find("InputLabel").props().hint).toEqual(hint);
    });
  });

  describe("label prop", () => {
    it("sets valid custom label", () => {
      const label = "Test";

      const wrapper = mount(<Input label={label} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .type()
      ).toEqual(InputLabel);
      expect(wrapper.text()).toEqual(label);
    });
  });

  describe("labelColor prop", () => {
    it("sets valid custom labelColor", () => {
      const hint = "Test";
      const labelColor = "black";

      const wrapper = mount(<Input hint={hint} labelColor={labelColor} />);

      expect(wrapper.find("InputLabel").props().color).toEqual(labelColor);
    });
  });

  describe("labelWeight prop", () => {
    it("sets valid custom labelWeight", () => {
      const hint = "Test";
      const labelWeight = "bold";

      const wrapper = mount(<Input hint={hint} labelWeight={labelWeight} />);

      expect(wrapper.find("InputLabel").props().weight).toEqual(labelWeight);
    });
  });

  describe("warning prop", () => {
    it("sets valid custom warning", () => {
      const warning = <span>Error</span>;

      const wrapper = mount(<Input warning={warning} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("warning")
      ).toEqual(true);
    });

    it("renders warning", () => {
      const warning = <span>Error</span>;

      const wrapper = mount(<Input warning={warning} />);

      expect(
        wrapper
          .find("Input")
          .children()
          .contains(Typography)
      ).toEqual(true);
    });
  });

  describe("focusVisible state", () => {
    it("sets correct class name when blur event occurs", () => {
      const wrapper = mount(<Input />);

      wrapper.simulate("focus");
      wrapper.simulate("blur");

      expect(wrapper.find("Input").hasClass("focusVisible")).toEqual(false);
    });
  });
});
