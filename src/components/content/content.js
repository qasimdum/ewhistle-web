import React from 'react';
import './content.css';
import PublicRoutes from "../../routes/public_routes";
import Header from "../header/header";

function FrontContent() {
  return (
    <>
      <Header/>
      <PublicRoutes/>
    </>
  )
}

export default FrontContent;
