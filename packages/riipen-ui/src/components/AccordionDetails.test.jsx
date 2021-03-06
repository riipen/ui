import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import AccordionDetails from "./AccordionDetails";

describe("AccordianDetails", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<AccordionDetails />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<AccordionDetails />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("displays children", () => {
      const child = <h5>Accordian Details</h5>;

      const wrapper = mount(<AccordionDetails>{child}</AccordionDetails>);

      expect(wrapper.contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of AccordianDetails", () => {
      const classes = ["classOne"];

      const wrapper = mount(<AccordionDetails classes={classes} />);

      expect(
        wrapper
          .find("AccordionDetails")
          .childAt(0)
          .hasClass(classes[0])
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
