import {Layout, Menu, Row, Col} from 'antd';
import React from 'react';
import './header.css';
import BackgroundImage1 from '../../assets/header_1.jpg';
import BackgroundImage2 from '../../assets/header_2.png';
import LogoImage from '../../assets/logo.png';
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
                        <div className="glb-nav__tools">

                          <div className="glb-nav__tools__tool glb-nav__tools__tool--dropdown ">
                            <div className="glb-nav__tools__tool-content">
                              <form className="pwc-inline-form" action="urlforfallbackprocessingpage.html"
                                    method="get">
                                <div
                                  className="pwc-inline-form__field pwc-inline-form__field--select2  pwc-inline-form__field--dropdown form-group">
                                  <label className="sr-only field-label " htmlFor="languageSelector">View this
                                    content in</label>

                                  <select id="languageSelectorMobile" name="languageSelectorMobile"
                                          style={{width: '100%'}}>
                                    <optgroup label="Choose a language:">
                                      <option value="http://pwc.com/en/" selected="">English
                                      </option>
                                      <option value="http://pwc.com/fr/">French</option>
                                      <option value="http://pwc.com/nl/">Dutch</option>
                                    </optgroup>

                                  </select>
                                </div>

                                <button type="submit" className="sr-only btn btn--primary" role="button"
                                        tabIndex="-1">Submit
                                </button>
                              </form>
                            </div>
                          </div>
                          <div className="glb-nav__tools__tool glb-nav__tools__tool--dropdown ">
                            <div className="glb-nav__tools__tool-content">
                              <form className="pwc-inline-form" action="urlforfallbackprocessingpage.html"
                                    method="get">
                                <div
                                  className="pwc-inline-form__field pwc-inline-form__field--select2 pwc-inline-form__field--auto-suggest form-group">
                                  <label className="sr-only field-label " htmlFor="territorySelector">Change
                                    country</label>
                                  <select id="territorySelectorMobile" name="territorySelectorMobile"
                                          style={{width: '100%'}}>
                                    <optgroup label="Choose a country:">
                                      <option value="http://pwc.com">Global</option>
                                      <option value="http://pwc.com.au" selected="">Australia
                                      </option>
                                      <option value="http://www.pwc.com/at">Austria</option>
                                      <option value="http://www.pwc.com/br">Brazil</option>
                                      <option value="http://www.pwc.com/ca">Canada</option>
                                      <option value="http://www.pwc.com/fr">France</option>
                                      <option value="http://www.pwc.com/de">Germany</option>
                                      <option value="http://www.pwc.com/cn-s/home">Greater China
                                      </option>
                                      <option value="http://www.pwc.com/in">India</option>
                                      <option value="http://www.pwc.com/il/home">Israel</option>
                                      <option value="http://www.pwc.com/it">Italy</option>
                                      <option value="http://www.pwc.com/jp/home">Japan</option>
                                      <option value="http://www.pwc.com/la/home">Argentina, Chile,
                                        Colombia, Peru, Venezuela
                                      </option>
                                      <option value="http://www.pwc.com/mx/home">México</option>
                                      <option value="http://www.pwc.com/me/home">UAE, Lebanon,
                                        Saudi Arabia, Egypt, Qatar
                                      </option>
                                      <option value="http://www.pwc.com/nl/home">Netherlands
                                      </option>
                                      <option value="http://www.pwc.com/nordic/home">Denmark,
                                        Finland, Norway, Sweden
                                      </option>
                                      <option value="http://www.pwc.com/na/home">USA</option>
                                      <option value="http://www.pwc.com/ru-e/home">Russia</option>
                                      <option value="http://www.pwc.com/es">Spain</option>
                                      <option value="http://www.pwc.com/za/home">South Africa
                                      </option>
                                      <option value="http://www.pwc.com/sea/home">Indonesia,
                                        Malaysia, Sing
                                      </option>
                                    </optgroup>
                                  </select>
                                </div>

                                <button type="submit" className="sr-only btn btn--primary" role="button">
                                  Submit
                                </button>
                              </form>
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
                                     <span className="icon-el__normal"></span>
                                     <span className="icon-el__on"></span>
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
      {history.location.pathname === '/policy' ? (
        <div className={'landing-img-policy'}>
          <img src={BackgroundImage2} alt={'background'} />
          <div className={'text'}>

            {/*<Tag color={"blue"} onClick={() => history.push('/report_allegation')}>Report Allegation</Tag>*/}
            <button onClick={() => history.push('/report_allegation')}>Report Allegation</button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default HeaderPage;
