import React from "react";
import styled from "@emotion/styled";

function CompanyForm({ setCompanyName }) {
  const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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

  const Header = styled.h1`
    text-align: center;
    margin: 15px;
    font-size: 40px;
    color: white;
    font-weight: bolder;
  `;

  const InputCompanyName = styled.input`
    margin: 1em 0;
    font-size: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 4px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    width: 400px;
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
    width: 250px;
  `;

  function handleSubmit(event) {
    event.preventDefault();
    setCompanyName(event.target.elements.company.value);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Header>Company's name</Header>
        <label name="company">
          <InputCompanyName
            type="text"
            required
            placeholder="Enter company's name"
            name="company"
            id="company"
          />
        </label>
        <Submit type="submit" value="Next" />
      </Form>
    </FormContainer>
  );
}

export default CompanyForm;
