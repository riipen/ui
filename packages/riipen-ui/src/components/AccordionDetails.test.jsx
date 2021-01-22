import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import AccordionDetails from "./AccordionDetails";

describe("AccordianDetails", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders without errors", () => {
    let error;
    try {
      mount(<AccordionDetails />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("snapshot test", () => {
    const wrapper = mount(<AccordionDetails />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("displays children", () => {
      const child = <h5>Accordian Details</h5>;
      const wrapper = mount(<AccordionDetails children={child} />);

      expect(wrapper.contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of AccordianDetails", () => {
      const classes = ["classOne", "classTwo"];

      const wrapper = mount(<AccordionDetails classes={classes} />);

      expect(
        wrapper
          .find("AccordionDetails")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
      expect(
        wrapper
          .find("AccordionDetails")
          .childAt(0)
          .hasClass(classes[1])
      ).toEqual(true);
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<AccordionDetails classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
