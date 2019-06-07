import React from "react";
import ColaboratorBox from "./ColaboratorBox";

function Main({ companyName, ceoName }) {
  const [collaboratorName, setCollaboratorName] = React.useState("");
  return (
    <>
      <h1>
        {companyName} + {ceoName}
      </h1>
      <ColaboratorBox name="Lian" setCollaboratorName={setCollaboratorName} />
    </>
  );
}

export default Main;
