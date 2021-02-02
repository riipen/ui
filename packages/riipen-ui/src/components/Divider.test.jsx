import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Divider from "./Divider";

describe("<Divider>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Divider />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Divider />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Divider().type.defaultProps;

      const wrapper = mount(<Divider />);

      const component = wrapper.find("Divider");
      expect(component.props().variant).toEqual(defaultProps.variant);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the root node of Divider", () => {
      const classes = ["classOne", "classTwo"];

      const wrapper = mount(<Divider classes={classes} />);

      expect(
        wrapper
          .find("Divider")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
      expect(
        wrapper
          .find("Divider")
          .childAt(0)
          .hasClass(classes[1])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-divider"];

      const wrapper = mount(<Divider />);

      expect(
        wrapper
          .find("Divider")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Divider classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with a valid variant", () => {
      const variant = "middle";

      const wrapper = mount(<Divider variant={variant} />);

      expect(
        wrapper
          .find("Divider")
          .childAt(0)
          .hasClass(variant)
      ).toEqual(true);
    });

    it("gives an error when given an invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const variant = "somethingInvalid";

      mount(<Divider variant={variant} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
