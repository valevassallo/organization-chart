import React from "react";
import CompanyForm from "./CompanyForm";
import CEOForm from "./CEOForm";
import ColaboratorForm from "./ColaboratorForm"
import Main from "./Main";

function App() {
  const [companyName, setCompanyName] = React.useState("");
  const [ceoName, setCeoName] = React.useState("");

  return (
    <>
      <CompanyForm setCompanyName={setCompanyName} />
      <CEOForm />
      <Main />
    </>
  );
}

export default App;
