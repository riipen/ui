import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Drawer from "./Drawer.jsx";

describe("<Drawer>", () => {
  it("renders without errors", () => {
    const onClose = jest.fn();
    let error;

    try {
      mount(<Drawer onClose={onClose} />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders the correct snapshot when open is true and onClose is provided", () => {
    const open = true;
    const onClose = jest.fn();

    const wrapper = mount(<Drawer open={open} onClose={onClose} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const onClose = jest.fn();
      const defaultProps = new Drawer({ onClose }).type.defaultProps;

      const wrapper = mount(<Drawer onClose={onClose} />);

      const component = wrapper.find("Drawer");
      expect(component.props().anchor).toEqual(defaultProps.anchor);
      expect(component.props().open).toEqual(defaultProps.open);

      expect(toJson(wrapper)).toMatchSnapshot();
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
      const onClose = jest.fn();

      mount(<Drawer anchor={anchor} onClose={onClose} />);

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
      const classes = ["classOne"];
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
    });

    it("appends higher order values to default classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-drawer"];
      const onClose = jest.fn();

      const wrapper = mount(<Drawer onClose={onClose} />);

      expect(
        wrapper
          .find("Drawer")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const onClose = jest.fn();
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Drawer classes={classes} onClose={onClose} />);

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

    it("gives a console error when onClose prop is not provided", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Drawer />);

      expect(errors).toHaveBeenCalled();
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
