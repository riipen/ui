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

  it("renders correct snapshot", () => {
    const wrapper = mount(<Avatar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Avatar().type.defaultProps;

      const wrapper = mount(<Avatar />);

      expect(wrapper.find("Avatar").props().size).toEqual(defaultProps.size);
      expect(wrapper.find("Avatar").props().variant).toEqual(
        defaultProps.variant
      );
    });
  });

  describe("alt prop", () => {
    it("renders an img tag with alt value", () => {
      const altVariant = "Test String";
      const srcVariant = "/static/images/avatars/jordan-ell.png";

      const wrapper = mount(<Avatar alt={altVariant} src={srcVariant} />);

      expect(wrapper.find("img").props().alt).toEqual(altVariant);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>ZZ</div>;

      const wrapper = mount(<Avatar>{child}</Avatar>);

      expect(
        wrapper
          .find(".inner")
          .children()
          .contains(child)
      ).toEqual(true);
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

    it("appends higher order values to classes prop with withClass decorator", () => {
      const wrapper = mount(<Avatar />);

      expect(wrapper.find("Avatar").props().classes).toEqual([
        "riipen",
        "riipen-avatar"
      ]);
    });
  });

  describe("size prop", () => {
    it("sets correct border size when size is above 70", () => {
      const sizeVariant = "75px";

      const wrapper = mount(<Avatar size={sizeVariant} />);

      expect(
        wrapper
          .find("Avatar")
          .instance()
          .getBorderSize()
      ).toEqual("4px");
    });

    it("sets correct border size when size is below 70", () => {
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
    it("renders an img tag with src value", () => {
      const srcVariant = "/static/images/avatars/jordan-ell.png";

      const wrapper = mount(<Avatar src={srcVariant} />);

      expect(wrapper.find("Avatar").find("img")).toHaveLength(1);
      expect(wrapper.find("img").props().src).toEqual(srcVariant);
    });
  });

  describe("variant prop", () => {
    it("sets variant class name with valid custom variant", () => {
      const variant = "rounded";

      const wrapper = mount(<Avatar variant={variant} />);

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
