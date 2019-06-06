import React from "react";
import CompanyForm from "./CompanyForm";
import CEOForm from "./CEOForm";
import Main from "./Main";

function App() {
  const [companyName, setCompanyName] = React.useState("");
  const [ceoName, setCeoName] = React.useState("");

  return (
    <>
      <CompanyForm />
      <CEOForm />
      <Main />
    </>
  );
}

export default App;
