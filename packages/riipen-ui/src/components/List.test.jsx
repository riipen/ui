import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import List from "./List";
import ListItem from "./ListItem";

describe("<List>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<List />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<List />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<List>{child}</List>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<List classes={classes} />);

      expect(
        wrapper
          .find("List")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-list"];

      const wrapper = mount(<List />);

      expect(wrapper.find("List").props().classes).toEqual(classes.sort());
    });
  });

  describe("spacing prop", () => {
    it("passes spacing prop into children nodes", () => {
      const spacing = 3;

      const wrapper = mount(
        <List spacing={spacing}>
          <ListItem>one</ListItem>
        </List>
      );

      expect(wrapper.find("ListItem").props().spacing).toEqual(spacing);
    });
  });

  describe("variant prop", () => {
    it("passes variant prop into children nodes", () => {
      const variant = "horizontal";

      const wrapper = mount(
        <List variant={variant}>
          <ListItem>one</ListItem>
        </List>
      );

      expect(wrapper.find("ListItem").props().variant).toEqual(variant);
    });
  });
});
