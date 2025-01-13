import React, { FC } from "react";
import { render } from "@testing-library/react";
import B, { A } from "./fail";

it("should work", () => {
  const renderSpy = jest.fn(() => <div>mock a</div>);

  jest.spyOn(require("./fail"), "A").mockImplementation(renderSpy);

  const b = render(<B />);
  b.debug();
  expect(renderSpy).toHaveBeenCalled();
});
