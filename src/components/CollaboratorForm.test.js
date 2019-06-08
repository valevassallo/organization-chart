import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import CollaboratorForm from "./CollaboratorForm";

test("CollaboratorForm", () => {
  const addNewChild = jest.fn();
  const setOpenedForm = jest.fn();
  const { asFragment } = render(
    <CollaboratorForm addNewChild={addNewChild} setOpenedForm={setOpenedForm} />
  );

  expect(asFragment()).toMatchSnapshot();
});

test("CreateCollaborator", async () => {
  const addNewChild = jest.fn();
  const setOpenedForm = jest.fn();
  const { getByLabelText } = render(
    <CollaboratorForm addNewChild={addNewChild} setOpenedForm={setOpenedForm} />
  );

  const input = await waitForElement(() =>
    getByLabelText("Get Collaborator Name")
  );
  fireEvent.change(input, {
    target: {
      value: "ColaboratorJuan"
    }
  });
  fireEvent.submit(input);

  expect(addNewChild).toHaveBeenCalledWith("ColaboratorJuan");
});
