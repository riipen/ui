import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import defaultTheme from "../themes/default";

import Grid from "./Grid.jsx";
import GridItem from "./GridItem.jsx";

describe("<Grid>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Grid />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Grid />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Grid().type.defaultProps;

      const wrapper = mount(<Grid />);

      const component = wrapper.find("Grid");
      expect(component.props().alignItems).toEqual(defaultProps.alignItems);
      expect(component.props().justifyContent).toEqual(
        defaultProps.justifyContent
      );
      expect(component.props().spacing).toEqual(defaultProps.spacing);
      expect(component.props().flexGrow).toEqual(defaultProps.flexGrow);
      expect(component.props().flexShrink).toEqual(defaultProps.flexShrink);
      expect(component.props().flexDirection).toEqual(
        defaultProps.flexDirection
      );
      expect(component.props().flexWrap).toEqual(defaultProps.flexWrap);
      expect(component.props().onResize).toEqual(defaultProps.onResize);
    });
  });

  describe("alignItems prop", () => {
    it("sets given valid custom alignItems", () => {
      const alignItems = "stretch";

      const wrapper = mount(<Grid alignItems={alignItems} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(alignItems);
    });

    it("gives an error given an invalid alignItems", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const alignItems = "middle";

      mount(<Grid alignItems={alignItems} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("renders given non null children", () => {
      const child = <GridItem />;

      const wrapper = mount(
        <Grid>
          {null}
          {child}
        </Grid>
      );

      expect(
        wrapper
          .find("Grid")
          .childAt(0)
          .containsMatchingElement(child)
      ).toEqual(true);
    });

    it("passes spacing to children nodes", () => {
      const child = <GridItem />;
      const spacing = 0;

      const wrapper = mount(<Grid spacing={spacing}>{child}</Grid>);

      expect(wrapper.find("GridItem").props().spacing).toEqual(spacing);
    });

    it("passes size to children nodes", () => {
      const size = "sm";
      const child = <GridItem />;

      const wrapper = mount(<Grid>{child}</Grid>);

      wrapper.find("Grid").setState({ size });

      expect(wrapper.find("GridItem").props().size).toEqual(size);
    });
  });

  describe("classes prop", () => {
    it("applies custom classes", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Grid classes={classes} />);

      expect(
        wrapper
          .find("Grid")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-grid"];

      const wrapper = mount(<Grid />);

      expect(
        wrapper
          .find("Grid")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("flexDirection prop", () => {
    it("sets given valid custom flexDirection", () => {
      const flexDirection = "column-reverse";

      const wrapper = mount(<Grid flexDirection={flexDirection} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexDirection);
    });

    it("gives an error given an invalid flexDirection", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const flexDirection = "middle";

      mount(<Grid flexDirection={flexDirection} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("flexGrow prop", () => {
    it("sets given custom flexGrow", () => {
      const flexGrow = 100;

      const wrapper = mount(<Grid flexGrow={flexGrow} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexGrow);
    });
  });

  describe("flexShrink prop", () => {
    it("sets given custom flexShrink", () => {
      const flexShrink = 100;

      const wrapper = mount(<Grid flexShrink={flexShrink} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexShrink);
    });
  });

  describe("flexWrap prop", () => {
    it("sets given custom flexWrap", () => {
      const flexWrap = "unset";

      const wrapper = mount(<Grid flexWrap={flexWrap} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(flexWrap);
    });

    it("gives an error given an invalid flexWrap", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const flexWrap = "middle";

      mount(<Grid flexWrap={flexWrap} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("justifyContent prop", () => {
    it("sets given custom justifyContent", () => {
      const justifyContent = "center";

      const wrapper = mount(<Grid justifyContent={justifyContent} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(
        justifyContent
      );
    });

    it("gives an error given an invalid justifyContent", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const justifyContent = "middle";

      mount(<Grid justifyContent={justifyContent} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("spacing prop", () => {
    it("sets given custom spacing", () => {
      const spacing = 10;

      const wrapper = mount(<Grid spacing={spacing} />);

      expect(wrapper.find("JSXStyle").props().dynamic).toContain(
        defaultTheme.spacing(spacing)
      );
    });

    it("gives an error given an invalid spacing", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const spacing = 20;

      mount(<Grid spacing={spacing} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("onResize prop", () => {
    it("invokes onResize function on mount", () => {
      const onResize = jest.fn();

      mount(<Grid onResize={onResize} />);

      expect(onResize).toHaveBeenCalledTimes(1);
    });
  });
});
