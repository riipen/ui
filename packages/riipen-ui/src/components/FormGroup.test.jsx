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

  it("renders correct snapshot", () => {
    const wrapper = mount(<FormGroup />);

    expect(toJson(wrapper)).toMatchSnapshot();
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

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-formgroup"];

      const wrapper = mount(<FormGroup />);

      expect(wrapper.find("FormGroup").props().classes).toEqual(classes.sort());
    });
  });

  describe("title prop", () => {
    it("renders given title", () => {
      const title = "Title";

      const wrapper = mount(<FormGroup title={title} />);

      expect(wrapper.containsMatchingElement(title)).toBeTruthy();
    });
  });

  describe("subtitle prop", () => {
    it("renders given subtitle", () => {
      const subtitle = "Subtitle";

      const wrapper = mount(<FormGroup subtitle={subtitle} />);

      expect(wrapper.containsMatchingElement(subtitle)).toBeTruthy();
    });
  });
});
