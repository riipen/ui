import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Spinner from "./Spinner";

describe("<Spinner>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Spinner />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Spinner />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Spinner().type.defaultProps;

      const wrapper = mount(<Spinner />);

      expect(wrapper.find("Spinner").props().color).toEqual(defaultProps.color);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Spinner>{child}</Spinner>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });

    it("does not display children when loading is true", () => {
      const child = <div>child</div>;
      const loading = true;

      const wrapper = mount(<Spinner loading={loading}>{child}</Spinner>);

      expect(wrapper.containsMatchingElement(child)).toBeFalsy();
    });
  });

  describe("color prop", () => {
    it("sets color class name with a valid color", () => {
      const color = "tertiary";
      const loading = true;

      const wrapper = mount(<Spinner color={color} loading={loading} />);

      expect(
        wrapper
          .find("Spinner")
          .childAt(0)
          .childAt(0)
          .hasClass(color)
      ).toBeTruthy();
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "blue";

      mount(<Spinner color={color} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("loading prop", () => {
    it("renders spinner given truthy loading prop", () => {
      const loading = true;

      const wrapper = mount(<Spinner loading={loading} />);

      expect(
        wrapper
          .find("Spinner")
          .childAt(0)
          .childAt(0)
          .hasClass("loader")
      ).toBeTruthy();
    });

    it("does not render spinner given falsey loading prop", () => {
      const loading = false;

      const wrapper = mount(<Spinner loading={loading} />);

      expect(
        wrapper
          .find("Spinner")
          .childAt(0)
          .hasClass("loader")
      ).toBeFalsy();
    });
  });
});
