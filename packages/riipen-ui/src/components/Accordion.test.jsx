import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Accordion from "./Accordion";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

describe("<Accordion>", () => {
  it("renders without errors", () => {
    let error;
    const child = <AccordionDetails />;

    try {
      mount(<Accordion>{child}</Accordion>);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const summary = <AccordionSummary />;
    const child = <AccordionDetails />;

    const wrapper = mount(
      <Accordion>
        {summary}
        {child}
      </Accordion>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const child = <AccordionDetails />;

      const wrapper = mount(<Accordion>{child}</Accordion>);

      expect(wrapper.find("Accordion").props().defaultExpanded).toEqual(false);
      expect(wrapper.find("Accordion").props().disabled).toEqual(false);
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(<Accordion>{child}</Accordion>);

      expect(wrapper.find("AccordionDetails").props().children).toEqual(
        "hello"
      );
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(<Accordion classes={classes}>{child}</Accordion>);

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("defaultExpanded prop", () => {
    it("sets expanded class with given defaultExpanded", () => {
      const defaultExpanded = true;
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>{child}</Accordion>
      );

      expect(wrapper.find("Collapse").props().in).toEqual(defaultExpanded);
      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("expanded")
      ).toEqual(true);
    });
  });

  describe("expanded state", () => {
    it("sets correct expanded class when summary is clicked", () => {
      const defaultExpanded = true;
      const summary = <AccordionSummary>summary</AccordionSummary>;
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>
          {summary}
          {child}
        </Accordion>
      );

      wrapper.find("AccordionSummary").simulate("click");

      expect(wrapper.find("Collapse").props().in).toEqual(!defaultExpanded);
      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("expanded")
      ).toEqual(false);
    });
  });

  describe("disabled prop", () => {
    it("applies disabled class when true", () => {
      const disabled = true;
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(<Accordion disabled={disabled}>{child}</Accordion>);

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("does not apply disabled class when false", () => {
      const disabled = false;
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(<Accordion disabled={disabled}>{child}</Accordion>);

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(false);
    });
  });
});
