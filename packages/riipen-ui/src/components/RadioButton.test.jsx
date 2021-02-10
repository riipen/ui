import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RadioButton from "./RadioButton";

const icon = i => <FontAwesomeIcon icon={i} />;

describe("<RadioButton>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<RadioButton />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<RadioButton />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("checked prop", () => {
    it("sets element's class name or prop value when checked is true", () => {
      const checked = true;

      const wrapper = mount(<RadioButton checked={checked} readOnly />);

      expect(
        wrapper
          .find("RadioButton")
          .childAt(0)
          .hasClass("checked")
      ).toEqual(true);
      expect(wrapper.find("label").hasClass("checked")).toEqual(true);
      expect(wrapper.find("input").props().checked).toEqual(checked);
      expect(wrapper.find("Typography").props().color).toEqual("initial");
    });

    it("sets color as grey600 when checked is false", () => {
      const checked = false;

      const wrapper = mount(<RadioButton checked={checked} readOnly />);

      expect(wrapper.find("Typography").props().color).toEqual("grey600");
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<RadioButton classes={classes} />);

      expect(
        wrapper
          .find("RadioButton")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-radiobutton"];

      const wrapper = mount(<RadioButton />);

      expect(
        wrapper
          .find("RadioButton")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("disabled prop", () => {
    it("sets element's class name or disabled value when disabled is true", () => {
      const disabled = true;

      const wrapper = mount(<RadioButton disabled={disabled} readOnly />);

      expect(
        wrapper
          .find("RadioButton")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
      expect(wrapper.find("label").hasClass("disabled")).toEqual(true);
      expect(wrapper.find("input").props().disabled).toEqual(disabled);
    });
  });

  describe("id prop", () => {
    it("sets custom id", () => {
      const id = "Test";

      const wrapper = mount(<RadioButton id={id} readOnly />);

      expect(wrapper.find("input").props().id).toEqual(id);
      expect(wrapper.find("label").props().htmlFor).toEqual(id);
    });
  });

  describe("label prop", () => {
    it("sets custom label", () => {
      const label = "Test";

      const wrapper = mount(<RadioButton label={label} readOnly />);

      expect(wrapper.text()).toEqual(label);
      expect(
        wrapper
          .find(".content")
          .children()
          .contains(label)
      ).toEqual(true);
    });
  });

  describe("prefix prop", () => {
    it("sets custom prefix", () => {
      const prefix = icon(faFlag);

      const wrapper = mount(<RadioButton prefix={prefix} readOnly />);

      expect(
        wrapper
          .find(".content")
          .children()
          .contains(prefix)
      ).toEqual(true);
    });
  });

  describe("suffix prop", () => {
    it("sets custom suffix", () => {
      const suffix = icon(faFlag);

      const wrapper = mount(<RadioButton suffix={suffix} readOnly />);

      expect(
        wrapper
          .find(".content")
          .children()
          .contains(suffix)
      ).toEqual(true);
    });
  });
});
