import { mount } from "enzyme";
import React from "react";

import Spinner from "./Spinner";

describe("<Spinner>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<Spinner />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  describe("default props", () => {
    it("sets correct default props", () => {
      const wrapper = mount(<Spinner />);

      expect(wrapper.find("Spinner").props().variant).toEqual("scale");
    });
  });

  describe("variant prop", () => {
    it("renders the correct spinner when set to clip", () => {
      const variant = "clip";

      const wrapper = mount(<Spinner variant={variant} />);

      expect(wrapper.find("SpinnerClip").length).toEqual(1);
    });

    it("renders the correct spinner when set to pulse", () => {
      const variant = "pulse";

      const wrapper = mount(<Spinner variant={variant} />);

      expect(wrapper.find("SpinnerPulse").length).toEqual(1);
    });

    it("renders the correct spinner when set to scale", () => {
      const variant = "scale";

      const wrapper = mount(<Spinner variant={variant} />);

      expect(wrapper.find("SpinnerScale").length).toEqual(1);
    });
  });
});
