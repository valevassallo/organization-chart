/** @jsx jsx */
import React from "react";
import { createPortal } from "react-dom";
import { jsx } from "@emotion/core";

import Spinner from "./Spinner";
const CollaboratorForm = React.lazy(() => import("./CollaboratorForm"));

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
    width: "15%",
    height: "5vh",
    padding: "1.5em",
    background: "black",
    borderRadius: "0.5em",
    position: "relative",
    fontSize: "0.7em",
    "&:before": {
      content: '""',
      borderBottom: "solid 3px black",
      borderLeft: "solid 3px black",
      position: "absolute",
      top: "-30px",
      width: "60px",
      height: "63px",
      left: "-63px"
    },
    "@media (max-width: 960px)": {
      fontSize: "8px",
      width: "90px"
    }
  };

  const collaboratorName = {
    fontFamily: "sans-serif",
    fontSize: "2em",
    color: "white",
    textDecoration: "none",
    marginTop: "30px",
    marginBottom: "8px",
    "@media (max-width: 960px)": {
      marginTop: "-10px"
    }
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
    },
    "@media (max-width: 960px)": {
      fontSize: "14px",
      width: "20px",
      height: "25px",
      top: "44px",
      position: "absolute"
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
      top: "130px",
      bottom: "85px",
      left: "57.5px",
      width: "3px",
      backgroundColor: "black",
      position: "absolute"
    }
  };

  function handleClick() {
    setOpenedForm(true);
  }

  function handleOpenedForm(value) {
    setOpenedForm(value);
  }

  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  return (
    <>
      <div css={container}>
        <div css={box}>
          <p css={collaboratorName}>{collaborator.name}</p>
          <div onClick={handleClick} css={addButton} aria-label="Add Button">
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
                aria-label="Collaborator Name"
              />
            </li>
          );
        })}
      </ul>
      <React.Suspense fallback={<Spinner />}>
        {openedForm &&
          createPortal(
            <CollaboratorForm
              addNewChild={addNewChild}
              setOpenedForm={handleOpenedForm}
            />,
            $portal
          )}
      </React.Suspense>
    </>
  );
}

export default CollaboratorBox;
