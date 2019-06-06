import React from "react";
import styled from '@emotion/styled'



function ColaboratorForm({ setName }) {

  const ColaboratorForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;`;

  const Header = styled.h1`
    text-align: center;
    margin: 15px;
    font-size: 40px;
    color: white;
    font-weight: bolder;
  `;

    const FormInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    padding: 1.5em;
    background: black;
    border-radius: 0.5em;`

    const InputName = styled.input`
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
    
    const SubmitName = styled.input`
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
    width: 50%;`;

    function handleSubmit(event) {
      event.preventDefault();
      setName(event.target.elements.company.value);
    }
  
    return (
        <ColaboratorForm>
          <FormInput onSubmit={handleSubmit}>
            <Header>Enter name</Header>
            <label htmlFor="my_user" aria-label="write your user">
            <InputName
            aria-label=""
              id="my_user"
              name="user"
              type="text"
              placeholder="colaborator name"
            />
            </label>
          <SubmitName
            type="submit"
            value="submit"
          />
          </FormInput>
        </ColaboratorForm>
          
      );
}

  
 

export default ColaboratorForm;
