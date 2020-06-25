import React from "react";
import {Col, Row, Tabs} from "antd";
import './home.css'
import Image1 from '../../../assets/image_1.png';
import Image2 from '../../../assets/image_2.png';
import Image3 from '../../../assets/image_3.jpg';
import Image4 from '../../../assets/image_4.jpg';
import AboutTheProcess from "../aboutTheProcess/aboutTheProcess";
import BackgroundImage1 from "../../../assets/header_1.webp";

function Home() {

  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <>
      <section id="title"
               className="no-background__mobile page-section page-section--col-primary page-section--col-dark nomove fullwidth videobghost "
               style={{
                 backgroundSize: 'cover',
                 backgroundPosition: 'center top',
                 backgroundImage: `url(${BackgroundImage1})`
               }}>


        <div className="parsys sectionpar">
          <div className="herotitle section">


            <div className="dpe-component-wrapper hero-title-component hero-title-component--lg-h1">
              <div className="hero-title hero-title-textpanel--compaign">
                <div className="container">
                  <div className="row hero-title-row--compaign">
                    <div className="textColumn col-sm-8">
                      <div className="hero-title-textpanel">
                        <h1>
                                <span className="compaign-hlight__inner">
                                    Report Allegation
                                </span>
                        </h1>
                        <p className="sub-heading">
                                <span className="compaign-hlight__inner">
                                    Your electronic Whistleblowing platform
                                </span>
                        </p>


                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>


        </div>
      </section>
      <div className={'home'}>
        <div className="dpe-component-wrapper secnav-tabs  secnav-tabs--with-icons  secnav-tabs--with-heading ">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="secnav-tabs__heading "> About the Platform </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 secnav-tabs__navigation-container">
                <ul className="secnav-tabs__navigation">
                  <li className={(currentTab === 0 ? 'active' : '') + " secnav-tabs__tab"} onClick={e => {
                    e.preventDefault();
                    setCurrentTab(0)
                  }}>
                    <a href="#tab_1-1" aria-controls="tab_1-1" role="tab" data-toggle="tab">
                      <span className="secnav-tabs__tab-title">E-Whistle</span>
                    </a>
                  </li>
                  <li className={(currentTab === 1 ? 'active' : '') + " secnav-tabs__tab"} onClick={e => {
                    e.preventDefault();
                    setCurrentTab(1)
                  }}>
                    <a href="#tab_1-2" aria-controls="tab_1-2" role="tab" data-toggle="tab">
                      <span className="secnav-tabs__tab-title">Secure communication</span>
                    </a>
                  </li>
                  <li className={(currentTab === 2 ? 'active' : '') + " secnav-tabs__tab"} onClick={e => {
                    e.preventDefault();
                    setCurrentTab(2)
                  }}>
                    <a href="#tab_1-3" aria-controls="tab_1-3" role="tab" data-toggle="tab">
                      <span className="secnav-tabs__tab-title">Who is whistblower?</span>
                    </a>
                  </li>
                  <li className={(currentTab === 3 ? 'active' : '') + " secnav-tabs__tab"} onClick={e => {
                    e.preventDefault();
                    setCurrentTab(3)
                  }}>
                    <a href="#tab_1-4" aria-controls="tab_1-4" role="tab" data-toggle="tab">
                      <span className="secnav-tabs__tab-title">Why are whistblowers important?</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="secnav-tabs__content-wrapper feat-tabs__wrapper" style={{height: 335}}>
              <div className={(currentTab === 0 ? 'active' : '') + "secnav-tabs__content feat-tabs--33-66"}
                   role="tabpanel" id="tab_1-1">
                <div className="secnav-tabs__content-container">
                  <div className="row">

                    <div className="secnav-tabs__content-featured feat-tabs__column-1 feat-tabs__column ">
                      <img src={Image1} alt={'tab description'} className="secnav-tabs__content-image img-responsive"/>
                    </div>
                    <div className="secnav-tabs__content-text feat-tabs__column-2 feat-tabs__column ">
                      <div className="secnav-tabs__content-copy">
                        {/*<h3 className="secnav-tabs__content-heading">Growth (optional heading)</h3>*/}
                        <p>E-Whistle is secure and impartial reporting platform which is specifically designed to protect the
                          identity
                          of the individuals reporting an allegation. Due diligence is conducted on each allegation by trained
                          professionals and appropriate action will be taken at the earliest. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={(currentTab === 1 ? 'active' : '') + "secnav-tabs__content feat-tabs--20-80"}
                   role="tabpanel">
                <div className="secnav-tabs__content-container">
                  <div className="row">

                    <div className="secnav-tabs__content-featured feat-tabs__column-1 feat-tabs__column ">
                      <img src={Image2} alt={'tab description'} className="secnav-tabs__content-image img-responsive"/>
                    </div>
                    <div className="secnav-tabs__content-text feat-tabs__column-2 feat-tabs__column ">
                      <div className="secnav-tabs__content-copy">
                        <p>
                          When you send the report, you have the option to choose whether you remain available for further
                          inquiries.
                          We recommend that you make yourself available because we may not be able to finalise the case without
                          further information from you.
                        </p>
                        <p>When you create an allegation you will be given a case number, and you will choose a password. You
                          will use
                          the case number and password to log in to the secure allegation section to see if you have received
                          any
                          questions.
                        </p>
                        <p>All communication with us is anonymous if you wish it to be.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={(currentTab === 2 ? 'active' : '') + "secnav-tabs__content feat-tabs--33-66"}
                   role="tabpanel">
                <div className="secnav-tabs__content-container">
                  <div className="row">
                    <div className="secnav-tabs__content-featured feat-tabs__column-1 feat-tabs__column ">
                      <img src={Image3} alt={'tab description'} className="secnav-tabs__content-image img-responsive"/>
                    </div>
                    <div className="secnav-tabs__content-text feat-tabs__column-2 feat-tabs__column ">
                      <div className="secnav-tabs__content-copy">
                        <p>A whistleblower could be a worker, self-employed, a shareholder, a volunteer, an unpaid trainee a
                          contractor, subcontractor or supplier, a former worker, or even someone going for a job interview and
                          coming
                          across information about corruption.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={(currentTab === 3 ? 'active' : '') + "secnav-tabs__content feat-tabs--33-66"}
                   role="tabpanel">
                <div className="secnav-tabs__content-container">
                  <div className="row">
                    <div className="secnav-tabs__content-featured feat-tabs__column-1 feat-tabs__column ">
                      <img src={Image4} alt={'tab description'} className="secnav-tabs__content-image img-responsive"/>
                    </div>
                    <div className="secnav-tabs__content-text feat-tabs__column-2 feat-tabs__column ">
                      <div className="secnav-tabs__content-copy">
                        <p>Recent cases exposed by whistleblowers include illegal mass surveillance, industrial scale tax
                          avoidance,
                          abuse of environmental protections, and even the sexual abuse of children by peacekeepers. Such
                          whistleblowing against large corporations and nation states is one of the most effective measures for
                          combating wrongdoing that affects the whole of society.
                        </p>
                        <p>On a personal level, many people will feel it is their duty as citizens to report crimes, or to
                          disclose
                          improper conduct, wrongdoing, and illegal activities. This may go further than purely illegal acts to
                          include omissions or corruption that go against the spirit of a law.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'row'}>
              <div className={'tabs-title'}>About the Process</div>
              <AboutTheProcess/>
            </div>
          </div>
        </div>


        {/*<div className={'tabs-title'}>About the Platform</div>
        <Tabs defaultActiveKey="1" onChange={() => {
        }} className={'home-tabs'}>
          <Tabs.TabPane tab="E-Whistle" key="1">
            <Row className={'tab-content'}>
              <Col xs={24} md={20}>
                <p>E-Whistle is secure and impartial reporting platform which is specifically designed to protect the
                  identity
                  of the individuals reporting an allegation. Due diligence is conducted on each allegation by trained
                  professionals and appropriate action will be taken at the earliest. </p>
              </Col>
              <Col xs={24} md={4} style={{textAlign: 'right'}}>
                <img src={Image1} alt={'tab description'}/>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Secure communication" key="2">
            <Row className={'tab-content'}>
              <Col xs={24} md={19}>
                <p>
                  When you send the report, you have the option to choose whether you remain available for further
                  inquiries.
                  We recommend that you make yourself available because we may not be able to finalise the case without
                  further information from you.
                </p>
                <p>When you create an allegation you will be given a case number, and you will choose a password. You
                  will use
                  the case number and password to log in to the secure allegation section to see if you have received
                  any
                  questions.
                </p>
                <p>All communication with us is anonymous if you wish it to be.</p>
              </Col>
              <Col xs={24} md={5}>
                <img src={Image2} alt={'tab description'}/>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Who is a whistleblower?" key="3">
            <Row className={'tab-content'}>
              <Col xs={24} md={16}>
                <p>A whistleblower could be a worker, self-employed, a shareholder, a volunteer, an unpaid trainee a
                  contractor, subcontractor or supplier, a former worker, or even someone going for a job interview and
                  coming
                  across information about corruption.</p>
              </Col>
              <Col xs={24} md={8}>
                <img src={Image3} alt={'tab description'}/>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Why are whistleblowers important?" key="4">
            <Row className={'tab-content'}>
              <Col xs={24} md={16}>
                <p>Recent cases exposed by whistleblowers include illegal mass surveillance, industrial scale tax
                  avoidance,
                  abuse of environmental protections, and even the sexual abuse of children by peacekeepers. Such
                  whistleblowing against large corporations and nation states is one of the most effective measures for
                  combating wrongdoing that affects the whole of society.
                </p>
                <p>On a personal level, many people will feel it is their duty as citizens to report crimes, or to
                  disclose
                  improper conduct, wrongdoing, and illegal activities. This may go further than purely illegal acts to
                  include omissions or corruption that go against the spirit of a law.
                </p>
              </Col>
              <Col xs={24} md={8}>
                <img src={Image4} alt={'tab description'}/>
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>*/}
        {/*<Quotes/>*/}
      </div>
    </>
  )
}

export default Home;
