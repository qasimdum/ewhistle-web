import React from 'react';
import './header.css';
import {Link, NavLink, useHistory} from 'react-router-dom';

import './global-slim-header.css';
import './global-nav.css';

function HeaderPage() {
  const history = useHistory();
  const initPage = history.location.pathname;
  const [selectedMenu, setSelectedMenu] = React.useState(initPage);

  let selectedMenuText = '';
  switch (selectedMenu) {
    case '/policy': selectedMenuText = 'Whistblower Policy'; break;
    case '/report_allegation': selectedMenuText = 'Report An Allegation'; break;
    case '/allegation_tracking': selectedMenuText = 'Allegation Status'; break;
    case '/signin': selectedMenuText = 'Admin Login'; break;
    default: selectedMenuText = 'Home';break;
  }


  function toggleMobileMode(e) {
    e.preventDefault();
    e.stopPropagation();

    const el = document.querySelector('#dropdownTrigger_lg');
    if (el.classList.contains('glb-slim-header__navbar-toggle--active')) {
      el.classList.remove('navbar-toggle--active');
      el.classList.remove('glb-slim-header__navbar-toggle--active');
      document.querySelector('body').classList.remove('glb-nav-active');
    } else {
      el.classList.add('navbar-toggle--active');
      el.classList.add('glb-slim-header__navbar-toggle--active');
      document.querySelector('body').classList.add('glb-nav-active');

      //handleBreadcrumbScroll();
    }
  }

  return (
    <>
      {/*<Header className={'header'}>
        <Row>
          <Col sm={8} xs={24}>
            <div className="logo">
              <img src={LogoImage} alt={'logo'} />
            </div>
          </Col>
          <Col sm={16} xs={24}>
            <Menu theme={"light"} mode="horizontal" defaultSelectedKeys={[selectedMenu]} onSelect={changePage}>
              <Menu.Item key="/">Home</Menu.Item>
              <Menu.Item key="/policy">Whistleblower policy</Menu.Item>
              <Menu.Item key="/report_allegation">Report an Allegation</Menu.Item>
              <Menu.Item key="/allegation_tracking">Allegation status</Menu.Item>
              <Menu.Item key="/signin">Admin Login</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>*/}
      <section className="page-section--no-pad  fullwidth">
          <div
            className="glb-slim-header glb-slim-header--simple glb-slim-header--has-breadcrumb  glb-slim-header--togglebreadcrumb"
            id="glbSlimHeader">
            {/*glb-slim-header-wrapper slide headroom--not-top glb-slim-header-wrapper--unpinned headroom--bottom*/}
            <div className="glb-slim-header-wrapper " id="glbSlimHeaderWrapper">
              <div className="glb-slim-header__bar" id="glbSlimHeaderBar">
                <div className="container glb-slim-header__container">
                  <div className=" glb-slim-header__flexrow ">
                    <div className="  glb-slim-header__branding">
                      <a className="glb-slim-header__logo" href="http://www.pwc.com/gx/en.html">
                        <img alt="PwC" src="assets/images/header/pwclogo.svg" className=" img-responsive" />
                      </a>
                      <span className="glb-slim-header__divider " role="separator"></span>
                      <a className="glb-slim-header__subbrand" href="http://www.pwc.com/gx/en.html">Bosnia and
                        Herzegovina</a>
                    </div>
                    <div className=" glb-slim-header__nav-ctrls">
                      <button id="dropdownTrigger_lg" type="button"
                              className="global-nav-block navbar-toggle glb-slim-header__navbar-toggle glb-slim-header__navbar-toggle--has-label"
                              data-toggle-nav="true" onClick={toggleMobileMode}>
                        <div className="icon-bar-wrapper">
                          <span className="icon-bar icon-bar1"></span>
                          <span className="icon-bar icon-bar2"></span>
                          <span className="icon-bar icon-bar3"></span>
                        </div>
                        <span className="text">Menu</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glb-slim-header-nav-wrapper">
                  <div className="dpe-component-wrapper glb-nav glb-nav--tabbed " id="globalNav">
                    <nav className="navbar ">
                      <div className="container glb-nav__container">
                        <div className="glb-nav__links-wrapper">
                          <div className="glb-nav__primary-wrapper">
                            <div className="glb-nav__primary-wrapper-pane">
                              <ul className="nav navbar-nav glb-nav__primary-links">
                                <li><NavLink onClick={() => setSelectedMenu('/')} exact to={'/'}>Home</NavLink></li>
                                <li><NavLink onClick={() => setSelectedMenu('/policy')}  exact to={'/policy'}>Whistleblower policy</NavLink></li>
                                <li><NavLink onClick={() => setSelectedMenu('/report_allegation')}  exact to={'/report_allegation'}>Report an Allegation</NavLink></li>
                                <li><NavLink onClick={() => setSelectedMenu('/allegation_tracking')}  exact to={'/allegation_tracking'}>Allegation status</NavLink></li>
                                <li><NavLink onClick={() => setSelectedMenu('/signin')}  exact to={'/signin'}>Admin Login</NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
              </div>
              <div className="glb-slim-header__breadcrumb-wrapper glb-slim-header__breadcrumb-wrapper--mobiletoggle">
                <div className="glb-slim-header__breadcrumb">
                  <div className="container">
                    <div className="row">
                      <nav id="slimHeaderBreadcrumbWrapper" className="col-xs-12 simple-breadcrumb-component ">
                        <button className="glb-slim-header__breadcrumb-reveal "
                                data-toggle-breadcrumb-clip="true">
                          <span className="sr-only">Show full breadcrumb</span>
                          <span className="icon-el icon-el--reveal-bc">
                                     <span className="icon-el__normal" />
                                     <span className="icon-el__on" />
                                   </span>
                        </button>
                        <div className="breadcrumb-component__scroll-pane">
                          <ul className="breadcrumb clearfix">
                            <li><Link to={'/'}>PwC Global</Link></li>
                            {selectedMenu !== '/' ? <li className="active"><Link to={selectedMenu}>{selectedMenuText}</Link></li> : null}
                          </ul>
                        </div>
                        <div
                          className="breadcrumb-component__scroll-fade breadcrumb-component__scroll-fade--left"/>
                        <div
                          className="breadcrumb-component__scroll-fade breadcrumb-component__scroll-fade--right"/>

                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default HeaderPage;
