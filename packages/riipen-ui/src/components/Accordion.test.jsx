import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Accordion from "./Accordion";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

describe("<Accordion>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Accordion>
          <AccordionDetails />
        </Accordion>
      );
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(
      <Accordion>
        <AccordionSummary />
        <AccordionDetails />
      </Accordion>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(
        <Accordion>
          <AccordionDetails />
        </Accordion>
      );

      expect(wrapper.find("Accordion").props().classes).toEqual([]);
      expect(wrapper.find("Accordion").props().defaultExpanded).toEqual(false);
      expect(wrapper.find("Accordion").props().disabled).toEqual(false);
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <AccordionDetails>hello</AccordionDetails>;

      const wrapper = mount(<Accordion>{child}</Accordion>);

      expect(wrapper.find("Accordion").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <Accordion classes={classes}>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("defaultExpanded prop", () => {
    it("applies explanded class to root given defaultExpanded is true", () => {
      const defaultExpanded = true;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("expanded")
      ).toEqual(true);
    });

    it("does not apply explanded class to root given defaultExpanded is false", () => {
      const defaultExpanded = false;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("expanded")
      ).toEqual(false);
    });

    it("sets expanded class with given defaultExpanded", () => {
      const defaultExpanded = true;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      expect(wrapper.find("Collapse").props().in).toEqual(defaultExpanded);
    });
  });

  describe("expanded state", () => {
    it("sets correct expanded class to root when summary is clicked", () => {
      const defaultExpanded = true;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>
          <AccordionSummary>summary</AccordionSummary>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      wrapper.find("AccordionSummary").simulate("click");

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("expanded")
      ).toEqual(false);
    });

    it("sets correct expanded class to Collaspe element when summary is clicked", () => {
      const defaultExpanded = true;

      const wrapper = mount(
        <Accordion defaultExpanded={defaultExpanded}>
          <AccordionSummary>summary</AccordionSummary>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      wrapper.find("AccordionSummary").simulate("click");

      expect(wrapper.find("Collapse").props().in).toEqual(!defaultExpanded);
    });
  });

  describe("disabled prop", () => {
    it("applies disabled class name when disabled is true", () => {
      const disabled = true;

      const wrapper = mount(
        <Accordion disabled={disabled}>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("applies disabled class name when disabled is false", () => {
      const disabled = false;

      const wrapper = mount(
        <Accordion disabled={disabled}>
          <AccordionDetails>hello</AccordionDetails>
        </Accordion>
      );

      expect(
        wrapper
          .find("Accordion")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(false);
    });
  });
});
