import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Drawer from "./Drawer.jsx";

describe("<Drawer>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<Drawer />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("snapshot test when open is true and onClose is provided", () => {
    const open = true;
    const onClose = jest.fn();

    const wrapper = mount(<Drawer open={open} onClose={onClose} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Drawer().type.defaultProps;

      const wrapper = mount(<Drawer />);

      const component = wrapper.find("Drawer");
      expect(component.props().anchor).toEqual(defaultProps.anchor);
      expect(component.props().open).toEqual(defaultProps.open);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("appends higher order values to default classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-drawer"];

      const wrapper = mount(<Drawer />);

      expect(
        wrapper
          .find("Drawer")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("anchor prop", () => {
    it("sets anchor class name with a valid anchor and open prop is true", () => {
      const anchor = "bottom";
      const open = true;
      const onClose = jest.fn();

      const wrapper = mount(
        <Drawer anchor={anchor} open={open} onClose={onClose} />
      );

      expect(
        wrapper
          .find("ClickAway")
          .childAt(0)
          .childAt(0)
          .hasClass(anchor)
      ).toEqual(true);
    });

    it("gives an error when given an invalid anchor", () => {
      const anchor = "leftright";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Drawer anchor={anchor} />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("children prop", () => {
    it("passes children to the ClickAway component when open prop is true", () => {
      const child = <h1>The children prop</h1>;
      const open = true;
      const onClose = jest.fn();

      const wrapper = mount(
        <Drawer children={child} open={open} onClose={onClose} />
      );

      expect(wrapper.find("ClickAway").contains(child)).toEqual(true);
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the div inside of ClickAway", () => {
      const classes = ["classOne", "classTwo"];
      const open = true;
      const onClose = jest.fn();

      const wrapper = mount(
        <Drawer classes={classes} open={open} onClose={onClose} />
      );

      expect(
        wrapper
          .find("ClickAway")
          .childAt(0)
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
      expect(
        wrapper
          .find("ClickAway")
          .childAt(0)
          .childAt(0)
          .hasClass(classes[1])
      ).toEqual(true);
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Drawer classes={classes} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("onClose prop", () => {
    it("passes onClose handler to ClickAway", () => {
      const open = true;
      const onClose = jest.fn();

      const wrapper = mount(<Drawer open={open} onClose={onClose} />);

      expect(wrapper.find("ClickAway").props().onClickAway).toEqual(onClose);
    });

    it("invokes onClose handler when component requests to be closed", () => {
      const open = true;
      const onClose = jest.fn();

      const wrapper = mount(<Drawer open={open} onClose={onClose} />);

      wrapper.find("ClickAway").simulate("click");

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("open prop", () => {
    it("renders contents of the component when open is true", () => {
      const open = true;
      const onClose = jest.fn();

      const wrapper = mount(<Drawer open={open} onClose={onClose} />);

      expect(wrapper.find("Drawer").children()).not.toHaveLength(0);
      expect(wrapper.find("Backdrop")).toHaveLength(1);
      expect(wrapper.find("ClickAway")).toHaveLength(1);
    });

    it("does not render contents of the component when open is false", () => {
      const open = false;
      const onClose = jest.fn();

      const wrapper = mount(<Drawer open={open} onClose={onClose} />);

      expect(wrapper.find("Drawer").children()).toHaveLength(0);
    });
  });
});
