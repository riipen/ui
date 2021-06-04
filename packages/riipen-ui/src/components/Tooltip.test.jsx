import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Tooltip from "./Tooltip.jsx";

describe("<Tooltip>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Tooltip />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Tooltip />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("children prop", () => {
    it("renders the children", () => {
      const children = "test";
      const wrapper = mount(<Tooltip>{children}</Tooltip>);

      expect(wrapper.text()).toEqual(children);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the popover node", () => {
      const classes = ["classOne"];
      const wrapper = mount(<Tooltip classes={classes} />);

      expect(
        wrapper
          .find("Tooltip")
          .find("Popover")
          .props().classes
      ).toContain(classes[0]);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-tooltip"];
      const wrapper = mount(<Tooltip />);

      expect(
        wrapper
          .find("Tooltip")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("click prop", () => {
    it("invokes click when click is true", () => {
      const click = true;
      const onOpen = jest.fn();
      const wrapper = mount(<Tooltip click={click} onOpen={onOpen} />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("click");

      expect(onOpen).toHaveBeenCalledTimes(1);
    });
  });

  describe("color prop", () => {
    it("sets tooltip color with given valid custom color prop", () => {
      const color = "positive";
      const wrapper = mount(<Tooltip color={color} />);

      expect(
        wrapper
          .find("Tooltip")
          .find("Popover")
          .props().classes
      ).toContain(color);
    });

    it("gives an error given invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "bad";
      mount(<Tooltip color={color} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("component prop", () => {
    it("sets custom component", () => {
      const component = "span";
      const wrapper = mount(<Tooltip component={component} />);

      expect(
        wrapper
          .find("Tooltip")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("sets component type to div when component prop is not provided", () => {
      const wrapper = mount(<Tooltip />);

      expect(
        wrapper
          .find("Tooltip")
          .childAt(0)
          .name()
      ).toEqual("div");
    });
  });

  describe("hover prop", () => {
    it("opens tooltip on mouse enter when hover is true", () => {
      const wrapper = mount(<Tooltip />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseEnter");

      expect(wrapper.find("Popover").props().isOpen).toBe(true);
    });

    it("closes tooltip on mouse leave when hover is true", () => {
      const wrapper = mount(<Tooltip />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseEnter");
      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseLeave");

      expect(wrapper.find("Popover").props().isOpen).toBe(false);
    });

    it("does not open tooltip on mouse enter when hover is false", () => {
      const hover = false;
      const wrapper = mount(<Tooltip hover={hover} />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseEnter");

      expect(wrapper.find("Popover").props().isOpen).toBe(false);
    });

    it("does not close tooltip on mouse leave when hover is false", () => {
      const hover = false;
      const click = true;
      const wrapper = mount(<Tooltip click={click} hover={hover} />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("click");
      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseLeave");

      expect(wrapper.find("Popover").props().isOpen).toBe(true);
    });
  });

  describe("isControlledByProps prop", () => {
    it("does not open tooltip on mouse enter when onOpen not provided", () => {
      const isControlledByProps = true;
      const open = false;
      const wrapper = mount(
        <Tooltip isControlledByProps={isControlledByProps} open={open} />
      );

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseEnter");

      expect(wrapper.find("Popover").props().isOpen).toBe(false);
    });

    it("does not close tooltip on mouse leave when onOpen not provided", () => {
      const isControlledByProps = true;
      const open = true;
      const wrapper = mount(
        <Tooltip isControlledByProps={isControlledByProps} open={open} />
      );

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseLeave");

      expect(wrapper.find("Popover").props().isOpen).toBe(true);
    });
  });

  describe("keepOpenOnMouseLeave prop", () => {
    it("does not close tooltip on mouse leave", () => {
      const keepOpenOnMouseLeave = true;
      const wrapper = mount(
        <Tooltip keepOpenOnMouseLeave={keepOpenOnMouseLeave} />
      );

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseEnter");
      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseLeave");

      expect(wrapper.find("Popover").props().isOpen).toBe(true);
    });
  });

  describe("onClose prop", () => {
    it("invokes onOpen prop on mouse leave", () => {
      const onClose = jest.fn();
      const wrapper = mount(<Tooltip onClose={onClose} />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseLeave");

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("invokes onClose prop on click when click is true", () => {
      const click = true;
      const onClose = jest.fn();
      const wrapper = mount(<Tooltip click={click} onClose={onClose} />);

      // open and close tooltip
      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("click");
      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("click");

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("onKeyDown prop", () => {
    it("passes onKeyDown to Popover", () => {
      const onKeyDown = jest.fn();
      const wrapper = mount(<Tooltip onKeyDown={onKeyDown} />);

      expect(wrapper.find("Popover").props().onKeyDown).toEqual(onKeyDown);
    });
  });

  describe("onOpen prop", () => {
    it("invokes onOpen prop on mouse enter", () => {
      const onOpen = jest.fn();
      const wrapper = mount(<Tooltip onOpen={onOpen} />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("mouseEnter");

      expect(onOpen).toHaveBeenCalledTimes(1);
    });

    it("invokes onOpen prop on click when click is true", () => {
      const click = true;
      const onOpen = jest.fn();
      const wrapper = mount(<Tooltip click={click} onOpen={onOpen} />);

      wrapper
        .find("Tooltip")
        .childAt(0)
        .simulate("click");

      expect(onOpen).toHaveBeenCalledTimes(1);
    });
  });

  describe("open prop", () => {
    it("passes open to Popover as true when provided", () => {
      const isControlledByProps = true;
      const open = true;
      const tooltip = "test";

      const wrapper = mount(
        <Tooltip
          isControlledByProps={isControlledByProps}
          open={open}
          tooltip={tooltip}
        />
      );

      expect(wrapper.find("Popover").props().isOpen).toBe(true);
    });
  });

  describe("position prop", () => {
    it("passes correct position class to Popover", () => {
      const position = "top-left";
      const wrapper = mount(<Tooltip position={position} />);

      expect(
        wrapper
          .find("Tooltip")
          .find("Popover")
          .props().classes
      ).toContain(position);
    });

    it("passes correct contentPosition prop to Popover", () => {
      const position = "top-left";
      const wrapper = mount(<Tooltip position={position} />);

      expect(
        wrapper
          .find("Tooltip")
          .find("Popover")
          .props().contentPosition
      ).toStrictEqual({ horizontal: "right", vertical: "bottom" });
    });
  });

  describe("size prop", () => {
    it("sets tooltip size with given valid custom size prop", () => {
      const size = "small";
      const wrapper = mount(<Tooltip size={size} />);

      expect(
        wrapper
          .find("Tooltip")
          .find("Popover")
          .props().classes
      ).toContain(size);
    });

    it("gives an error given invalid size", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "sm";
      mount(<Tooltip size={size} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("tooltip prop", () => {
    it("renders tooltip inside Popover", () => {
      const tooltip = "test";
      const wrapper = mount(<Tooltip tooltip={tooltip} />);

      expect(
        wrapper
          .find("Tooltip")
          .find("Popover")
          .props().children.props.children
      ).toBe(tooltip);
    });
  });
});
