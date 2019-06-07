import React from "react";
import styled from "@emotion/styled";

import CollaboratorForm from "./CollaboratorForm";

function CollaboratorBox({ collaborator, getChildren, addChild }) {
  const [openedForm, setOpenedForm] = React.useState(false);

  const children = getChildren(collaborator.id);

  function addNewChild(collabName) {
    addChild({ id: Date.now(), name: collabName, parentId: collaborator.id });
  }

  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 60px;
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
    border: 2px solid darkgray;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    color: white;
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
    &:hover {
      color: red;
      border-color: red;
    }
  `;

  const StyledUl = styled.ul`
    list-style: none;
  `;

  function handleClick() {
    setOpenedForm(true);
  }

  return (
    <>
      <Container>
        <Box>
          <ColaboratorName>{collaborator.name}</ColaboratorName>
          <AddButton onClick={handleClick}>+</AddButton>
        </Box>
      </Container>
      <StyledUl>
        {children.map(collaborator => {
          return (
            <li key={collaborator.id}>
              <CollaboratorBox
                collaborator={collaborator}
                getChildren={getChildren}
                addChild={addChild}
              />
            </li>
          );
        })}
      </StyledUl>
      {openedForm && (
        <CollaboratorForm
          addNewChild={addNewChild}
          setOpenedForm={setOpenedForm}
        />
      )}
    </>
  );
}

export default CollaboratorBox;
