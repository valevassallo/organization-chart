import React from "react";
import styled from "@emotion/styled";

import CollaboratorForm from "./ColaboratorForm";

function ColaboratorBox({ name, setCollaboratorName }) {
  const [openedForm, setOpenedForm] = React.useState(false);

  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 1.5em;
    background: black;
    border-radius: 0.5em;
  `;

  const ColaboratorName = styled.p`
    font-size: 2em;
    color: white;
    text-decoration: none;
  `;

  const AddButton = styled.div`
    border: 2px solid white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: red;
      border-color: red;
    }
  `;

  function handleClick() {
    setOpenedForm(true);
  }

  return (
    <>
      <Container>
        <Box>
          <ColaboratorName>{name}</ColaboratorName>
          <AddButton onClick={handleClick}>+</AddButton>
        </Box>
      </Container>
      {openedForm && (
        <CollaboratorForm
          setCollaboratorName={setCollaboratorName}
          setOpenedForm={setOpenedForm}
        />
      )}
    </>
  );
}

export default ColaboratorBox;
