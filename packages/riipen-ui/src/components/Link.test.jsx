import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Link from "./Link.jsx";

describe("<Link>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Link href="google.com">
          <span>link</span>
        </Link>
      );
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(
      <Link href="google.com">
        <span>link</span>
      </Link>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(
        <Link href="google.com">
          <span>link</span>
        </Link>
      );

      const component = wrapper.find("Link");
      expect(component.props().classes).toEqual([]);
      expect(component.props().color).toEqual("primary");
      expect(component.props().component).toEqual("a");
      expect(component.props().underline).toEqual("none");
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <span>link</span>;

      const wrapper = mount(<Link href="google.com">{child}</Link>);

      expect(wrapper.find("Link").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <Link classes={classes} href="google.com">
          <span>link</span>
        </Link>
      );

      expect(
        wrapper
          .find("Link")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("applies valid custom color class", () => {
      const color = "negative";

      const wrapper = mount(
        <Link color={color} href="google.com">
          <span>link</span>
        </Link>
      );

      expect(
        wrapper
          .find("Link")
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(
        <Link color="pink" href="google.com">
          <span>link</span>
        </Link>
      );

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("component prop", () => {
    it("sets custom component", () => {
      const component = "div";

      const wrapper = mount(
        <Link component={component} href="google.com">
          <span>link</span>
        </Link>
      );

      expect(
        wrapper
          .find("Link")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcd";

      mount(
        <Link component={component} href="google.com">
          <span>link</span>
        </Link>
      );

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("focusVisible state", () => {
    it("applies focusVisible class when focus event occurs", () => {
      const wrapper = mount(
        <Link href="google.com">
          <span>link</span>
        </Link>
      );

      wrapper.find("a").invoke("onFocus")({});

      expect(
        wrapper
          .find("Link")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("does not apply focusVisible class when blur event occurs", () => {
      const wrapper = mount(
        <Link href="google.com">
          <span>link</span>
        </Link>
      );

      wrapper.find("a").invoke("onFocus")({});
      wrapper.find("a").invoke("onBlur")();

      expect(
        wrapper
          .find("Link")
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });
});
