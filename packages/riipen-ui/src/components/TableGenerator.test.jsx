import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import TableGenerator from "./TableGeneratorRow";

describe("<TableGenerator>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(<TableGenerator />);
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(<TableGenerator />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
