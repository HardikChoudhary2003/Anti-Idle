import React from "react";
// import "./App.css";
import BrandingHeader from "./branding_header.jsx"
import AuthPage from "./AuthPage.jsx";
import "./Login-Signup_component.css"

export default function LScomponent () {
  return (
    <div className="container">
        <BrandingHeader/>
        <AuthPage />
    </div>
  );
}


