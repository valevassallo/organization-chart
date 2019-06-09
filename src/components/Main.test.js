import React from "react";
import { render } from "@testing-library/react";

import Main from "./Main";

test("Main", () => {
  const companyName = "Able";

  const ceoName = "Marieth";

  const { asFragment } = render(
    <Main companyName={companyName} ceoName={ceoName} />
  );

  expect(asFragment()).toMatchSnapshot();
});
