import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Input from "./Input";

describe("<Input>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Input />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<Input />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Input />);

      expect(wrapper.find("Input").props().disabled).toEqual(false);
      expect(wrapper.find("Input").props().multiline).toEqual(false);
    });
  });

  describe("classes prop", () => {
    it("sets custom class", () => {
      const classes = ["newClass"];

      const wrapper = mount(<Input classes={classes} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .hasClass(classes[0])
      ).toEqual(true);
    });
  });

  describe("disabled prop", () => {
    it("sets disabled class name when disabled prop is true", () => {
      const disabled = true;

      const wrapper = mount(<Input disabled={disabled} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("disabled")
      ).toEqual(true);
    });

    it("sets valid custom disabled", () => {
      const disabled = true;

      const wrapper = mount(<Input disabled={disabled} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .props().disabled
      ).toEqual(disabled);
    });
  });

  describe("endAdornment prop", () => {
    it("renders custom endAdornment", () => {
      const endAdornment = "endAdornment";
      const wrapper = mount(<Input endAdornment={endAdornment} />);

      expect(wrapper.text()).toContain(endAdornment);
    });

    it("sets correct endAdornment classes", () => {
      const wrapper = mount(<Input endAdornment="endAdornment" />);

      expect(wrapper.find("input").hasClass("endPadding")).toEqual(true);
    });
  });

  describe("error prop", () => {
    it("sets valid custom error", () => {
      const error = <span>Error</span>;

      const wrapper = mount(<Input error={error} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("error")
      ).toEqual(true);
    });

    it("renders error", () => {
      const error = <span>Error</span>;

      const wrapper = mount(<Input error={error} />);

      expect(wrapper.find("Typography").contains(error)).toEqual(true);
    });
  });

  describe("hint prop", () => {
    it("sets valid custom hint", () => {
      const hint = "Test";

      const wrapper = mount(<Input hint={hint} />);

      expect(wrapper.find("InputLabel").props().hint).toEqual(hint);
    });

    it("renders hint", () => {
      const hint = "Test";

      const wrapper = mount(<Input hint={hint} />);

      expect(wrapper.text()).toEqual(hint);
    });

    it("does not render InputLabel element when hint is not given", () => {
      const wrapper = mount(<Input />);

      expect(
        wrapper
          .find("Input")
          .children()
          .contains("InputLabel")
      ).toEqual(false);
    });
  });

  describe("startAdornment prop", () => {
    it("renders custom startAdornment", () => {
      const startAdornment = "startAdornment";
      const wrapper = mount(<Input startAdornment={startAdornment} />);

      expect(wrapper.text()).toContain(startAdornment);
    });

    it("sets correct startAdornment classes", () => {
      const wrapper = mount(<Input startAdornment="startAdornment" />);

      expect(wrapper.find("input").hasClass("startPadding")).toEqual(true);
    });
  });

  describe("label prop", () => {
    it("sets valid custom label", () => {
      const label = "Test";

      const wrapper = mount(<Input label={label} />);

      expect(wrapper.find("InputLabel").props().children).toEqual(label);
    });

    it("renders label", () => {
      const label = "Test";

      const wrapper = mount(<Input label={label} />);

      expect(wrapper.text()).toEqual(label);
    });

    it("does not render InputLabel element when label is not given", () => {
      const wrapper = mount(<Input />);

      expect(
        wrapper
          .find("Input")
          .children()
          .contains("InputLabel")
      ).toEqual(false);
    });
  });

  describe("labelProps prop", () => {
    it("passes props to InputLabel", () => {
      const label = "Test";
      const labelProps = { color: "black", variant: "h2" };

      const wrapper = mount(<Input label={label} labelProps={labelProps} />);

      expect(wrapper.find("InputLabel").props().color).toEqual("black");
      expect(wrapper.find("InputLabel").props().variant).toEqual("h2");
    });
  });

  describe("meta prop", () => {
    it("renders meta", () => {
      const meta = <span>Meta</span>;

      const wrapper = mount(<Input meta={meta} />);

      expect(wrapper.find("Typography").contains(meta)).toEqual(true);
    });
  });

  describe("multiline prop", () => {
    it("sets component as textarea with true multiline prop", () => {
      const multiline = true;

      const wrapper = mount(<Input multiline={multiline} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .name()
      ).toEqual("textarea");
    });

    it("sets component as input with default multiline prop", () => {
      const wrapper = mount(<Input />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .name()
      ).toEqual("input");
    });
  });

  describe("required prop", () => {
    it("sets valid custom required", () => {
      const label = "Test";
      const required = true;

      const wrapper = mount(<Input label={label} required={required} />);

      expect(wrapper.find("InputLabel").props().required).toEqual(required);
    });
  });

  describe("size prop", () => {
    it("sets valid size", () => {
      const wrapper = mount(<Input size="small" />);

      expect(wrapper.find("input").hasClass("small")).toEqual(true);
    });
  });

  describe("variant prop", () => {
    it("sets valid variant", () => {
      const wrapper = mount(<Input variant="underlined" />);

      expect(wrapper.find("input").hasClass("underlined")).toEqual(true);
    });
  });

  describe("warning prop", () => {
    it("sets valid custom warning", () => {
      const warning = <span>Error</span>;

      const wrapper = mount(<Input warning={warning} />);

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("warning")
      ).toEqual(true);
    });

    it("renders warning", () => {
      const warning = <span>Error</span>;

      const wrapper = mount(<Input warning={warning} />);

      expect(wrapper.find("Typography").contains(warning)).toEqual(true);
    });
  });

  describe("focusVisible state", () => {
    it("sets correct class name when focus event occurs", () => {
      const wrapper = mount(<Input />);

      wrapper
        .find("input")
        .last()
        .simulate("focus");

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(true);
    });

    it("sets correct class name when blur event occurs", () => {
      const wrapper = mount(<Input />);

      wrapper
        .find("input")
        .last()
        .simulate("focus");
      wrapper
        .find("input")
        .last()
        .simulate("blur");

      expect(
        wrapper
          .find("Input")
          .childAt(0)
          .childAt(0)
          .hasClass("focusVisible")
      ).toEqual(false);
    });
  });
});
