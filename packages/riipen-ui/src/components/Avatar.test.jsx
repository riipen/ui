import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Avatar from "./Avatar";

describe("<Avatar>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<Avatar />);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(undefined);
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Avatar />);

      expect(wrapper.find("Avatar").props().size).toEqual("96px");
      expect(wrapper.find("Avatar").props().variant).toEqual("circle");

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("appends higher order values to default classes prop with withClass decorator", () => {
      const wrapper = mount(<Avatar />);

      expect(wrapper.find("Avatar").props().classes).toEqual([
        "riipen",
        "riipen-avatar"
      ]);
    });
  });

  describe("alt prop", () => {
    it("sets inner class name given custom alt props", () => {
      const altVariant = "Test String";

      const wrapper = mount(<Avatar alt={altVariant} />);

      expect(
        wrapper
          .find(".avatar")
          .childAt(0)
          .hasClass("inner")
      ).toEqual(true);
      expect(wrapper.find("Avatar").props().alt).toEqual(altVariant);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const initials = "ZZ";
      const child = <div>{initials}</div>;

      const wrapper = mount(<Avatar>{child}</Avatar>);

      expect(
        wrapper
          .find(".inner")
          .children()
          .contains(child)
      ).toEqual(true);
      expect(
        wrapper
          .find(".inner")
          .childAt(0)
          .text()
      ).toEqual(initials);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classVariant = ["newClass"];

      const wrapper = mount(<Avatar classes={classVariant} />);

      expect(
        wrapper
          .find("Avatar")
          .childAt(0)
          .hasClass(classVariant[0])
      ).toEqual(true);
    });
  });

  describe("size prop", () => {
    it("sets valid custom size", () => {
      const sizeVariant = "50px";

      const wrapper = mount(<Avatar size={sizeVariant} />);

      expect(wrapper.find("Avatar").props().size).toEqual(sizeVariant);
    });

    it("sets valid border size above 70", () => {
      const sizeVariant = "75px";

      const wrapper = mount(<Avatar size={sizeVariant} />);

      expect(
        wrapper
          .find("Avatar")
          .instance()
          .getBorderSize()
      ).toEqual("4px");
    });

    it("sets valid border size below 70", () => {
      const sizeVariant = "65px";

      const wrapper = mount(<Avatar size={sizeVariant} />);

      expect(
        wrapper
          .find("Avatar")
          .instance()
          .getBorderSize()
      ).toEqual("2px");
    });
  });

  describe("src prop", () => {
    it("sets image class name given custom alt and src props", () => {
      const altVariant = "Test String";
      const srcVariant = "/static/images/avatars/jordan-ell.png";

      const wrapper = mount(<Avatar alt={altVariant} src={srcVariant} />);

      expect(
        wrapper
          .find(".avatar")
          .childAt(0)
          .hasClass("image")
      ).toEqual(true);
      expect(wrapper.find("Avatar").props().src).toEqual(srcVariant);
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with valid custom variant", () => {
      const variant = "rounded";

      const wrapper = mount(<Avatar variant={variant} />);

      expect(wrapper.find("Avatar").props().variant).toEqual(variant);
      expect(
        wrapper
          .find("Avatar")
          .childAt(0)
          .hasClass(variant)
      ).toEqual(true);
    });

    it("throws an error with with invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Avatar variant="star" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
