import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Popover from "./Popover";

describe("<Popover>", () => {
  let props;

  beforeEach(() => {
    props = {
      anchorEl: ReactTestUtils.renderIntoDocument(<div />)
    };
  });
  it("renders without errors", () => {
    let error;

    try {
      mount(<Popover {...props} />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Popover />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("anchorEl prop", () => {
    it("does not render children when no anchorEl", () => {
      props.anchorEl = null;
      props.children = "a child";
      const wrapper = mount(<Popover {...props} />);

      expect(wrapper.text()).not.toContain(props.children);
    });
  });

  describe("children prop", () => {
    it("renders children when popover is open and anchorEl exists", () => {
      props.children = "a child";
      const wrapper = mount(<Popover {...props} />);

      expect(wrapper.text()).toContain(props.children);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of Popover", () => {
      props.classes = ["classOne"];
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .hasClass(props.classes[0])
      ).toEqual(true);
    });

    it("gives an error when classes are provided as one string", () => {
      props.classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Popover {...props} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("closeOnScrolled prop", () => {
    [
      ["resize", true],
      ["scroll", true],
      ["resize", false],
      ["scroll", false]
    ].forEach(([event, closeOnScrolled]) => {
      it(`${
        closeOnScrolled ? "closes" : "does not close"
      } Popover on ${event} event when closeOnScrolled is ${closeOnScrolled}`, () => {
        const anchorElEvents = {};
        props.anchorEl.addEventListener = jest.fn((anchorElEvent, callback) => {
          anchorElEvents[anchorElEvent] = callback;
        });
        props.closeOnScrolled = closeOnScrolled;
        props.onClose = jest.fn();
        mount(<Popover {...props} />);

        anchorElEvents[event]({
          type: event
        });

        expect(props.onClose).toHaveBeenCalledTimes(closeOnScrolled ? 1 : 0);
      });
    });
  });

  describe("component prop", () => {
    it("renders span component as default", () => {
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .name()
      ).toBe("span");
    });

    it("renders custom component", () => {
      props.component = "div";
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .name()
      ).toBe(props.component);
    });
  });

  describe("fullWidth prop", () => {
    it("sets left to 0px when fullWidth is true", () => {
      props.fullWidth = true;
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .props().style.left
      ).toEqual("0px");
    });
  });

  describe("isOpen prop", () => {
    it("passes open class to component", () => {
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .hasClass("open")
      ).toBe(true);
    });

    it("does not pass open class to component when isOpen is false", () => {
      props.isOpen = false;
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .hasClass("open")
      ).toBe(false);
    });

    it("does not render children when isOpen is false", () => {
      props.children = "a child";
      props.isOpen = false;
      const wrapper = mount(<Popover {...props} />);

      expect(wrapper.text()).not.toContain(props.children);
    });
  });

  describe("lockScroll prop", () => {
    it("locks scroll of the parent element when lockScroll is true", () => {
      document.body.style.overflow = "scroll";
      mount(<Popover {...props} />);

      expect(document.body.style.overflow).toEqual("hidden");
    });

    it("locks scroll of the parent element when lockScroll is false", () => {
      document.body.style.overflow = "scroll";
      props.lockScroll = false;
      mount(<Popover {...props} />);

      expect(document.body.style.overflow).toEqual("scroll");
    });
  });

  describe("onClose prop", () => {
    it("calls onClose on mousedown event", () => {
      const events = {};
      window.addEventListener = jest.fn((event, callback) => {
        events[event] = callback;
      });
      props.onClose = jest.fn();
      mount(<Popover {...props} />);

      events.keydown({
        target: ReactTestUtils.renderIntoDocument(<div />),
        type: "mousedown"
      });

      expect(props.onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose on escape keydown event", () => {
      const events = {};
      window.addEventListener = jest.fn((event, callback) => {
        events[event] = callback;
      });
      props.onClose = jest.fn();
      mount(<Popover {...props} />);

      events.keydown({
        key: "Escape",
        type: "keydown"
      });

      expect(props.onClose).toHaveBeenCalledTimes(1);
    });

    it("does not call onClose if mousedown event is on anchorEl", () => {
      const events = {};
      window.addEventListener = jest.fn((event, callback) => {
        events[event] = callback;
      });
      props.onClose = jest.fn();
      mount(<Popover {...props} />);

      events.keydown({
        target: props.anchorEl,
        type: "mousedown"
      });

      expect(props.onClose).not.toHaveBeenCalled();
    });
  });

  describe("onKeyDown prop", () => {
    it("calls onKeyDown on key down event", () => {
      const events = {};
      window.addEventListener = jest.fn((event, callback) => {
        events[event] = callback;
      });
      props.onKeyDown = jest.fn();
      mount(<Popover {...props} />);

      events.keydown({
        key: "Enter",
        stopImmediatePropagation: jest.fn(),
        type: "keydown"
      });

      expect(props.onKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe("styles prop", () => {
    it("passes styles to component", () => {
      props.styles = { color: "pink" };
      const wrapper = mount(<Popover {...props} />);

      expect(
        wrapper
          .find("Popover")
          .childAt(0)
          .props().style.color
      ).toEqual(props.styles.color);
    });
  });
});
