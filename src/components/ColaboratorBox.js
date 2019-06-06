import React from "react";
import styled from "@emotion/styled";

function ColaboratorBox({ name }) {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const Box = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
  `;

  const ColaboratorName = styled.p`
    font-size: 2em;
  `;

  const AddButton = styled.div`
    border: 2px solid green;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  function handleClick() {
    console.log(name); // Agregar funcionalidad para abrir el formulario
  }

  return (
    <Container>
      <Box>
        <ColaboratorName>{name}</ColaboratorName>
        <AddButton onClick={handleClick}>+</AddButton>
      </Box>
    </Container>
  );
}

export default ColaboratorBox;
