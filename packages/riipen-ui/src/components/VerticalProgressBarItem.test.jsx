import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import VerticalProgressBarItem from "./VerticalProgressBarItem";

describe("<VerticalProgressBarItem>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<VerticalProgressBarItem />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<VerticalProgressBarItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <span>this is a child</span>;

      const wrapper = mount(
        <VerticalProgressBarItem>{child}</VerticalProgressBarItem>
      );

      expect(wrapper.text()).toContain("this is a child");
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of VerticalProgressBarItem", () => {
      const classes = ["classOne"];

      const wrapper = mount(<VerticalProgressBarItem classes={classes} />);

      expect(
        wrapper
          .find("VerticalProgressBarItem")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-verticalprogressbaritem"];

      const wrapper = mount(<VerticalProgressBarItem />);

      expect(
        wrapper
          .find("VerticalProgressBarItem")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<VerticalProgressBarItem classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("renders given color", () => {
      const color = "positive";
      const wrapper = mount(<VerticalProgressBarItem color={color} />);

      expect(wrapper.find(".positive")).toHaveLength(1);
    });
  });

  describe("icon prop", () => {
    it("renders an icon", () => {
      const icon = <span />;
      const wrapper = mount(<VerticalProgressBarItem icon={icon} />);

      expect(wrapper.find("FontAwesomeIcon")).toHaveLength(1);
    });

    it("does not render an icon if not provided", () => {
      const wrapper = mount(<VerticalProgressBarItem />);

      expect(wrapper.find("FontAwesomeIcon")).toHaveLength(0);
    });
  });

  describe("bar prop", () => {
    it("passes correct class when bar and color provided", () => {
      const color = "positive";
      const wrapper = mount(<VerticalProgressBarItem color={color} />);

      expect(wrapper.find(".progress-positive")).toHaveLength(1);
    });

    it("has correct classes when bar ", () => {
      const wrapper = mount(<VerticalProgressBarItem bar={false} />);

      expect(wrapper.find(".progress-none")).toHaveLength(1);
    });
  });
});
