import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import MenuItem from "./MenuItem.jsx";

describe("<MenuItem>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<MenuItem />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<MenuItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<MenuItem />);

      const component = wrapper.find("MenuItem");
      expect(component.props().classes).toEqual(["riipen", "riipen-menuitem"]);
    });
  });

  describe("children prop", () => {
    it("render given children", () => {
      const child = <div>hello hello</div>;

      const wrapper = mount(<MenuItem>{child}</MenuItem>);

      expect(
        wrapper
          .find("MenuItem")
          .childAt(0)
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("passes given classes into classes prop of ListItem", () => {
      const classes = ["classOne"];

      const wrapper = mount(<MenuItem classes={classes} />);

      expect(
        wrapper
          .find("MenuItem")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-menuitem"];

      const wrapper = mount(<MenuItem />);

      expect(
        wrapper
          .find("MenuItem")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<MenuItem classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("sets color class name with valid custom color", () => {
      const color = "primary";

      const wrapper = mount(<MenuItem color={color} />);

      expect(
        wrapper
          .find("MenuItem")
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("throws an error with with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<MenuItem color="star" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("sets disabled class name with valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<MenuItem disabled={disabled} />);

      expect(
        wrapper
          .find("MenuItem")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });
  });

  describe("onSelect prop", () => {
    it("invokes onSelect handler when ListItem is clicked", () => {
      const handler = jest.fn();

      const wrapper = mount(<MenuItem onSelect={handler} />);

      wrapper.find("MenuItem").simulate("click");

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("does not invoke onSelect handler when ListItem is clicked and disabled prop is true", () => {
      const disabled = true;
      const handler = jest.fn();

      const wrapper = mount(
        <MenuItem disabled={disabled} onSelect={handler} />
      );

      wrapper.find("MenuItem").simulate("click");

      expect(handler).not.toHaveBeenCalled();
    });

    it("invokes onSelect handler when ListItem is clicked and disabled prop is false", () => {
      const disabled = false;
      const handler = jest.fn();

      const wrapper = mount(
        <MenuItem disabled={disabled} onSelect={handler} />
      );

      wrapper.find("MenuItem").simulate("click");

      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe("selected prop", () => {
    it("applies seleted class when selected prop is true", () => {
      const selected = true;

      const wrapper = mount(<MenuItem selected={selected} />);

      expect(
        wrapper
          .find("MenuItem")
          .childAt(0)
          .hasClass("selected")
      ).toEqual(true);
    });

    it("does not apply selected class when selected prop is false", () => {
      const selected = false;

      const wrapper = mount(<MenuItem selected={selected} />);

      expect(
        wrapper
          .find("MenuItem")
          .childAt(0)
          .hasClass("selected")
      ).toEqual(false);
    });
  });
});
