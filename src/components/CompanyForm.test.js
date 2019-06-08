import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CompanyForm from "./CompanyForm";

test("CompanyForm functionality", () => {
  const setCompanyName = jest.fn();
  const { asFragment, getByLabelText } = render(
    <CompanyForm setCompanyName={setCompanyName} />
  );

  expect(asFragment()).toMatchSnapshot();
  const input = getByLabelText("Input to get Company's name");

  fireEvent.change(input, {
    target: { value: "Able" }
  });

  fireEvent.submit(input);

  expect(setCompanyName).toHaveBeenCalledWith("Able");
});
