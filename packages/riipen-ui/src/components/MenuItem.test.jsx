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
      const defaultProps = new MenuItem().type.defaultProps;

      const wrapper = mount(<MenuItem />);

      const component = wrapper.find("MenuItem");
      expect(component.props().color).toEqual(defaultProps.color);
    });
  });

  describe("children prop", () => {
    it("pass given children into children prop of ListItem", () => {
      const child = <h1>hello hello</h1>;

      const wrapper = mount(<MenuItem children={child} />);

      expect(
        wrapper
          .find("MenuItem")
          .find("ListItem")
          .props().children
      ).toEqual(child);
    });
  });

  describe("classes prop", () => {
    it("passes given classes into classes prop of ListItem", () => {
      const classes = ["classOne"];

      const wrapper = mount(<MenuItem classes={classes} />);

      expect(
        wrapper
          .find("MenuItem")
          .find("ListItem")
          .props().classes[0]
      ).toContain(classes[0]);
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
    it("passes valid custom colour into ListItem", () => {
      const color = "secondary";

      const wrapper = mount(<MenuItem color={color} />);

      expect(wrapper.find("ListItem").props().color).toEqual(color);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<MenuItem color="yellow" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("disabled prop", () => {
    it("applies disabled class to ListItem when disabled prop is true", () => {
      const disabled = true;

      const wrapper = mount(<MenuItem disabled={disabled} />);

      expect(
        wrapper
          .find("MenuItem")
          .find("ListItem")
          .props().classes[0]
      ).toContain("disabled");
    });

    it("does not apply disabled class when disabled prop is false", () => {
      const disabled = false;

      const wrapper = mount(<MenuItem disabled={disabled} />);

      expect(
        wrapper
          .find("MenuItem")
          .find("ListItem")
          .props().classes[0]
      ).not.toContain("disabled");
    });
  });

  describe("onClick prop", () => {
    it("invokes onClick handler when ListItem is clicked", () => {
      const handler = jest.fn();

      const wrapper = mount(<MenuItem onClick={handler} />);

      wrapper
        .find("MenuItem")
        .find("ListItem")
        .simulate("click");

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("does not invoke onClick handler when ListItem is clicked and disabled prop is true", () => {
      const disabled = true;
      const handler = jest.fn();

      const wrapper = mount(<MenuItem disabled={disabled} onClick={handler} />);

      wrapper
        .find("MenuItem")
        .find("ListItem")
        .simulate("click");

      expect(handler).not.toHaveBeenCalled();
    });

    it("invokes onClick handler when ListItem is clicked and disabled prop is false", () => {
      const disabled = false;
      const handler = jest.fn();

      const wrapper = mount(<MenuItem disabled={disabled} onClick={handler} />);

      wrapper
        .find("MenuItem")
        .find("ListItem")
        .simulate("click");

      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe("selected prop", () => {
    it("applies seleted class to ListItem when selected prop is true", () => {
      const selected = true;

      const wrapper = mount(<MenuItem selected={selected} />);

      expect(
        wrapper
          .find("MenuItem")
          .find("ListItem")
          .props().classes[0]
      ).toContain("selected");
    });

    it("does not apply selected class to ListItem when selected prop is false", () => {
      const selected = false;

      const wrapper = mount(<MenuItem selected={selected} />);

      expect(
        wrapper
          .find("MenuItem")
          .find("ListItem")
          .props().classes[0]
      ).not.toContain("selected");
    });
  });
});
