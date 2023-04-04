import React from "react";
import FormNew from "../components/FormNew";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <FormNew />
      </main>
    </>
  );
};

export default LandingPage;
