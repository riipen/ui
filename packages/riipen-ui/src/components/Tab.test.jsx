import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Tab from "./Tab";

describe("<Tab>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Tab />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Tab />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Tab />);

      expect(wrapper.find("Tab").props().active).toEqual(false);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Tab classes={classes} />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });
});
