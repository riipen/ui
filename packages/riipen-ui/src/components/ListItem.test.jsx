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
      expect(component.props().color).toEqual("primary");
      expect(component.props().classes).toEqual([]);
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

  describe("color prop", () => {
    it("applies valid custom color", () => {
      const color = "secondary";

      const wrapper = mount(<ListItem color={color} />);

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<ListItem color="pink" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("onClick prop", () => {
    it("sets role as button when onClick prop is provided", () => {
      const onClick = jest.fn();

      const wrapper = mount(<ListItem onClick={onClick} />);

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .props().role
      ).toEqual("button");
    });

    it("does not set role when onClick prop is not provided", () => {
      const wrapper = mount(<ListItem />);

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .props().role
      ).toEqual("");
    });

    it("invokes onClick handler when clicked", () => {
      const onClick = jest.fn();

      const wrapper = mount(<ListItem onClick={onClick} />);

      wrapper
        .find("ListItem")
        .childAt(0)
        .simulate("click");

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("invokes onClick handler on enter keydown", () => {
      const onClick = jest.fn();

      const wrapper = mount(<ListItem onClick={onClick} />);

      wrapper
        .find("ListItem")
        .childAt(0)
        .simulate("keydown", { key: "Enter" });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not invoke onClick handler on invalid keydown", () => {
      const onClick = jest.fn();

      const wrapper = mount(<ListItem onClick={onClick} />);

      wrapper
        .find("ListItem")
        .childAt(0)
        .simulate("keydown", { key: "a" });

      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe("focusVisible state", () => {
    it("applies focusVisible class when focus event occurs", () => {
      const wrapper = mount(<ListItem />);

      wrapper.simulate("focus");

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("does not apply focusVisible class when blur event occurs", () => {
      const wrapper = mount(<ListItem />);

      wrapper.simulate("focus");
      wrapper.simulate("blur");

      expect(
        wrapper
          .find("ListItem")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });
});
