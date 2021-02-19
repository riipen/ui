import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import ClickAway from "./ClickAway";

describe("<ClickAway>", () => {
  it("renders without errors", () => {
    let error;
    const onClickAway = jest.fn();

    try {
      mount(<ClickAway onClickAway={onClickAway} />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const onClickAway = jest.fn();

    const wrapper = mount(<ClickAway onClickAway={onClickAway} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders given non null children nodes", () => {
      const child = <span>cheesecakes</span>;
      const onClickAway = jest.fn();

      const wrapper = mount(
        <ClickAway onClickAway={onClickAway}>
          {null}
          {child}
        </ClickAway>
      );

      const childrenNodes = wrapper
        .find("ClickAway")
        .childAt(0)
        .children();
      expect(childrenNodes.at(0).containsMatchingElement(child)).toEqual(true);
    });

    it("sets onClick prop of children node", () => {
      const child = <span>cheesecakes</span>;
      const onClickAway = jest.fn();

      const wrapper = mount(
        <ClickAway onClickAway={onClickAway}>{child}</ClickAway>
      );

      expect(
        wrapper
          .find("ClickAway")
          .find("span")
          .props().onClick
      ).toBeDefined();
    });
  });

  describe("onClickAway prop", () => {
    it("invokes onClickAway when div node is clicked", () => {
      const child = <span>cheesecakes</span>;
      const onClickAway = jest.fn();

      const wrapper = mount(
        <ClickAway onClickAway={onClickAway}>{child}</ClickAway>
      );

      wrapper
        .find("ClickAway")
        .find("div")
        .simulate("click");

      expect(onClickAway).toHaveBeenCalledTimes(1);
    });

    it("does not invoke onClickAway when children node is clicked", () => {
      const child = <span>cheesecakes</span>;
      const onClickAway = jest.fn();

      const wrapper = mount(
        <ClickAway onClickAway={onClickAway}>{child}</ClickAway>
      );

      wrapper
        .find("ClickAway")
        .find("div")
        .childAt(0)
        .simulate("click");

      expect(onClickAway).not.toHaveBeenCalled();
    });
  });
});
