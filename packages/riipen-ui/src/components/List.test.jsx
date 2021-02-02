import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import List from "./List";

describe("<List>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<List />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  describe("snapshot test", () => {
    it("renders correctly", () => {
      const wrapper = mount(<List />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<List>{child}</List>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<List classes={classes} />);

      expect(
        wrapper
          .find("List")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to default classes prop with withClass decorator", () => {
      const wrapper = mount(<List />);

      expect(wrapper.find("List").props().classes).toEqual([
        "riipen",
        "riipen-list"
      ]);
    });
  });
});
