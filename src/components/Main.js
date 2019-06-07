import React from "react";
import ColaboratorBox from "./ColaboratorBox";

function Main({ companyName, ceoName }) {
  return (
    <>
      <h1>
        {companyName} + {ceoName}
      </h1>
      <ColaboratorBox name="Lian" />
    </>
  );
}

export default Main;
