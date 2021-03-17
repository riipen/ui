import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Toolbar from "./Toolbar.jsx";

describe("<Toolbar>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Toolbar />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Toolbar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given children inside the div element", () => {
      const child = <h5>hello</h5>;

      const wrapper = mount(<Toolbar>{child}</Toolbar>);

      expect(
        wrapper
          .find("Toolbar")
          .find("div")
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the div inside of Toolbar", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Toolbar classes={classes} />);

      expect(
        wrapper
          .find("Toolbar")
          .childAt(0)
          .find("div")
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-toolbar"];

      const wrapper = mount(<Toolbar />);

      expect(
        wrapper
          .find("Toolbar")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Toolbar classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
