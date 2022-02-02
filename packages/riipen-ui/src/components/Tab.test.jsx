import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const icon = i => props => <FontAwesomeIcon icon={i} {...props} />;

import Tab from "./Tab";

describe("<Tab>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Tab value />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Tab value />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Tab value />);

      expect(wrapper.find("Tab").props().active).toEqual(false);
      expect(wrapper.find("Tab").props().breakpoint).toEqual("sm");
      expect(wrapper.find("Tab").props().color).toEqual("secondary");
      expect(wrapper.find("Tab").props().disabled).toEqual(false);
      expect(wrapper.find("Tab").props().fullWidth).toEqual(false);
      expect(wrapper.find("Tab").props().letterSpacing).toEqual(2);
      expect(wrapper.find("Tab").props().orientation).toEqual("horizontal");
      expect(wrapper.find("Tab").props().textTransform).toEqual("uppercase");
    });
  });

  describe("active props", () => {
    it("sets correct class name based on color when active is true", () => {
      const active = true;
      const color = "primary";

      const wrapper = mount(<Tab active={active} color={color} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(`${color}-active`)
      ).toEqual(true);
    });

    it("sets correct class name based on orientation when active is true", () => {
      const active = true;
      const orientation = "horizontal";

      const wrapper = mount(
        <Tab active={active} orientation={orientation} value />
      );

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(`${orientation}-active`)
      ).toEqual(true);
    });
  });

  describe("breakpoint prop", () => {
    describe("custom breakpoint and orientation props", () => {
      const tests = [
        {
          props: {
            breakpoint: "md",
            orientation: "horizontal"
          },
          expected: true
        },
        {
          props: {
            breakpoint: "md",
            orientation: "vertical"
          },
          expected: false
        },
        {
          props: {
            breakpoint: "none",
            orientation: "horizontal"
          },
          expected: false
        }
      ];

      tests.forEach(test => {
        it(`${
          test.expected ? "does" : "does not"
        } set breakpoint class name with breakpoint of ${
          test.props.breakpoint
        } and orientation of ${test.props.orientation}`, () => {
          const wrapper = mount(<Tab {...test.props} value />);

          expect(
            wrapper
              .find("Tab")
              .childAt(0)
              .hasClass("breakpoint")
          ).toEqual(test.expected);
        });
      });
    });

    it("gives an error when given an invalid breakpoint", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const breakpoint = "xs";

      mount(<Tab breakpoint={breakpoint} value />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Tab classes={classes} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("color prop", () => {
    it("sets custom valid color", () => {
      const color = "secondary";

      const wrapper = mount(<Tab color={color} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(color)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const color = "tertiary";

      mount(<Tab color={color} value />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("disabled prop", () => {
    it("sets disabled class name with valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<Tab disabled={disabled} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });
  });

  describe("displayActive props", () => {
    it("sets correct class name based on color when displayActive is true", () => {
      const displayActive = true;
      const color = "primary";

      const wrapper = mount(
        <Tab displayActive={displayActive} color={color} value />
      );

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(`${color}-active`)
      ).toEqual(true);
    });

    it("sets correct class name based on orientation when displayActive is true", () => {
      const displayActive = true;
      const orientation = "horizontal";

      const wrapper = mount(
        <Tab displayActive={displayActive} orientation={orientation} value />
      );

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(`${orientation}-active`)
      ).toEqual(true);
    });
  });

  describe("fullWidth prop", () => {
    it("sets fullWidth class name with valid custom fullWidth", () => {
      const fullWidth = true;

      const wrapper = mount(<Tab fullWidth={fullWidth} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass("full-width")
      ).toEqual(true);
    });
  });

  describe("icon prop", () => {
    it("sets icon class name with valid custom icon", () => {
      const wrapper = mount(<Tab icon={icon(faPhone)} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .childAt(0)
          .hasClass("icon")
      ).toEqual(true);
    });

    it("renders icon when icon is node", () => {
      const wrapper = mount(<Tab icon={"bob"} value />);

      expect(wrapper.text()).toEqual("bob");
    });
  });

  describe("label prop", () => {
    it("sets label class name with valid custom label", () => {
      const label = "Test";

      const wrapper = mount(<Tab label={label} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .childAt(0)
          .hasClass("label")
      ).toEqual(true);
      expect(wrapper.text()).toEqual(label);
    });
  });

  describe("onClick prop", () => {
    it("invokes onClick prop on click", () => {
      const handler = jest.fn();

      const wrapper = mount(<Tab onClick={handler} value />);
      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onClick")({ type: "click" });

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("does not invoke onClick prop on click when disabled", () => {
      const handler = jest.fn();
      const disabled = true;

      const wrapper = mount(
        <Tab onClick={handler} disabled={disabled} value />
      );
      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onClick")({ type: "click" });

      expect(handler).toHaveBeenCalledTimes(0);
    });

    it("invokes onClick prop on valid keydown event", () => {
      const handler = jest.fn();

      const wrapper = mount(<Tab onClick={handler} value />);
      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onClick")({ key: "Enter", type: "keydown" });

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("does not invoke onClick prop on invalid keydown event", () => {
      const handler = jest.fn();

      const wrapper = mount(<Tab onClick={handler} value />);
      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onClick")({ key: "3", type: "keydown" });

      expect(handler).toHaveBeenCalledTimes(0);
    });
  });

  describe("orientation prop", () => {
    it("sets orientation class name with valid custom orientation", () => {
      const orientation = "vertical";

      const wrapper = mount(<Tab orientation={orientation} value />);

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass(orientation)
      ).toEqual(true);
    });

    it("gives an error when given an invalid orientation", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const orientation = "upright";

      mount(<Tab orientation={orientation} value />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("focusVisible state", () => {
    it("sets correct class name when focus event occurs", () => {
      const wrapper = mount(<Tab value />);

      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onFocus")({});

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass("focusVisible")
      ).toBeTruthy();
    });

    it("sets correct class name when blur event occurs", () => {
      const wrapper = mount(<Tab value />);

      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onFocus")({});
      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onBlur")();

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass("focusVisible")
      ).toBeFalsy();
    });
  });

  describe("letterSpacing prop", () => {
    it("gives an error when given an invalid letterSpacing", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const letterSpacing = "invalid";

      mount(<Tab letterSpacing={letterSpacing} value />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("textTransform prop", () => {
    it("gives an error when given an invalid textTransform", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const textTransform = "upright";

      mount(<Tab textTransform={textTransform} value />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
