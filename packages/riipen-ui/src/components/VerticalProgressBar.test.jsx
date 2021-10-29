import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import VerticalProgressBar from "./VerticalProgressBar";
import VerticalProgressBarItem from "./VerticalProgressBarItem";

describe("<VerticalProgressBar>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<VerticalProgressBar />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<VerticalProgressBar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <span>this is a child</span>;

      const wrapper = mount(<VerticalProgressBar>{child}</VerticalProgressBar>);

      expect(wrapper.text()).toContain("this is a child");
    });

    it("passes bar = false to last child", () => {
      const children = [
        <VerticalProgressBarItem key="1" />,
        <VerticalProgressBarItem key="2" />
      ];

      const wrapper = mount(
        <VerticalProgressBar>{children}</VerticalProgressBar>
      );

      expect(
        wrapper
          .find("VerticalProgressBarItem")
          .at(1)
          .props().bar
      ).toBe(false);
    });

    it("does not pass bar to non-last child", () => {
      const children = [
        <VerticalProgressBarItem key="1" />,
        <VerticalProgressBarItem key="2" />
      ];

      const wrapper = mount(
        <VerticalProgressBar>{children}</VerticalProgressBar>
      );

      expect(
        wrapper
          .find("VerticalProgressBarItem")
          .at(0)
          .props().bar
      ).toBe(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of VerticalProgressBar", () => {
      const classes = ["classOne"];

      const wrapper = mount(<VerticalProgressBar classes={classes} />);

      expect(
        wrapper
          .find("VerticalProgressBar")
          .childAt(0)
          .props().classes
      ).toContain(classes[0]);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-verticalprogressbar"];

      const wrapper = mount(<VerticalProgressBar />);

      expect(
        wrapper
          .find("VerticalProgressBar")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<VerticalProgressBar classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
