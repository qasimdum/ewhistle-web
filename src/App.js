import React from 'react';
import './App.css';
import {Layout} from "antd";
import Content from "./components/content/content";
import BackendContent from "./components/content/backendContent";
import {useHistory} from 'react-router-dom';
const {Footer} = Layout;

function App() {
  let content = null;
  switch (useHistory().location.pathname) {
    case '/':
    case '/policy':
    case '/report_allegation':
    case '/allegation_submit':
    case '/allegation_tracking':
    case '/signin':
      content = <Content />;
      break;
    default:
      content = <BackendContent />;
      break;
  }
  return (
    <div className="App">
      <Layout>
        {content}
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
