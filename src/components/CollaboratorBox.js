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
    borderRadius: "0.5em",
    position: "relative",
    "&:before": {
      content: '""',
      borderBottom: "solid 3px black",
      borderLeft: "solid 3px black",
      position: "absolute",
      top: "-30px",
      width: "49px",
      height: "80px",
      left: "-49px"
    }
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
    listStyle: "none",
    paddingLeft: "120px",
    display: "flex",
    flexDirection: "column"
  };

  const styledLi = {
    position: "relative",
    "&:after": {
      content: '""',
      top: "108px",
      bottom: "85px",
      left: "71px",
      width: "3px",
      backgroundColor: "black",
      position: "absolute"
    }
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
            <li key={collaborator.id} css={styledLi}>
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
