import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Form from "./Form";
import Typography from "./Typography";

describe("<Form>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Form />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Form />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Form />);

      expect(wrapper.find("Form").props().enter).toEqual(true);
      expect(wrapper.find("Form").props().errorScroll).toEqual(true);
    });
  });

  describe("children prop", () => {
    it("displays given children", () => {
      const child = <div>child</div>;

      const wrapper = mount(<Form>{child}</Form>);

      expect(wrapper.containsMatchingElement(child)).toBeTruthy();
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Form classes={classes} />);

      expect(
        wrapper
          .find("Form")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });

    it("appends higher order values to classes prop with withClass decorator", () => {
      const classes = ["riipen", "riipen-form"];

      const wrapper = mount(<Form />);

      expect(wrapper.find("Form").props().classes).toEqual(classes.sort());
    });
  });

  describe("error prop", () => {
    const props = {};

    const tests = [
      { argument: "Error" },
      { argument: <Typography>Please provide a name</Typography> }
    ];

    tests.forEach(test => {
      it("sets class name as error with valid custom error type", () => {
        props.error = test.argument;

        const wrapper = mount(<Form error={props.error} />);

        expect(
          wrapper
            .find("Notice")
            .childAt(0)
            .childAt(0)
            .hasClass("error")
        ).toEqual(true);
      });
    });

    it("sets class name as errorContainer when valid error is used", () => {
      const error = "Yay";

      const wrapper = mount(<Form error={error} />);

      expect(
        wrapper
          .find("Form")
          .childAt(0)
          .hasClass("errorContainer")
      ).toEqual(true);
    });
  });

  describe("errors prop", () => {
    const props = {};

    const tests = [
      { argument: ["Error", "Sad"] },
      { argument: { errorOne: "Error", errorTwo: "Sad" } },
      {
        argument: [
          <Typography>Please provide a name</Typography>,
          <Typography>Error</Typography>
        ]
      }
    ];

    tests.forEach(test => {
      it("sets class name as errors with valid custom errors type", () => {
        props.errors = test.argument;

        const wrapper = mount(<Form errors={props.errors} />);

        expect(
          wrapper
            .find("Notice")
            .childAt(0)
            .childAt(0)
            .hasClass("errors")
        ).toEqual(true);
      });
    });

    it("sets class name as errorContainer when valid errors are used", () => {
      const errors = ["Error", "Sad"];

      const wrapper = mount(<Form errors={errors} />);

      expect(
        wrapper
          .find("Form")
          .childAt(0)
          .hasClass("errorContainer")
      ).toEqual(true);
    });

    it("does not set errorContainer class name without valid errors", () => {
      const wrapper = mount(<Form />);

      expect(
        wrapper
          .find("Form")
          .childAt(0)
          .hasClass("errorContainer")
      ).toEqual(false);
    });
  });
});
