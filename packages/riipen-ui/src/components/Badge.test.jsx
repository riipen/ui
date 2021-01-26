import { mount } from "enzyme";
import React from "react";

import Badge from "./Badge";

describe("<Badge>", () => {
  it("renders without errors", () => {
    let error;
    try {
      mount(<Badge />);
    } catch (theError) {
      error = theError;
    }
    expect(error).toEqual(undefined);
  });
});
