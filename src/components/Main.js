/** @jsx jsx */
import React from "react";
import ColaboratorBox from "./CollaboratorBox";
import { jsx } from "@emotion/core";

const title = {
  textAlign: "center",
  margin: "15px",
  fontSize: "40px",
  color: "black",
  fontWeight: "bolder"
};

const styledLi = {
  listStyle: "none",
  position: "relative",
  "&:after": {
    content: '""',
    top: "126px",
    bottom: "85px",
    left: "71px",
    width: "3px",
    backgroundColor: "black",
    position: "absolute"
  }
};

function Main({ companyName, ceoName }) {
  const [tree, setTree] = React.useState([
    { id: 1, name: ceoName, parentId: null }
  ]);

  function getChildren(id) {
    return tree.filter(collaborator => collaborator.parentId === id);
  }

  function addChild(child) {
    setTree([...tree, child]);
  }

  return (
    <>
      <h1 css={title}>{companyName}</h1>
      <li css={styledLi}>
        <ColaboratorBox
          collaborator={tree[0]}
          getChildren={getChildren}
          addChild={addChild}
        />
      </li>
    </>
  );
}

export default Main;
