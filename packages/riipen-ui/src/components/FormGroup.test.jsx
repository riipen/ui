import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import FormGroup from "./FormGroup";

describe("<FormGroup>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<FormGroup />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  describe("snapshot test", () => {
    it("renders correctly", () => {
      const wrapper = mount(<FormGroup />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<FormGroup>{child}</FormGroup>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<FormGroup classes={classes} />);

      expect(
        wrapper
          .find("FormGroup")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to default classes prop with withClass decorator", () => {
      const wrapper = mount(<FormGroup />);

      expect(wrapper.find("FormGroup").props().classes).toEqual([
        "riipen",
        "riipen-formgroup"
      ]);
    });
  });

  describe("title prop", () => {
    it("renders given title", () => {
      const title = <FormGroup title="Title" />;

      const wrapper = mount(<FormGroup>{title}</FormGroup>);

      expect(wrapper.containsMatchingElement(title)).toBeTruthy();
    });
  });

  describe("subtitle prop", () => {
    it("renders given subtitle", () => {
      const subtitle = <FormGroup subtitle="Subtitle" />;

      const wrapper = mount(<FormGroup>{subtitle}</FormGroup>);

      expect(wrapper.containsMatchingElement(subtitle)).toBeTruthy();
    });
  });
});
