import { mount } from "enzyme";
import React from "react";

import Container from "./Container";

describe("<Container>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<Container />);
    } catch (theError) {
      error = theError;
    }
    expect(error).toEqual(undefined);
  });
});
