import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Banner from "./Banner.jsx";

describe("<Banner>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Banner />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Banner />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <h5>hi hi</h5>;

      const wrapper = mount(<Banner children={child} />);

      expect(
        wrapper
          .find("Banner")
          .childAt(0)
          .contains(child)
      ).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the div inside of Banner", () => {
      const classes = ["classOne", "classTwo"];

      const wrapper = mount(<Banner classes={classes} />);

      expect(
        wrapper
          .find("Banner")
          .childAt(0)
          .find("div")
          .hasClass(classes[0])
      ).toEqual(true);
      expect(
        wrapper
          .find("Banner")
          .childAt(0)
          .find("div")
          .hasClass(classes[1])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-banner"];

      const wrapper = mount(<Banner />);

      expect(
        wrapper
          .find("Banner")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Banner classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("height prop", () => {
    it("sets the div inside Banner to a given height", () => {
      const height = "50px";

      const wrapper = mount(<Banner height={height} />);

      expect(
        wrapper
          .find("Banner")
          .childAt(0)
          .props().style.height
      ).toEqual(height);
    });

    it("gives an error when height is not given as a string", () => {
      const height = 50;
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Banner height={height} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("src prop", () => {
    it("sets background image with given src value", () => {
      const src = "/static/images/banners/folders.jpg";

      const wrapper = mount(<Banner src={src} />);

      expect(
        wrapper
          .find("Banner")
          .childAt(0)
          .props().style.backgroundImage
      ).toContain(src);
    });
  });

  describe("tint prop", () => {
    it("applies tint class name given valid tint", () => {
      const tint = "tertiary";

      const wrapper = mount(<Banner tint={tint} />);

      expect(
        wrapper
          .find("Banner")
          .childAt(0)
          .find("div")
          .hasClass(tint)
      ).toEqual(true);
    });

    it("gives an error when given an invalid tint", () => {
      const tint = "hi hi hi";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Banner tint={tint} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
