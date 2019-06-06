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
  const Form = styled.form;
  const Header = styled.h1;

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setCeoName(event.target.elements.ceo.value);
  // }

  return (
    <FormContainer>
      ceo
      {/* <Form/>
        <Header>Company's name</Header>
      </Form> */}
    </FormContainer>
  );
}

export default CEOForm;
