import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Typography from "./Typography";

describe("<Typography>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Typography />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Typography />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Typography().type.defaultProps;

      const wrapper = mount(<Typography />);

      const component = wrapper.find("Typography");
      expect(component.props().color).toEqual(defaultProps.color);
      expect(component.props().display).toEqual(defaultProps.display);
      expect(component.props().gutter).toEqual(defaultProps.gutter);
      expect(component.props().textAlign).toEqual(defaultProps.textAlign);
      expect(component.props().variant).toEqual(defaultProps.variant);
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <span>this is a child</span>;

      const wrapper = mount(<Typography>{child}</Typography>);

      expect(wrapper.find("Typography").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies classes to the root node of Typography", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Typography classes={classes} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-typography"];

      const wrapper = mount(<Typography />);

      expect(
        wrapper
          .find("Typography")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("color prop", () => {
    it("applies color class given a valid color", () => {
      const color = "white";

      const wrapper = mount(<Typography color={color} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(`color-${color}`)
      ).toEqual(true);
    });

    it("gives an error when given an invalid color", () => {
      const color = "red";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography color={color} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("component prop", () => {
    it("sets component with valid custom component", () => {
      const component = "a";

      const wrapper = mount(<Typography component={component} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("gives an error when given an invalid component", () => {
      const component = "invalidcomponent";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography component={component} />);

      expect(errors).toHaveBeenCalled();
    });

    it("applies the component prop over the variant prop when both are provided", () => {
      const component = "a";
      const variant = "h1";

      const wrapper = mount(
        <Typography component={component} variant={variant} />
      );

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .name()
      ).toEqual(component);
    });
  });

  describe("display prop", () => {
    it("sets display class with valid display", () => {
      const display = "inline";

      const wrapper = mount(<Typography display={display} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(display)
      ).toEqual(true);
    });

    it("gives an error when given an invalid display", () => {
      const display = "invalid";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography display={display} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("fontWeight prop", () => {
    it("sets fontWeight class with valid fontWeight", () => {
      const fontWeight = "medium";

      const wrapper = mount(<Typography fontWeight={fontWeight} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(fontWeight)
      ).toEqual(true);
    });

    it("gives an error when given an invalid fontWeight", () => {
      const fontWeight = "invalid";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography fontWeight={fontWeight} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("gutter prop", () => {
    it("applies gutter class when gutter prop is true", () => {
      const gutter = true;

      const wrapper = mount(<Typography gutter={gutter} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass("gutter")
      ).toEqual(true);
    });

    it("does not apply gutter class when gutter prop is false", () => {
      const gutter = false;

      const wrapper = mount(<Typography gutter={gutter} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass("gutter")
      ).toEqual(false);
    });
  });

  describe("textAlign prop", () => {
    it("sets textAlign class given a valid textAlign prop", () => {
      const textAlign = "justify";

      const wrapper = mount(<Typography textAlign={textAlign} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(`align-${textAlign}`)
      ).toEqual(true);
    });

    it("gives an error given an invalid textAlign prop", () => {
      const textAlign = "invalid";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography textAlign={textAlign} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("textTransform prop", () => {
    it("sets textTransform class given a valid textTransform prop", () => {
      const textTransform = "capitalize";

      const wrapper = mount(<Typography textTransform={textTransform} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(`transform-${textTransform}`)
      ).toEqual(true);
    });

    it("gives an error given an invalid textTransform prop", () => {
      const textTransform = "invalid";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography textTransform={textTransform} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("variant prop", () => {
    it("sets valid, mapped variant to component", () => {
      const variant = "h5";

      const wrapper = mount(<Typography variant={variant} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .name()
      ).toEqual(variant);
    });

    it("sets component to span when given an unmapped variant", () => {
      const variant = "inherit";

      const wrapper = mount(<Typography variant={variant} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .name()
      ).toEqual("span");
    });

    it("gives an error given an invalid variant", () => {
      const variant = "invalid";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography variant={variant} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("wordBreak prop", () => {
    it("sets wordBreak class given a valid wordBreak prop", () => {
      const wordBreak = "normal";

      const wrapper = mount(<Typography wordBreak={wordBreak} />);

      expect(
        wrapper
          .find("Typography")
          .childAt(0)
          .hasClass(`word-break-${wordBreak}`)
      ).toEqual(true);
    });

    it("gives an error given an invalid wordBreak prop", () => {
      const wordBreak = "invalid";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Typography wordBreak={wordBreak} />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
