import React from 'react';
import './App.css';
import {Layout} from "antd";
import Content from "./components/content/content";
import BackendContent from "./components/content/backendContent";
import {useHistory} from 'react-router-dom';
import './base.css';
import './pwc-forms.css';
import './featured-tabs.css';


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
    <div className="page-container" role="main">
        {content}
        <Footer style={{textAlign: 'center'}}>Copywrite 2020 PwC</Footer>
    </div>
  );
}

export default App;
