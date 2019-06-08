import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CEOForm from "./CEOForm";

test("CEOForm", () => {
  const { asFragment } = render(<CEOForm />);

  expect(asFragment()).toMatchSnapshot();
});

test("CEOForm functionality", () => {
  const setCeoName = jest.fn();
  const { asFragment, getByLabelText } = render(
    <CEOForm setCeoName={setCeoName} />
  );

  expect(asFragment()).toMatchSnapshot();
  const input = getByLabelText("Input to get CEO's name");

  fireEvent.change(input, {
    target: { value: "CESAR" }
  });

  fireEvent.submit(input);

  expect(setCeoName).toHaveBeenCalledWith("CESAR");
});
