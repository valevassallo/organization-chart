/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import CollaboratorForm from "./CollaboratorForm";

function CollaboratorBox({ collaborator, getChildren, addChild }) {
  const [openedForm, setOpenedForm] = React.useState(false);

  const children = getChildren(collaborator.id);

  function addNewChild(collabName) {
    addChild({ id: Date.now(), name: collabName, parentId: collaborator.id });
  }

  const container = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
  };

  const box = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    height: "60px",
    padding: "1.5em",
    background: "black",
    borderRadius: "0.5em"
  };

  const collaboratorName = {
    fontFamily: "sans-serif",
    fontSize: "2em",
    color: "white",
    textDecoration: "none"
  };

  const addButton = {
    border: "2px solid darkgray",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    color: "white",
    textDecoration: "none",
    zIndex: "1",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#484848"
    }
  };

  const styledUl = {
    listStyle: "none"
  };

  function handleClick() {
    setOpenedForm(true);
  }

  return (
    <>
      <div css={container}>
        <div css={box}>
          <p css={collaboratorName}>{collaborator.name}</p>
          <div onClick={handleClick} css={addButton}>
            +
          </div>
        </div>
      </div>
      <ul css={styledUl}>
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
      </ul>
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
