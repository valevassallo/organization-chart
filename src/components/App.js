import React from "react";
import CompanyForm from "./CompanyForm";
import CEOForm from "./CEOForm";
import Main from "./Main";

function App() {
  const [companyName, setCompanyName] = React.useState("");
  const [ceoName, setCeoName] = React.useState("");

  if (companyName && ceoName) {
    return <Main companyName={companyName} ceoName={ceoName} />;
  } else if (companyName) {
    return <CEOForm setCeoName={setCeoName} />;
  } else {
    return <CompanyForm setCompanyName={setCompanyName} />;
  }
}

export default App;
