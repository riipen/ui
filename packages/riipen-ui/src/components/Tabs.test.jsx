import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Tab from "./Tab";
import Tabs from "./Tabs";

describe("<Tabs>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Tabs />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Tabs />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Tabs().type.defaultProps;

      const wrapper = mount(<Tabs />);

      const component = wrapper.find("Tabs");
      expect(component.props().breakpoint).toEqual(defaultProps.breakpoint);
      expect(component.props().color).toEqual(defaultProps.color);
      expect(component.props().component).toEqual(defaultProps.component);
      expect(component.props().orientation).toEqual(defaultProps.orientation);
      expect(component.props().variant).toEqual(defaultProps.variant);
    });
  });

  describe("breakpoint prop", () => {
    it("passes valid given breakpoint to children nodes", () => {
      const breakpoint = "xl";
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs breakpoint={breakpoint}>{child}</Tabs>);

      const childrenNode = wrapper.find("Tab");
      expect(childrenNode.props().breakpoint).toEqual(breakpoint);
    });

    it("gives an error with invalid breakpoint", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Tabs breakpoint="xs" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("renders all non null children", () => {
      const child1 = <Tab value="one" />;

      const wrapper = mount(
        <Tabs>
          {null}
          {child1}
        </Tabs>
      );

      const childrenNodes = wrapper.find("Tab");
      expect(childrenNodes.at(0).props().value).toEqual("one");
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the root node", () => {
      const classes = ["classOne"];

      const wrapper = mount(<Tabs classes={classes} />);

      expect(
        wrapper
          .find("Tabs")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-tabs"];

      const wrapper = mount(<Tabs />);

      expect(
        wrapper
          .find("Tabs")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("color prop", () => {
    it("passes valid given color to children", () => {
      const color = "primary";
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs color={color}>{child}</Tabs>);

      expect(wrapper.find("Tab").props().color).toEqual(color);
    });

    it("gives an error with invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Tabs color="yellow" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("component prop", () => {
    it("applies given component to the root node", () => {
      const component = "h3";

      const wrapper = mount(<Tabs component={component} />);

      expect(
        wrapper
          .find("Tabs")
          .childAt(0)
          .name()
      ).toEqual(component);
    });

    it("gives an error when given an invalid component", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();
      const component = "abcd";

      mount(<Tabs component={component} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("onChange prop", () => {
    it("sets onClick prop of children nodes", () => {
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs>{child}</Tabs>);

      expect(wrapper.find("Tab").props().onClick).not.toBeNull();
    });

    it("invokes handler when child Tab is clicked", () => {
      const onChange = jest.fn();
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs onChange={onChange}>{child}</Tabs>);

      wrapper
        .find("Tab")
        .childAt(0)
        .invoke("onClick")({ type: "click" });

      expect(onChange).toHaveBeenCalledWith(expect.any(Object), "one");
    });
  });

  describe("orientation prop", () => {
    it("passes given valid orientation to children", () => {
      const orientation = "vertical";
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs orientation={orientation}>{child}</Tabs>);

      expect(wrapper.find("Tab").props().orientation).toEqual(orientation);
    });

    it("sets valid custom orientation", () => {
      const orientation = "vertical";

      const wrapper = mount(<Tabs orientation={orientation} />);

      expect(
        wrapper
          .find("Tabs")
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .hasClass(orientation)
      ).toEqual(true);
    });

    it("gives an error with invalid orientation", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Tabs orientation="forward" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("value prop", () => {
    it("sets the Tab with the corresponding value prop as active", () => {
      const child1 = <Tab label="Item one" value="one" />;
      const child2 = <Tab label="Item two" value="two" />;
      const value = "two";

      const wrapper = mount(
        <Tabs value={value}>
          {child1}
          {child2}
        </Tabs>
      );

      const childrenNodes = wrapper.find("Tab");
      expect(childrenNodes.at(0).props().active).toEqual(false);
      expect(childrenNodes.at(1).props().active).toEqual(true);
    });
  });

  describe("textTransform prop", () => {
    it("sets textTransform in children nodes", () => {
      const textTransform = "lowercase";
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs textTransform={textTransform}>{child}</Tabs>);

      expect(wrapper.find("Tab").props().textTransform).toEqual("lowercase");
    });

    it("gives an error with invalid textTransform", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Tabs textTransform="invalid" />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("variant prop", () => {
    it("sets fullWidth to be true in children nodes when variant is fullWidth", () => {
      const variant = "fullWidth";
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs variant={variant}>{child}</Tabs>);

      expect(wrapper.find("Tab").props().fullWidth).toEqual(true);
    });

    it("sets fullWidth to be false in children nodes when variant is standard", () => {
      const variant = "standard";
      const child = <Tab label="Item one" value="one" />;

      const wrapper = mount(<Tabs variant={variant}>{child}</Tabs>);

      expect(wrapper.find("Tab").props().fullWidth).toEqual(false);
    });

    it("gives an error with invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Tabs variant="invalid" />);

      expect(errors).toHaveBeenCalled();
    });
  });
});
