import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import ProgressBar from "./ProgressBar.jsx";

describe("<ProgressBar>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<ProgressBar />);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(undefined);
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new ProgressBar().type.defaultProps;

      const wrapper = mount(<ProgressBar />);

      const component = wrapper.find("ProgressBar");
      expect(component.props().color).toEqual(defaultProps.color);
      expect(component.props().completion).toEqual(defaultProps.completion);
      expect(component.props().unfilled).toEqual(defaultProps.unfilled);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the progress element", () => {
      const classes = ["classOne"];

      const wrapper = mount(<ProgressBar classes={classes} />);

      expect(
        wrapper
          .find("ProgressBar")
          .find("progress")
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-progressbar"];

      const wrapper = mount(<ProgressBar />);

      expect(
        wrapper
          .find("ProgressBar")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ProgressBar classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("applies valid custom colour class to the progress element", () => {
      const color = "secondary";

      const wrapper = mount(<ProgressBar color={color} />);

      expect(
        wrapper
          .find("ProgressBar")
          .find("progress")
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ProgressBar color="yellow" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("unfilled prop", () => {
    it("applies valid custom unfilled class to the progress element", () => {
      const unfilled = "dark";

      const wrapper = mount(<ProgressBar unfilled={unfilled} />);

      expect(
        wrapper
          .find("ProgressBar")
          .find("progress")
          .hasClass(unfilled)
      ).toEqual(true);
    });

    it("gives an error with invalid unfilled value", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ProgressBar color="white" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("completion prop", () => {
    it("passes given completion value into the progress element", () => {
      const completion = 0.5;

      const wrapper = mount(<ProgressBar completion={completion} />);

      expect(
        wrapper
          .find("ProgressBar")
          .find("progress")
          .props().value
      ).toEqual(completion);
    });
  });
});
