import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Chip from "./Chip";

it("renders without errors", () => {
  try {
    mount(<Chip />);
  } catch (error) {
    expect(true).toEqual(false);
  }
});

describe("default props", () => {
  it("sets correct default props", () => {
    const defaultProps = new Chip().type.defaultProps;
    defaultProps.classes.push("riipen-chip", "riipen");

    const wrapper = mount(<Chip />);

    const component = wrapper.find("Chip").childAt(0);
    expect(component.name()).toEqual("div");
    expect(component.hasClass(defaultProps.color)).toEqual(true);
    expect(component.hasClass("disabled")).toEqual(false);
    expect(component.hasClass("hover")).toEqual(false);
    expect(component.hasClass(defaultProps.size)).toEqual(true);
    expect(component.hasClass(defaultProps.variant)).toEqual(true);
    expect(component.childAt(0).name()).toEqual("span");

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("variant prop", () => {
  it("outlines chip given outlined variant", () => {
    const wrapper = mount(<Chip variant="outlined" />);

    expect(
      wrapper
        .find("Chip")
        .childAt(0)
        .hasClass("outlined")
    ).toEqual(true);
  });
});

describe("component prop", () => {
  it("component can be any element", () => {
    const wrapper = mount(<Chip component="a" />);

    expect(wrapper.find("a")).toHaveLength(1);
    expect(
      wrapper
        .find("Chip")
        .childAt(0)
        .name()
    ).toEqual("a");
  });
});

describe("color prop", () => {
  it("sets custom color", () => {
    const custom = "dark";

    const wrapper = mount(<Chip color={custom} />);

    expect(wrapper.find("Chip").props().color).toEqual(custom);
    expect(
      wrapper
        .find("Chip")
        .childAt(0)
        .hasClass(custom)
    ).toEqual(true);
  });

  it("gives an error when given an invalid color", () => {
    const errors = jest.spyOn(console, "error").mockImplementation();

    mount(<Chip color="red" />);

    expect(errors).toHaveBeenCalledTimes(1);
  });
});

describe("label prop", () => {
  it("displays label given as the label prop", () => {
    const label = "A test label";

    const wrapper = mount(<Chip label={label} />);

    expect(wrapper.find("Chip").props().label).toEqual(label);
    expect(
      wrapper
        .find("Chip")
        .find("span")
        .text()
    ).toEqual(label);
  });

  it("displays label from child", () => {
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
  });
});

describe("onClick event", () => {
  it("invokes onClick handler when clicked", () => {
    const handler = jest.fn();

    const wrapper = mount(<Chip onClick={handler} />);

    expect(handler).toHaveBeenCalledTimes(0);

    wrapper.find("Chip").simulate("click");
    expect(handler).toHaveBeenCalledTimes(1);

    wrapper.find("Chip").simulate("click");
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
