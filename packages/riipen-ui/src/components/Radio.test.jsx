import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Radio from "./Radio";

describe("<Radio>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Radio readOnly />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Radio readOnly />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Radio().type.defaultProps;

      const wrapper = mount(<Radio readOnly />);

      expect(wrapper.find("Radio").props().checked).toEqual(
        defaultProps.checked
      );
      expect(wrapper.find("Radio").props().disabled).toEqual(
        defaultProps.disabled
      );
    });
  });

  describe("checked prop", () => {
    it("sets valid custom checked", () => {
      const checked = true;

      const wrapper = mount(<Radio checked={checked} readOnly />);

      expect(
        wrapper
          .find("Radio")
          .find("input")
          .props().checked
      ).toEqual(checked);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Radio classes={classes} readOnly />);

      expect(
        wrapper
          .find("Radio")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-radio"];

      const wrapper = mount(<Radio readOnly />);

      expect(wrapper.find("Radio").props().classes).toEqual(classes.sort());
    });
  });

  describe("color prop", () => {
    it("sets valid custom  color", () => {
      const color = "default";

      const wrapper = mount(<Radio color={color} readOnly />);

      expect(
        wrapper
          .find("Radio")
          .find("Typography")
          .childAt(0)
          .hasClass(color)
      ).toBeTruthy();
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "purple";

      mount(<Radio color={color} readOnly />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("renders radio as disabled when disabled prop is true", () => {
      const disabled = true;

      const wrapper = mount(<Radio disabled={disabled} readOnly />);

      expect(
        wrapper
          .find("Radio")
          .find("span")
          .hasClass("disabled")
      ).toBeTruthy();
    });

    it("renders radio with color when disabled prop is false", () => {
      const color = "primary";

      const wrapper = mount(<Radio color={color} readOnly />);

      expect(
        wrapper
          .find("Radio")
          .find("span")
          .hasClass(color)
      ).toBeTruthy();
      expect(
        wrapper
          .find("Radio")
          .find("span")
          .hasClass("disabled")
      ).toBeFalsy();
    });
  });

  describe("label prop", () => {
    it("renders custom label", () => {
      const label = "Pizza";

      const wrapper = mount(<Radio label={label} readOnly />);

      expect(
        wrapper
          .find("Radio")
          .find("label")
          .text()
      ).toEqual(label);
    });
  });
});
