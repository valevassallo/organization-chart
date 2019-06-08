/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function CEOForm({ setCeoName }) {
  const formContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh"
  };

  const header = {
    textAlign: "center",
    margin: "15px",
    fontSize: "40px",
    color: "white",
    fontWeight: "bolder"
  };

  const styledForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    padding: "1.5em",
    background: "black",
    borderRadius: "0.5em"
  };
  const inputCEOName = {
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

  const styledSubmit = {
    lineHeight: "1.5em",
    background: "darkgray",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0.5em",
    cursor: "pointer",
    borderRadius: "0.25rem",
    textAlign: "center",
    width: "50%",
    "&:hover": {
      backgroundColor: "#484848"
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    setCeoName(event.target.elements.ceo.value);
  }

  return (
    <div css={formContainer}>
      <form onSubmit={handleSubmit} css={styledForm}>
        <h1 css={header}>CEO's name</h1>
        <label name="ceo">
          <input
            type="text"
            required
            placeholder="Enter CEO's name"
            name="ceo"
            id="ceo"
            aria-label="Input to get CEO's name"
            autoComplete="off"
            css={inputCEOName}
          />
        </label>
        <input type="submit" value="Next" css={styledSubmit} />
      </form>
    </div>
  );
}

export default CEOForm;
