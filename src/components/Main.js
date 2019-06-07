import React from "react";
import ColaboratorBox from "./CollaboratorBox";
import styled from "@emotion/styled";

const Title = styled.h1`
  text-align: center;
  margin: 15px;
  font-size: 40px;
  color: black;
  font-weight: bolder;
`;

function Main({ companyName, ceoName }) {
  const [tree, setTree] = React.useState([
    { id: 1, name: ceoName, parentId: null }
  ]);

  function getChilds(id) {
    return tree.filter(collaborator => collaborator.parentId === id);
  }

  function addChild(child) {
    setTree([...tree, child]);
    console.log(tree);
  }

  return (
    <>
      <Title>{companyName}</Title>
      <ColaboratorBox
        collaborator={tree[0]}
        getChilds={getChilds}
        addChild={addChild}
      />
    </>
  );
}

export default Main;
