import React from "react";
import styled from "@emotion/styled";

function CollaboratorForm({ addNewChild, setOpenedForm }) {
  const CollaboratorForm = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  `;

  const Header = styled.h1`
    text-align: center;
    margin: 15px;
    font-size: 40px;
    color: white;
    font-weight: bolder;
  `;

  const FormInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 1.5em;
    background: black;
    border-radius: 0.5em;
    margin: 0 auto;
  `;

  const InputName = styled.input`
    margin: 1em 0;
    font-size: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 4px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    width: 100%;
    text-align: center;
    &:focus {
      border: 1px solid red;
    }
  `;

  const SubmitName = styled.input`
    line-height: 1.5em;
    background: darkgray;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0.5em;
    border-radius: 0.25rem;
    text-align: center;
    width: 50%;
    cursor: pointer;
    &:hover {
      background-color: #484848;
    }
  `;

  const Cancel = styled.span`
    font-size: 2em;
    cursor: pointer;
    color: white;
    text-align: right;
    width: 100%;
  `;

  function handleSubmit(event) {
    event.preventDefault();
    addNewChild(event.target.elements.name.value);
    setOpenedForm(false);
  }

  function handleCancel(event) {
    setOpenedForm(false);
  }

  return (
    <CollaboratorForm>
      <FormInput onSubmit={handleSubmit}>
        <Cancel onClick={handleCancel}>&times;</Cancel>
        <Header>Collaborator name</Header>
        <label name="name" aria-label="Write Your Name">
          <InputName
            aria-label="Get Collaborator Name"
            id="my_name"
            name="name"
            type="text"
            placeholder="Enter colaborator name"
          />
        </label>
        <SubmitName type="submit" value="submit" />
      </FormInput>
    </CollaboratorForm>
  );
}

export default CollaboratorForm;
