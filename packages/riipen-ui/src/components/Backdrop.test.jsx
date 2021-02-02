import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Backdrop from "./Backdrop";

describe("<Backdrop>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Backdrop />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Backdrop />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("has given child", () => {
      const child = <h1>The children prop</h1>;

      const wrapper = mount(<Backdrop children={child} />);

      expect(
        wrapper
          .find("Backdrop")
          .children()
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of Backdrop", () => {
      const classes = ["classOne", "classTwo"];

      const wrapper = mount(<Backdrop classes={classes} />);

      expect(
        wrapper
          .find("Backdrop")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
      expect(
        wrapper
          .find("Backdrop")
          .childAt(0)
          .hasClass(classes[1])
      ).toEqual(true);
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Backdrop classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
