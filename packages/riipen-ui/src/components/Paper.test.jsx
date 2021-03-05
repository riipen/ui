import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import Paper from "./Paper";

describe("<Paper>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Paper />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Paper />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Paper />);

      expect(wrapper.find("Paper").props().component).toEqual("div");
      expect(wrapper.find("Paper").props().rounded).toEqual(false);
      expect(wrapper.find("Paper").props().variant).toEqual("elevation");
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Paper>{child}</Paper>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Paper classes={classes} />);

      expect(
        wrapper
          .find("Paper")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
        const classes = ["riipen", "riipen-paper"];
  
        const wrapper = mount(<Paper />);
  
        expect(
          wrapper
            .find("Paper")
            .props()
            .classes.sort()
        ).toEqual(classes.sort());
      });
  });

  describe("component prop", () => {
    it("sets custom component", () => {
      const component = "span";

      const wrapper = mount(<Paper component={component} />);

      expect(
        wrapper
          .find("Paper")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcd";

      mount(<Paper component={component} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("elevation prop", () => {
    it("sets elevation box shadow height for the component", () => {
      const elevation = 3;

      const wrapper = mount(<Paper elevation={elevation} />);

      expect(
        wrapper
          .find("Paper")
          .find("JSXStyle")
          .props().dynamic
      ).toContain(defaultTheme.shadows[elevation]);
    });
  });

  describe("padding prop", () => {
    it("sets padding for the component cell", () => {
      const padding = 3;

      const wrapper = mount(<Paper padding={padding} />);

      expect(
        wrapper
          .find("Paper")
          .find("JSXStyle")
          .props().dynamic
      ).toContain(defaultTheme.spacing[padding]);
    });
  });

  describe("rounded prop", () => {
    it("sets class name as rounded when rounded is true", () => {
      const rounded = true;

      const wrapper = mount(<Paper rounded={rounded} />);

      expect(
        wrapper
          .find("Paper")
          .childAt(0)
          .hasClass("rounded")
      ).toEqual(true);
    });
  });

  describe("variant prop", () => {
    it("sets class name as elevation by default", () => {
        const wrapper = mount(<Paper />);
  
        expect(
          wrapper
            .find("Paper")
            .childAt(0)
            .hasClass("elevation")
        ).toEqual(true);
      });

    it("sets class name as outlined for outlined variant", () => {
      const variant = "outlined";

      const wrapper = mount(<Paper variant={variant}  />);

      expect(
        wrapper
          .find("Paper")
          .childAt(0)
          .hasClass("outlined")
      ).toEqual(true);
    });

    it("gives an error when given an invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const variant = "default";

      mount(<Paper variant={variant} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

});
