import React from 'react';
import './content.css';
import {Layout} from "antd";
import PublicRoutes from "../../routes/public_routes";
import Header from "../header/header";

function FrontContent() {
  return (
    <>
      <Header/>
      <Layout.Content className="site-layout" style={{padding: '0 50px'}}>
        <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
          <PublicRoutes/>
        </div>
      </Layout.Content>
    </>
  )
}

export default FrontContent;
