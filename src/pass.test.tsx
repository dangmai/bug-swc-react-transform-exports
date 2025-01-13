import React, { FC } from "react";
import { render } from "@testing-library/react";
import B, { A } from "./pass";

it("should work", () => {
  const renderSpy = jest.fn(() => <div>mock a</div>);

  jest.spyOn(require("./pass"), "A").mockImplementation(renderSpy);

  const b = render(<B />);
  b.debug();
  expect(renderSpy).toHaveBeenCalled();
});
