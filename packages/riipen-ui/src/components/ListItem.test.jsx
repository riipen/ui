import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import ListItem from "./ListItem";

describe("<ListItem>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<ListItem />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<ListItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<ListItem />);

      const component = wrapper.find("ListItem");
      expect(component.props().classes).toEqual(["riipen", "riipen-listitem"]);
      expect(component.props().spacing).toEqual(2);
      expect(component.props().variant).toEqual("vertical");
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <div>childreeennn</div>;

      const wrapper = mount(<ListItem>{child}</ListItem>);

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies given classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<ListItem classes={classes} />);

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("spacing prop", () => {
    it("applies custom spacing", () => {
      const spacing = 5;

      const wrapper = mount(<ListItem spacing={spacing} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(25);
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with valid custom variant", () => {
      const variant = "horizontal";

      const wrapper = mount(<ListItem variant={variant} />);

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .hasClass(variant)
      ).toEqual(true);
    });

    it("throws an error with with invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ListItem variant="star" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
