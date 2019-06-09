import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import CollaboratorBox from "./CollaboratorBox";

test("CollaboratorBox", async () => {
  const getChildren = jest.fn();
  const addChild = ["jose"];

  const { getByLabelText } = render(
    <CollaboratorBox addChild={addChild} getChildren={getChildren} />
  );

  const button = getByLabelText("Add Button");
  fireEvent.submit(button);

  const input = await waitForElement(() => getByLabelText("Collaborator Name"));

  fireEvent.change(input, {
    target: {
      value: "juancito"
    }
  });

  fireEvent.submit(input);

  expect(getChildren).toHaveBeenCalledWith("juancito");
});

test("CollaboratorBox UI", async () => {
  const { getByLabelText, asFragment} = 
  render(
    <CollaboratorBox addChild={["jose"]}
    getChildren={jest.fn()} />
  );

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(getByLabelText("Add Button"));
  await waitForElement(()=> getByLabelText("Collaborator name"));
  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(getByLabelText("");
  expect(asFragment()).toMatchSnapshot();

});