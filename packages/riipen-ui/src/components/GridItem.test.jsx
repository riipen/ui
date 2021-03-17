import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import GridItem from "./GridItem";

describe("<GridItem>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<GridItem />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<GridItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new GridItem().type.defaultProps;

      const wrapper = mount(<GridItem />);

      expect(wrapper.find("GridItem").props().alignItems).toEqual(
        defaultProps.alignItems
      );
      expect(wrapper.find("GridItem").props().lg).toEqual(defaultProps.lg);
      expect(wrapper.find("GridItem").props().spacing).toEqual(
        defaultProps.spacing
      );
      expect(wrapper.find("GridItem").props().flexGrow).toEqual(
        defaultProps.flexGrow
      );
      expect(wrapper.find("GridItem").props().flexShrink).toEqual(
        defaultProps.flexShrink
      );
      expect(wrapper.find("GridItem").props().flexDirection).toEqual(
        defaultProps.flexDirection
      );
      expect(wrapper.find("GridItem").props().flexWrap).toEqual(
        defaultProps.flexWrap
      );
      expect(wrapper.find("GridItem").props().justifyContent).toEqual(
        defaultProps.justifyContent
      );
      expect(wrapper.find("GridItem").props().size).toEqual(defaultProps.size);
    });
  });

  describe("alignItems prop", () => {
    it("sets valid custom alignItems", () => {
      const alignItems = "center";

      const wrapper = mount(<GridItem alignItems={alignItems} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(alignItems);
    });

    it("gives an error when given an invalid alignItem", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const alignItems = "left";

      mount(<GridItem alignItems={alignItems} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<GridItem>{child}</GridItem>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<GridItem classes={classes} />);

      expect(
        wrapper
          .find("GridItem")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-griditem"];

      const wrapper = mount(<GridItem />);

      expect(wrapper.find("GridItem").props().classes).toEqual(classes.sort());
    });
  });

  describe("flexDirection prop", () => {
    it("sets valid custom  flexDirection", () => {
      const flexDirection = "initial";

      const wrapper = mount(<GridItem flexDirection={flexDirection} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexDirection);
    });

    it("gives an error when given an invalid flexDirection", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const flexDirection = "reverse";

      mount(<GridItem flexDirection={flexDirection} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("flexGrow prop", () => {
    it("sets valid custom flexGrow", () => {
      const flexGrow = 5;

      const wrapper = mount(<GridItem flexGrow={flexGrow} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexGrow);
    });
  });

  describe("flexShrink prop", () => {
    it("sets valid custom flexShrink", () => {
      const flexShrink = 5;

      const wrapper = mount(<GridItem flexShrink={flexShrink} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexShrink);
    });
  });

  describe("flexWrap prop", () => {
    it("sets valid custom  flexWrap", () => {
      const flexWrap = "unset";

      const wrapper = mount(<GridItem flexWrap={flexWrap} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexWrap);
    });

    it("gives an error when given an invalid flexWrap", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const flexWrap = "reverse";

      mount(<GridItem flexWrap={flexWrap} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("justifyContent prop", () => {
    it("sets valid custom justifyContent", () => {
      const justifyContent = "space-between";

      const wrapper = mount(<GridItem justifyContent={justifyContent} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(
        justifyContent
      );
    });

    it("gives an error when given an invalid justifyContent", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const justifyContent = "space";

      mount(<GridItem justifyContent={justifyContent} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("lg prop", () => {
    const props = {};

    const tests = [
      { argument: "hidden", expected: "none" },
      { argument: "auto", expected: "flex" },
      { argument: 7, expected: "flex" }
    ];

    tests.forEach(test => {
      it(`sets lg prop with custom valid type ${test.argument}`, () => {
        props.size = "lg";
        props.lg = test.argument;

        const wrapper = mount(<GridItem {...props} />);

        expect(wrapper.find("JSXStyle").props().dynamic).toContain(
          test.expected
        );
      });
    });

    it("gives an error when given an invalid lg", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "lg";
      const lg = "hide";

      mount(<GridItem size={size} lg={lg} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("md prop", () => {
    const props = {};

    const tests = [
      { argument: "hidden", expected: "none" },
      { argument: "auto", expected: "flex" },
      { argument: 5, expected: "flex" }
    ];

    tests.forEach(test => {
      it(`sets md prop with custom valid type ${test.argument}`, () => {
        props.size = "md";
        props.md = test.argument;

        const wrapper = mount(<GridItem {...props} />);

        expect(wrapper.find("JSXStyle").props().dynamic).toContain(
          test.expected
        );
      });
    });

    it("gives an error when given an invalid md", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "md";
      const md = "hide";

      mount(<GridItem size={size} md={md} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("sm prop", () => {
    const props = {};

    const tests = [
      { argument: "hidden", expected: "none" },
      { argument: "auto", expected: "flex" },
      { argument: 3, expected: "flex" }
    ];

    tests.forEach(test => {
      it(`sets sm prop with custom valid type ${test.argument}`, () => {
        props.size = "sm";
        props.sm = test.argument;

        const wrapper = mount(<GridItem {...props} />);

        expect(wrapper.find("JSXStyle").props().dynamic).toContain(
          test.expected
        );
      });
    });

    it("gives an error when given an invalid sm", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "sm";
      const sm = "hide";

      mount(<GridItem size={size} sm={sm} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("spacing prop", () => {
    it("sets custom spacing for the grid item", () => {
      const spacing = 2;

      const wrapper = mount(<GridItem spacing={spacing} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(
        defaultTheme.spacing(spacing)
      );
    });

    it("gives an error when given an invalid spacing", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const spacing = 12;

      mount(<GridItem spacing={spacing} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("size prop", () => {
    it("sets custom valid size", () => {
      const size = "md";
      const md = 3;

      const wrapper = mount(<GridItem size={size} md={md} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain("flex");
    });

    it("gives an error when given an invalid size", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "xl";

      mount(<GridItem size={size} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("xs prop", () => {
    const props = {};

    const tests = [
      { argument: "hidden", expected: "none" },
      { argument: "auto", expected: "flex" },
      { argument: 1, expected: "flex" }
    ];

    tests.forEach(test => {
      it(`sets xs prop with custom valid type ${test.argument}`, () => {
        props.size = "xs";
        props.xs = test.argument;

        const wrapper = mount(<GridItem {...props} />);

        expect(wrapper.find("JSXStyle").props().dynamic).toContain(
          test.expected
        );
      });
    });

    it("gives an error when given an invalid xs", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const size = "xs";
      const xs = "hide";

      mount(<GridItem size={size} xs={xs} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
