import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AppBar from "./AppBar";

describe("<Menu>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Menu />);
    } catch (e) {
      error = e;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Menu />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const defaultProps = new Menu().type.defaultProps;

      const wrapper = mount(<Menu />);

      expect(wrapper.find("Menu").props().color).toEqual(defaultProps.color);
      expect(wrapper.find("Menu").props().closeOnClick).toEqual(
        defaultProps.closeOnClick
      );
      expect(wrapper.find("Menu").props().isOpen).toEqual(defaultProps.isOpen);
      expect(wrapper.find("Menu").props().keepOnScreen).toEqual(
        defaultProps.keepOnScreen
      );
      expect(wrapper.find("Menu").props().popoverStyles).toEqual(
        defaultProps.popoverStyles
      );
      expect(wrapper.find("Menu").props().variant).toEqual(
        defaultProps.variant
      );
    });
  });

  describe("anchorEl prop", () => {
    it("renders anchor element that menu is attached to", () => {
      const anchorEl = ReactTestUtils.renderIntoDocument(<AppBar />);

      const wrapper = mount(<Menu anchorEl={anchorEl} />);

      expect(wrapper.find("Popover").props().anchorEl).toEqual(anchorEl);
    });
  });

  describe("anchorPosition prop", () => {
    it("passes anchorPosition prop to correct child", () => {
      const anchorPosition = { horizontal: "left", vertical: "bottom" };

      const wrapper = mount(<Menu anchorPosition={anchorPosition} />);

      expect(wrapper.find("Popover").props().anchorPosition).toEqual(
        anchorPosition
      );
    });
  });

  describe("autoFocus prop", () => {
    it("passes autoFocus prop to correct child", () => {
      const autoFocus = true;
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(
        <Menu anchorEl={anchorEl} autoFocus={autoFocus}>
          <MenuItem />
        </Menu>
      );

      expect(wrapper.find("MenuList").props().autoFocus).toEqual(autoFocus);
    });
  });

  describe("children prop", () => {
    it("renders given children", () => {
      const child = <div>child</div>;
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(<Menu anchorEl={anchorEl}>{child}</Menu>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(
        <Menu anchorEl={anchorEl} classes={classes}>
          <MenuItem />
        </Menu>
      );

      expect(
        wrapper
          .find("MenuList")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClasses decorator", () => {
      const classes = ["riipen", "riipen-menu"];

      const wrapper = mount(<Menu />);

      expect(
        wrapper
          .find("Menu")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });
  });

  describe("color prop", () => {
    it("passes color prop to correct child", () => {
      const color = "secondary";
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(
        <Menu anchorEl={anchorEl} color={color}>
          <MenuItem />
        </Menu>
      );

      expect(wrapper.find("MenuList").props().color).toEqual(color);
    });

    it("gives an error when given an invalid color", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Menu color="blue" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });

  describe("contentPosition prop", () => {
    it("passes contentPosition prop to correct child", () => {
      const contentPosition = { horizontal: "left", vertical: "bottom" };

      const wrapper = mount(<Menu contentPosition={contentPosition} />);

      expect(wrapper.find("Popover").props().contentPosition).toEqual(
        contentPosition
      );
    });
  });

  describe("fullWidth prop", () => {
    it("passes fullWidth prop to correct child", () => {
      const fullWidth = true;

      const wrapper = mount(<Menu fullWidth={fullWidth} />);

      expect(wrapper.find("Popover").props().fullWidth).toEqual(fullWidth);
    });
  });

  describe("isOpen prop", () => {
    it("passes isOpen prop to correct child", () => {
      const isOpen = true;

      const wrapper = mount(<Menu isOpen={isOpen} />);

      expect(wrapper.find("Popover").props().isOpen).toEqual(isOpen);
    });
  });

  describe("keepOnScreen prop", () => {
    it("passes keepOnScreen prop to correct child", () => {
      const keepOnScreen = true;

      const wrapper = mount(<Menu keepOnScreen={keepOnScreen} />);

      expect(wrapper.find("Popover").props().keepOnScreen).toEqual(
        keepOnScreen
      );
    });
  });

  describe("marginThreshold prop", () => {
    it("passes marginThreshold prop to correct child", () => {
      const marginThreshold = 2;

      const wrapper = mount(<Menu marginThreshold={marginThreshold} />);

      expect(wrapper.find("Popover").props().marginThreshold).toEqual(
        marginThreshold
      );
    });
  });

  describe("onChange prop", () => {
    it("invokes onChange when child is clicked", () => {
      const onChange = jest.fn();
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(
        <Menu anchorEl={anchorEl} onChange={onChange}>
          <MenuItem />
        </Menu>
      );

      wrapper
        .find("MenuItem")
        .childAt(0)
        .simulate("click");

      expect(onChange).toHaveBeenCalledWith(null, expect.any(Object));
    });
  });

  describe("onClose prop", () => {
    it("invokes onClose when child is clicked", () => {
      const onClose = jest.fn();
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(
        <Menu anchorEl={anchorEl} onClose={onClose}>
          <MenuItem />
        </Menu>
      );

      wrapper
        .find("MenuItem")
        .childAt(0)
        .simulate("click");

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("popoverStyles prop", () => {
    it("passes popoverStyles prop to correct child", () => {
      const styles = ReactTestUtils.renderIntoDocument(<style />);

      const wrapper = mount(<Menu popoverStyles={styles} />);

      expect(wrapper.find("Popover").props().styles).toEqual(styles);
    });
  });

  describe("selectedIndex prop", () => {
    it("passes selectedIndex prop to correct child", () => {
      const selectedIndex = 0;
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );

      const wrapper = mount(
        <Menu anchorEl={anchorEl} selectedIndex={selectedIndex}>
          <MenuItem />
        </Menu>
      );

      expect(wrapper.find("MenuList").props().selectedIndex).toEqual(
        selectedIndex
      );
    });
  });

  describe("variant prop", () => {
    it("passes variant prop to correct child", () => {
      const anchorEl = ReactTestUtils.renderIntoDocument(
        <div>
          <AppBar />
        </div>
      );
      const variant = "menu";

      const wrapper = mount(
        <Menu anchorEl={anchorEl} variant={variant}>
          <MenuItem />
        </Menu>
      );

      expect(wrapper.find("MenuList").props().variant).toEqual(variant);
    });

    it("throws an error with with invalid variant", () => {
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Menu variant="default" />);

      expect(errors).toHaveBeenCalledTimes(1);
    });
  });
});
