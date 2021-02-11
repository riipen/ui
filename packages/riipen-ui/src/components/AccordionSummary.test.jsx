import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import AccordionSummary from "./AccordionSummary";

const Icon = <FontAwesomeIcon icon={faChevronDown} />;

describe("<AccordionSummary>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<AccordionSummary />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<AccordionSummary />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("sets correct default props", () => {
    const wrapper = mount(<AccordionSummary />);

    expect(wrapper.find("AccordionSummary").props().classes).toEqual([]);
    expect(wrapper.find("AccordionSummary").props().iconProps).toEqual({});
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>A child</div>;

      const wrapper = mount(<AccordionSummary>{child}</AccordionSummary>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<AccordionSummary classes={classes} />);

      expect(
        wrapper
          .find("AccordionSummary")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("icon prop", () => {
    it("renders icon given valid custom icon prop", () => {
      const icon = Icon;

      const wrapper = mount(<AccordionSummary icon={icon} />);

      expect(wrapper.find(".icon").type()).toEqual("div");
    });
  });

  describe("iconProps prop", () => {
    it("passes given iconProp attributes to icon prop", () => {
      const icon = Icon;
      const iconProps = { size: "small" };

      const wrapper = mount(
        <AccordionSummary icon={icon} iconProps={iconProps} />
      );

      expect(wrapper.find("ButtonIcon").props().size).toEqual(iconProps.size);
    });
  });
});
