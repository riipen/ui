import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import Table from "./Table";
import TableBody from "./TableBody";
import TableGeneratorRow from "./TableGeneratorRow";

describe("<TableGeneratorRow>", () => {
  it("renders without errors", () => {
    let error;

    try {
      mount(
        <Table>
          <TableBody>
            <TableGeneratorRow />
          </TableBody>
        </Table>
      );
    } catch (theError) {
      error = theError;
    }

    expect(error).toEqual(undefined);
  });

  it("renders correct snapshot", () => {
    const wrapper = mount(
      <Table>
        <TableBody>
          <TableGeneratorRow />
        </TableBody>
      </Table>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
