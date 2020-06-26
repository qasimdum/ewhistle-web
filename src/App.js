import React from 'react';
import './App.css';
import Content from "./components/content/content";
import BackendContent from "./components/content/backendContent";
import {useHistory} from 'react-router-dom';
import './base.css';
import './pwc-forms.css';
import './featured-tabs.css';
import './web-fonts.css';
import './global-footer.css';

function App() {
  let content = null;
  switch (useHistory().location.pathname) {
    case '/':
    case '/policy':
    case '/report_allegation':
    case '/allegation_submit':
    case '/allegation_tracking':
    case '/signin':
      content = <Content/>;
      break;
    default:
      content = <BackendContent/>;
      break;
  }
  return (
    <div className="page-container" role="main">
      {content}
      <section className="page-section--explore-nav  page-section--col-black fullwidth ">
        <div className="parsys sectionpar">
            <div className="dpe-component-wrapper glb-footer glb-footer__block--reduced">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="glb-footer__disclaimer">
                      <div className="row">
                        <div className="col-md-8 glb-footer__disclaimer-text text-center">
                          <p>&copy; Copywrite 2020 PwC.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
);
}

export default App;
