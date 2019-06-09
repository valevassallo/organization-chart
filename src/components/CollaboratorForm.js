/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function CollaboratorForm({ addNewChild, setOpenedForm }) {
  const [CollabName, setCollabName] = React.useState("");

  const collaboratorForm = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: "2",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    "@media (max-width: 960px)": {
      width: "70%",
      marginLeft: "15%"
    }
  };

  const header = {
    textAlign: "center",
    margin: "15px",
    fontSize: "40px",
    color: "white",
    fontWeight: "bolder",
    "@media (max-width: 960px)": {
      height: "50px",
      fontSize: "30px",
      marginBottom: "5px",
      marginTop: "0px"
    }
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
    margin: "0 auto",
    "@media (max-width: 960px)": {
      height: "120px",
      fontSize: "14px"
    }
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
    },
    "@media (max-width: 960px)": {
      fontSize: "12px",
      width: "250px"
    }
  };

  const submitName = {
    lineHeight: "1.5em",
    background: "#757575",
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
    },
    "@media (max-width: 960px)": {
      fontSize: "12px",
      margin: "0.5em",
      width: "30%",
      marginTop: "-5px",
      padding: "0.2em"
    }
  };

  const cancel = {
    fontSize: "2em",
    cursor: "pointer",
    color: "white",
    textAlign: "right",
    width: "100%",
    "@media (max-width: 960px)": {
      marginTop: "15px"
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    addNewChild(CollabName);
    setOpenedForm(false);
  }

  function handleCancel(event) {
    setOpenedForm(false);
  }

  function handleChange(event) {
    setCollabName(event.target.value);
  }

  return (
    <div css={collaboratorForm}>
      <form onSubmit={handleSubmit} css={formInput}>
        <span
          onClick={handleCancel}
          css={cancel}
          aria-label="Close create collaborator"
        >
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
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="submit" css={submitName} />
      </form>
    </div>
  );
}

export default CollaboratorForm;
