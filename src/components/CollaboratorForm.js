/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function CollaboratorForm({ addNewChild, setOpenedForm }) {
  const collaboratorForm = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  };

  const header = {
    textAlign: "center",
    margin: "15px",
    fontSize: "40px",
    color: "white",
    fontWeight: "bolder"
  };

  const formInput = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    padding: "1.5em",
    background: "black",
    borderRadius: "0.5em",
    margin: "0 auto"
  };

  const inputName = {
    margin: "1em 0",
    fontSize: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "4px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #ddd",
    width: "100%",
    textAlign: "center",
    "&:focus": {
      border: "1px solid red"
    }
  };

  const submitName = {
    lineHeight: "1.5em",
    background: "darkgray",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0.5em",
    borderRadius: "0.25rem",
    textAlign: "center",
    width: "50%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#484848"
    }
  };

  const cancel = {
    fontSize: "2em",
    cursor: "pointer",
    color: "white",
    textAlign: "right",
    width: "100%"
  };

  function handleSubmit(event) {
    event.preventDefault();
    addNewChild(event.target.elements.name.value);
    setOpenedForm(false);
  }

  function handleCancel(event) {
    setOpenedForm(false);
  }

  return (
    <div css={collaboratorForm}>
      <form onSubmit={handleSubmit} css={formInput}>
        <span onClick={handleCancel} css={cancel}>
          &times;
        </span>
        <h1 css={header}>Collaborator name</h1>
        <label name="name" aria-label="Write Your Name">
          <input
            aria-label="Get Collaborator Name"
            id="my_name"
            name="name"
            type="text"
            placeholder="Enter colaborator name"
            css={inputName}
          />
        </label>
        <input type="submit" value="submit" css={submitName} />
      </form>
    </div>
  );
}

export default CollaboratorForm;
