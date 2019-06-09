import React from "react";
import { render } from "@testing-library/react";

import Main from "./Main";

test("Main should create a company's name and ceo's name", () => {
  const companyName = "Able";

  const ceoName = "Marieth";

  const { asFragment } = render(
    <Main companyName={companyName} ceoName={ceoName} />
  );

  expect(asFragment()).toMatchSnapshot();
});
