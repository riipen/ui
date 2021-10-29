import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

describe("<MenuList>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <MenuList>
          <MenuItem />
        </MenuList>
      );
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(
      <MenuList>
        <MenuItem />
      </MenuList>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(
        <MenuList>
          <MenuItem />
        </MenuList>
      );

      const component = wrapper.find("MenuList");
      expect(component.props().selectedIndex).toEqual(-1);
    });
  });

  describe("children prop", () => {
    it("displays given non null children", () => {
      const child = <MenuItem>one</MenuItem>;

      const wrapper = mount(
        <MenuList>
          {null}
          {child}
        </MenuList>
      );

      const childrenNodes = wrapper
        .find("MenuList")
        .childAt(0)
        .children();
      expect(childrenNodes.containsMatchingElement(child)).toEqual(true);
      expect(childrenNodes).toHaveLength(1);
    });

    it("invokes onSelect when child clicked", () => {
      const onSelect = jest.fn();
      const event = {};

      const wrapper = mount(
        <MenuList onSelect={onSelect} variant="selection">
          <MenuItem disabled={false} />
          <MenuItem />
        </MenuList>
      );

      wrapper
        .find("MenuItem")
        .at(0)
        .find("div")
        .invoke("onClick")(event);

      expect(onSelect).toHaveBeenCalledWith(0, event);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(
        <MenuList classes={classes}>
          <MenuItem />
        </MenuList>
      );

      expect(
        wrapper
          .find("MenuList")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-menulist"];

      const wrapper = mount(
        <MenuList>
          <MenuItem />
        </MenuList>
      );

      expect(
        wrapper
          .find("MenuList")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("color prop", () => {
    it("passes color prop into children nodes", () => {
      const color = "secondary";

      const wrapper = mount(
        <MenuList color={color}>
          <MenuItem>one</MenuItem>
        </MenuList>
      );

      expect(wrapper.find("MenuItem").props().color).toEqual(color);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(
        <MenuList color="pink">
          <MenuItem />
        </MenuList>
      );
      expect(errors).toHaveBeenCalled();
    });
  });

  describe("onSelect prop", () => {
    it("invokes onSelect with a null idx when div is clicked", () => {
      const onSelect = jest.fn();
      const event = {};

      const wrapper = mount(
        <MenuList onSelect={onSelect}>
          <MenuItem>one</MenuItem>
        </MenuList>
      );

      wrapper
        .find("MenuItem")
        .at(0)
        .find("div")
        .invoke("onClick")(event);

      expect(onSelect).toHaveBeenLastCalledWith(0, event);
    });
  });

  describe("selectedIndex prop", () => {
    it("selects children node at given index", () => {
      const selectedIndex = 1;

      const wrapper = mount(
        <MenuList selectedIndex={selectedIndex}>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
        </MenuList>
      );

      expect(
        wrapper
          .find("MenuItem")
          .at(selectedIndex)
          .props().selected
      ).toEqual(true);
    });

    it("does not select children nodes not at given index", () => {
      const selectedIndex = 1;

      const wrapper = mount(
        <MenuList selectedIndex={selectedIndex}>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
        </MenuList>
      );

      expect(
        wrapper
          .find("MenuItem")
          .at(0)
          .props().selected
      ).toEqual(false);
    });
  });
});
