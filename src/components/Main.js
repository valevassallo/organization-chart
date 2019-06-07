import React from "react";
import ColaboratorBox from "./ColaboratorBox";
import styled from "@emotion/styled";

const Title = styled.h1`
  text-align: center;
  margin: 15px;
  font-size: 40px;
  color: black;
  font-weight: bolder;
`;

function Main({ companyName, ceoName }) {
  const [collaboratorName, setCollaboratorName] = React.useState("");
  return (
    <>
      <Title>{companyName}</Title>
      <ColaboratorBox
        name={ceoName}
        setCollaboratorName={setCollaboratorName}
      />
    </>
  );
}

export default Main;
