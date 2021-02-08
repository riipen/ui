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
      expect(wrapper.find("Tab").props().orientation).toEqual("horizontal");
    });
  });

  describe("active and displayActive props", () => {
    const props = {};
    const color = "primary";
    const orientation = "horizontal";

    const tests = [
      {
        active: false,
        displayActive: false,
        argument: `${color}-active`,
        expected: false
      },
      {
        active: true,
        displayActive: false,
        argument: `${color}-active`,
        expected: true
      },
      {
        active: false,
        displayActive: true,
        argument: `${color}-active`,
        expected: true
      },
      {
        active: true,
        displayActive: true,
        argument: `${color}-active`,
        expected: true
      },
      {
        active: false,
        displayActive: false,
        argument: `${orientation}-active`,
        expected: false
      },
      {
        active: true,
        displayActive: false,
        argument: `${orientation}-active`,
        expected: true
      },
      {
        active: false,
        displayActive: true,
        argument: `${orientation}-active`,
        expected: true
      },
      {
        active: true,
        displayActive: true,
        argument: `${orientation}-active`,
        expected: true
      }
    ];

    tests.forEach(test => {
      it(`sets ${test.expected} class name with custom active and displayActive prop values`, () => {
        props.active = test.active;
        props.displayActive = test.displayActive;
        props.color = "primary";
        props.orientation = "horizontal";

        const wrapper = mount(<Tab {...props} value />);

        expect(
          wrapper
            .find("Tab")
            .childAt(0)
            .hasClass(test.argument)
        ).toEqual(test.expected);
      });
    });
  });

  describe("breakpoint prop", () => {
    describe("custom breakpoint and orientation props", () => {
      const props = {};

      const tests = [
        {
          breakpoint: "md",
          orientation: "horizontal",
          argument: "breakpoint",
          expected: true
        },
        {
          breakpoint: "md",
          orientation: "vertical",
          argument: "breakpoint",
          expected: false
        },
        {
          breakpoint: "none",
          orientation: "horizontal",
          argument: "breakpoint",
          expected: false
        }
      ];

      tests.forEach(test => {
        it(`sets ${test.expected} class name with custom breakpoint and orientation prop values`, () => {
          props.breakpoint = test.breakpoint;
          props.orientation = test.orientation;

          const wrapper = mount(<Tab {...props} value />);

          expect(
            wrapper
              .find("Tab")
              .childAt(0)
              .hasClass(test.argument)
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
    it("sets custom color", () => {
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
    });
  });

  describe("onClick prop", () => {
    it("onClick prop correctly handles click event", () => {
      const handler = jest.fn();

      const wrapper = mount(<Tab onClick={handler} value />);
      wrapper.simulate("click");

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("onClick prop correctly handles click event when disabled", () => {
      const handler = jest.fn();
      const disabled = true;

      const wrapper = mount(
        <Tab onClick={handler} disabled={disabled} value />
      );
      wrapper.simulate("click");

      expect(handler).toHaveBeenCalledTimes(0);
    });

    it("onClick prop correctly handles valid keydown event", () => {
      const handler = jest.fn();

      const wrapper = mount(<Tab onClick={handler} value />);
      wrapper.simulate("keydown", { key: "Enter" });

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("onClick prop correctly handles invalid keydown event", () => {
      const handler = jest.fn();

      const wrapper = mount(<Tab onClick={handler} value />);
      wrapper.simulate("keydown", { key: "3" });

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

      wrapper.simulate("focus");

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass("focusVisible")
      ).toBeTruthy();
    });

    it("sets correct class name when blur event occurs", () => {
      const wrapper = mount(<Tab value />);

      wrapper.simulate("focus");
      wrapper.simulate("blur");

      expect(
        wrapper
          .find("Tab")
          .childAt(0)
          .hasClass("focusVisible")
      ).toBeFalsy();
    });
  });
});
