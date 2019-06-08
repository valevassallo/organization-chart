import React from "react";
import styled from "@emotion/styled";

function CEOForm({ setCeoName }) {
  const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;

  const Header = styled.h1`
    text-align: center;
    margin: 15px;
    font-size: 40px;
    color: white;
    font-weight: bolder;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 1.5em;
    background: black;
    border-radius: 0.5em;
  `;
  const InputCEOName = styled.input`
    margin: 1em 0;
    font-size: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 4px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    width: 100%;
    text-align: center;
    &:focus {
      border: 1px solid red;
    }
  `;

  const Submit = styled.input`
    line-height: 1.5em;
    background: darkgray;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 0.5em;
    cursor: pointer;
    border-radius: 0.25rem;
    text-align: center;
    width: 50%;
    &:hover {
      background-color: #484848;
    }
  `;

  function handleSubmit(event) {
    event.preventDefault();
    setCeoName(event.target.elements.ceo.value);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Header>CEO's name</Header>
        <label name="ceo">
          <InputCEOName
            type="text"
            required
            placeholder="Enter CEO's name"
            name="ceo"
            id="ceo"
            aria-label="Input to get CEO's name"
            autoComplete="off"
          />
        </label>
        <Submit type="submit" value="Next" />
      </Form>
    </FormContainer>
  );
}

export default CEOForm;
