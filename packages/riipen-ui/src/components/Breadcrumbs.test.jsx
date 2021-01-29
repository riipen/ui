import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Breadcrumbs from "./Breadcrumbs.jsx";

describe("<Breadcrumbs>", () => {
  it("renders without errors", () => {
    let error;
    const child = <h1>hello hello</h1>;
    try {
      mount(<Breadcrumbs children={child} />);
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(undefined);
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const child = <h1>hello hello</h1>;
      const defaultProps = new Breadcrumbs({ children: child }).type
        .defaultProps;

      const wrapper = mount(<Breadcrumbs children={child} />);

      const component = wrapper.find("Breadcrumbs");
      expect(component.props().component).toEqual(defaultProps.component);
      expect(component.props().separator).toEqual(defaultProps.separator);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("children prop", () => {
    it("renders children nodes as typography", () => {
      const child1 = <h1>hello hello</h1>;
      const child2 = <h1>hello 2</h1>;

      const wrapper = mount(
        <Breadcrumbs>
          {child1}
          {child2}
        </Breadcrumbs>
      );

      const list = wrapper
        .find("Breadcrumbs")
        .find("Typography")
        .find("ol")
        .find("li");
      expect(list.at(0).contains(child1)).toEqual(true);
      expect(list.at(2).contains(child2)).toEqual(true);
    });

    it("assigns children nodes unique keys", () => {
      const child1 = <h1>hello hello</h1>;
      const child2 = <h1>hello 2</h1>;

      const wrapper = mount(
        <Breadcrumbs>
          {child1} {child2}
        </Breadcrumbs>
      );

      const list = wrapper
        .find("Breadcrumbs")
        .find("Typography")
        .find("ol")
        .find("li");

      expect(list.at(0).key()).not.toEqual(list.at(2).key());
    });
  });

  describe("classes prop", () => {
    it("applies all classes to the ol element", () => {
      const classes = ["classOne", "classTwo"];
      const child = <h1>hello hello</h1>;

      const wrapper = mount(<Breadcrumbs classes={classes} children={child} />);

      expect(
        wrapper
          .find("Breadcrumbs")
          .childAt(0)
          .find("ol")
          .hasClass(classes[0])
      ).toEqual(true);
      expect(
        wrapper
          .find("Breadcrumbs")
          .childAt(0)
          .find("ol")
          .hasClass(classes[1])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-breadcrumbs"];
      const child = <h1>hello hello</h1>;

      const wrapper = mount(<Breadcrumbs children={child} />);

      expect(
        wrapper
          .find("Breadcrumbs")
          .props()
          .classes.sort()
      ).toEqual(classes.sort());
    });

    it("gives an error when classes are provided as one string", () => {
      const classes = "classOne classTwo";
      const child = <h1>hello hello</h1>;
      const errors = jest.spyOn(console, "error").mockImplementation();

      mount(<Breadcrumbs classes={classes} children={child} />);

      expect(errors).toHaveBeenCalled();
    });
  });

  describe("component prop", () => {
    it("passes given value into the component prop of Typography", () => {
      const component = "h1";

      const child = <h1>hello hello</h1>;

      const wrapper = mount(
        <Breadcrumbs component={component} children={child} />
      );

      expect(
        wrapper
          .find("Breadcrumbs")
          .find("Typography")
          .props().component
      ).toEqual(component);
    });
  });

  describe("separator prop", () => {
    it("separates children nodes with default separator", () => {
      const child1 = <h1>hello hello</h1>;
      const child2 = <h1>hello 2</h1>;
      const defaultSeparator = new Breadcrumbs({ children: [child1, child2] })
        .type.defaultProps.separator;

      const wrapper = mount(
        <Breadcrumbs>
          {child1}
          {child2}
        </Breadcrumbs>
      );

      const list = wrapper
        .find("Breadcrumbs")
        .find("Typography")
        .find("ol")
        .find("li");
      expect(list.at(0).contains(child1)).toEqual(true);
      expect(list.at(1).text()).toEqual(defaultSeparator);
      expect(list.at(2).contains(child2)).toEqual(true);
    });

    it("separates children nodes with custom separator", () => {
      const child1 = <h1>hello hello</h1>;
      const child2 = <h1>hello 2</h1>;
      const separator = "mmm";

      const wrapper = mount(
        <Breadcrumbs separator={separator}>
          {child1}
          {child2}
        </Breadcrumbs>
      );

      const list = wrapper
        .find("Breadcrumbs")
        .find("Typography")
        .find("ol")
        .find("li");
      expect(list.at(0).contains(child1)).toEqual(true);
      expect(list.at(1).text()).toEqual(separator);
      expect(list.at(2).contains(child2)).toEqual(true);
    });
  });
});
