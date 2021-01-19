import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";

import Chip from "./Chip";

configure({ adapter: new Adapter() });

describe("Component: Chip", () => {
  it("shallow renders succeessfully", () => {
    mount(<Chip />);
  });

  it("gets default props and renders correctly", () => {
    const wrapper = mount(<Chip />);
    const defaultProps = new Chip().type.defaultProps;
    defaultProps.classes.push("riipen-chip", "riipen");
    expect(
      wrapper
        .find("Chip")
        .props()
        .classes.sort()
    ).toEqual(defaultProps.classes.sort());

    const component = wrapper.find("Chip").childAt(0);
    expect(component.name()).toEqual("div");
    expect(component.hasClass(defaultProps.color)).toEqual(true);
    expect(component.hasClass("disabled")).toEqual(false);
    expect(component.hasClass("hover")).toEqual(false);
    expect(component.hasClass(defaultProps.size)).toEqual(true);
    expect(component.hasClass(defaultProps.variant)).toEqual(true);
    expect(component.childAt(0).name()).toEqual("span");

    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  it("displays a given label through the label prop", () => {
    const label = "A test label";
    const wrapper = mount(<Chip label={label} />);
    expect(wrapper.find("Chip").props().label).toEqual(label);
    expect(
      wrapper
        .find("Chip")
        .find("span")
        .text()
    ).toEqual(label);
    wrapper.unmount();
  });

  it("displays a label given as a child of Chip", () => {
    const label = "A label given as a child";
    const child = <div>{label}</div>;
    const wrapper = mount(<Chip>{child}</Chip>);
    expect(
      wrapper
        .find(".label")
        .children()
        .contains(child)
    ).toEqual(true);
    expect(
      wrapper
        .find(".label")
        .childAt(0)
        .text()
    ).toEqual(label);
    wrapper.unmount();
  });

  it("gets custom prop color", () => {
    const custom = "dark";
    const wrapper = mount(<Chip color={custom} />);
    expect(wrapper.find("Chip").props().color).toEqual(custom);
    expect(
      wrapper
        .find("Chip")
        .childAt(0)
        .hasClass(custom)
    ).toEqual(true);
    wrapper.unmount();
  });

  it("gives an error when setting it to an invalid color", () => {
    const errors = jest.spyOn(console, "error").mockImplementation();
    shallow(<Chip color="red" />);
    expect(errors).toHaveBeenCalledTimes(1);
  });

  it("variant prop is outlined", () => {
    const wrapper = mount(<Chip variant="outlined" />);
    expect(
      wrapper
        .find("Chip")
        .childAt(0)
        .hasClass("outlined")
    ).toEqual(true);
  });

  it("component can be any element", () => {
    const wrapper = mount(<Chip component="a"> </Chip>);

    expect(wrapper.find("a")).toHaveLength(1);
    expect(
      wrapper
        .find("Chip")
        .childAt(0)
        .name()
    ).toEqual("a");
  });
});

describe("Chip component is interactive", () => {
  it("triggers click handler on click", () => {
    const handler = jest.fn();
    const wrapper = mount(<Chip onClick={handler} />);
    expect(handler).toHaveBeenCalledTimes(0);
    wrapper.find("Chip").simulate("click");
    expect(handler).toHaveBeenCalledTimes(1);

    wrapper.find("Chip").simulate("click");
    expect(handler).toHaveBeenCalledTimes(2);
    wrapper.unmount();
  });
});
