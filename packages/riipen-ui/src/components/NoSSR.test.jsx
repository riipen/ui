import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import NoSSR from "./NoSSR.jsx";

describe("<NoSSR>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<NoSSR />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<NoSSR />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default prop", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<NoSSR />);

      const component = wrapper.find("NoSSR");
      expect(component.props().fallback).toEqual(null);
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <span>pizzas</span>;

      const wrapper = mount(<NoSSR>{child}</NoSSR>);

      expect(wrapper.contains(child)).toEqual(true);
    });

    it("renders children over fallback when mounted", () => {
      const child = <span>pizzas</span>;
      const fallback = <span>fallback</span>;

      const wrapper = mount(<NoSSR fallback={fallback}>{child}</NoSSR>);

      wrapper.setState({ mounted: true });

      expect(wrapper.contains(child)).toEqual(true);
      expect(wrapper.contains(fallback)).toEqual(false);
    });
  });

  describe("fallback prop", () => {
    it("renders fallback over children when mounted is false", () => {
      const child = <span>pizzas</span>;
      const fallback = <span>fallback</span>;

      const wrapper = mount(<NoSSR fallback={fallback}>{child}</NoSSR>);

      wrapper.setState({ mounted: false });

      expect(wrapper.contains(child)).toEqual(false);
      expect(wrapper.contains(fallback)).toEqual(true);
    });
  });
});
