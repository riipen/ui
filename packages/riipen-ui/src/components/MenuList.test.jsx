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
      const defaultProps = new MenuList().type.defaultProps;

      const wrapper = mount(
        <MenuList>
          <MenuItem />
        </MenuList>
      );

      const component = wrapper.find("MenuList");
      expect(component.props().selectedIndex).toEqual(
        defaultProps.selectedIndex
      );
      expect(component.props().variant).toEqual(defaultProps.variant);
    });
  });

  describe("autoFocus prop", () => {
    it("selects first element on list open with true autoFocus and default selectedIndex", () => {
      const autoFocus = true;
      const selectChange = jest.fn();

      mount(
        <MenuList autoFocus={autoFocus} selectChange={selectChange}>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
        </MenuList>
      );

      expect(selectChange).toHaveBeenLastCalledWith(0, undefined);
    });

    it("does not select first element on list open with false autoFocus", () => {
      const autoFocus = false;
      const selectChange = jest.fn();

      mount(
        <MenuList autoFocus={autoFocus} selectChange={selectChange}>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
        </MenuList>
      );

      expect(selectChange).not.toHaveBeenCalled();
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

  describe("selectChange prop", () => {
    it("invokes selectChange with a null idx when div is clicked", () => {
      const selectChange = jest.fn();

      const wrapper = mount(
        <MenuList selectChange={selectChange}>
          <MenuItem>one</MenuItem>
        </MenuList>
      );

      wrapper
        .find("MenuList")
        .childAt(0)
        .simulate("click");

      expect(selectChange).toHaveBeenLastCalledWith(null, expect.any(Object));
    });

    describe("when variant is selection", () => {
      it("invokes selectChange when child clicked", () => {
        const selectChange = jest.fn();

        const wrapper = mount(
          <MenuList selectChange={selectChange} variant="selection">
            <MenuItem disabled={false} />
            <MenuItem />
          </MenuList>
        );

        wrapper
          .find("MenuItem")
          .at(0)
          .childAt(0)
          .simulate("click");

        expect(selectChange).toHaveBeenCalledWith(0, expect.any(Object));
      });

      it("does not invoke selectChange when child clicked and child is disabled", () => {
        const selectChange = jest.fn();
        const disabled = true;

        const wrapper = mount(
          <MenuList selectChange={selectChange} variant="selection">
            <MenuItem disabled={disabled}>one</MenuItem>
          </MenuList>
        );

        wrapper
          .find("MenuItem")
          .at(0)
          .childAt(0)
          .simulate("click");

        expect(selectChange).not.toHaveBeenCalled();
      });
    });
  });

  describe("selectedIndex prop", () => {
    it("selects children node at given index", () => {
      const selectedIndex = 1;

      const wrapper = mount(
        <MenuList selectedIndex={selectedIndex} variant="selection">
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
        <MenuList selectedIndex={selectedIndex} variant="selection">
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
        </MenuList>
      );

      expect(
        wrapper
          .find("MenuItem")
          .at(0)
          .props().selected
      ).toBeUndefined();
    });
  });

  describe("variant prop", () => {
    it("sets onClick prop of children nodes when variant is selection", () => {
      const variant = "selection";

      const wrapper = mount(
        <MenuList variant={variant}>
          <MenuItem />
        </MenuList>
      );

      expect(wrapper.find("MenuItem").props().onClick).toBeDefined();
    });

    it("does not set onClick prop of children nodes when variant is menu", () => {
      const variant = "menu";

      const wrapper = mount(
        <MenuList variant={variant}>
          <MenuItem />
        </MenuList>
      );

      expect(wrapper.find("MenuItem").props().onClick).toBeUndefined();
    });

    it("gives an error with invalid variant", () => {
      const variant = "middle";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(
        <MenuList variant={variant}>
          <MenuItem />
        </MenuList>
      );

      expect(errors).toHaveBeenCalled();
    });
  });
});
