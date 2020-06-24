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
                  <h2 className="secnav-tabs__heading "> Featured tabs component heading </h2>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 secnav-tabs__navigation-container">
                  <ul className="secnav-tabs__navigation">
                    <li className="active secnav-tabs__tab">
                      <a href="#tab_1-1" aria-controls="tab_1-1" role="tab" data-toggle="tab">
                        <span className="secnav-tabs__tab-title">Growth</span>
                      </a>
                    </li>
                    <li className="secnav-tabs__tab">
                      <a href="#tab_1-2" aria-controls="tab_1-2" role="tab" data-toggle="tab">
                        <span className="secnav-tabs__tab-title">Competition</span>
                      </a>
                    </li>
                    <li className="secnav-tabs__tab">
                      <a href="#tab_1-3" aria-controls="tab_1-3" role="tab" data-toggle="tab">
                        <span className="secnav-tabs__tab-title">Technology</span>
                      </a>
                    </li>
                    <li className="secnav-tabs__tab">
                      <a href="#tab_1-4" aria-controls="tab_1-4" role="tab" data-toggle="tab">
                        <span className="secnav-tabs__tab-title">Partnering</span>
                      </a>
                    </li>
                    <li className="secnav-tabs__tab">
                      <a href="#tab_1-5" aria-controls="tab_1-5" role="tab" data-toggle="tab">
                        <span className="secnav-tabs__tab-title">Diversity</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="secnav-tabs__content-wrapper feat-tabs__wrapper" style={{height: 335}}>
                <div className="secnav-tabs__content active feat-tabs--33-66" role="tabpanel" id="tab_1-1">
                  <div className="secnav-tabs__content-container">
                    <div className="row">

                      <div className="secnav-tabs__content-featured feat-tabs__column-1 feat-tabs__column ">
                      </div>
                      <div className="secnav-tabs__content-text feat-tabs__column-2 feat-tabs__column ">
                        <div className="secnav-tabs__content-copy">
                          <h3 className="secnav-tabs__content-heading">Growth (optional heading)</h3>

                          <p>It's time you think big, embrace new and emerging technologies, and move towards a
                            digital-first approach. By combining deep business and industry insight with digital
                            innovation, our diverse team of creative, industry and technology professionals help
                            accelerate the successful impact digital can have.</p>

                          <a href="#" className="btn btn--transparent">Find out more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secnav-tabs__content feat-tabs--50-50" role="tabpanel" id="tab_1-2">
                  <div className="secnav-tabs__content-container">
                    <div className="row">

                      <div className="feat-tabs__column-1 feat-tabs__column secnav-tabs__content-text">
                        <div className="secnav-tabs__content-copy">

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non quam imperdiet libero
                            vulputate rhoncus ac ac lorem. Cras fringilla quam ante, quis varius dui imperdiet non.
                            Quisque sodales fermentum tellus eget convallis. Duis dictum dictum velit et dictum.
                            Maecenas vel ligula tincidunt, cursus ligula in, porta est. Maecenas eu sagittis purus.
                            Aliquam sed pretium ligula. Ut bibendum interdum ullamcorper.</p>

                          <a href="#" className="btn btn--transparent">Find out more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secnav-tabs__content feat-tabs--50-50" role="tabpanel" id="tab_1-3">
                  <div className="secnav-tabs__content-container">
                    <div className="row">
                      <div className="feat-tabs__column-1 feat-tabs__column">
                      </div>

                      <div className="feat-tabs__column-2 feat-tabs__column">
                        <div className="secnav-tabs__content-copy text-component">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque imperdiet
                            sapien in viverra. Sed a tincidunt eros. Etiam orci ex, sagittis in pulvinar id, tristique
                            ut augue. Curabitur dapibus turpis at vehicula ultrices. Praesent tempor dolor sit amet
                            mauris tempus, vitae porttitor ante porta. Sed sit amet orci ultricies, convallis mi sit
                            amet, condimentum sapien. Fusce eu ipsum enim. Integer pellentesque venenatis pharetra.
                            Maecenas dignissim risus metus, eget feugiat nisi lacinia quis. Mauris vestibulum tempus
                            nisi vitae convallis. Maecenas pulvinar feugiat urna, at semper quam tempor vitae. Nunc
                            commodo congue erat, pretium aliquam nunc iaculis vel. Fusce mi sapien, imperdiet in
                            consequat ut, pellentesque vitae libero. Suspendisse quis ante pretium, ornare lacus a,
                            viverra diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non quam imperdiet
                            libero vulputate rhoncus ac ac lorem. Cras fringilla quam ante, quis varius dui imperdiet
                            non. Quisque sodales fermentum tellus eget convallis. Duis dictum dictum velit et dictum.
                            Maecenas vel ligula tincidunt, cursus ligula in, porta est. Maecenas eu sagittis purus.
                            Aliquam sed pretium ligula. Ut bibendum interdum ullamcorper.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. In non quam imperdiet libero vulputate rhoncus ac ac lorem.
                            Cras fringilla quam ante, quis varius dui imperdiet non. Quisque sodales fermentum tellus
                            eget convallis. Duis dictum dictum velit et dictum. Maecenas vel ligula tincidunt, cursus
                            ligula in, porta est. Maecenas eu sagittis purus. Aliquam sed pretium ligula. Ut bibendum
                            interdum ullamcorper.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secnav-tabs__content feat-tabs--66-33" role="tabpanel" id="tab_1-4">
                  <div className="secnav-tabs__content-container">
                    <div className="row">
                      <div className="feat-tabs__column-1 feat-tabs__column">
                        <span className="secnav-tabs__tab-stat-line">£50m</span>
                        <span className="secnav-tabs__tab-stat-label">added on manufacturing through the UK, with more than £25m more possible</span>


                        <p className="secnav-tabs__tab-stat-src-heading">
                          Source:

                          <a href="https://www.pwc.com/gx" target="_self">PwC</a>


                        </p>

                      </div>
                      <div className="feat-tabs__column-2 feat-tabs__column">
                        <div className="secnav-tabs__content-copy text-component">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque imperdiet
                            sapien in viverra. Sed a tincidunt eros. Etiam orci ex, sagittis in pulvinar id, tristique
                            ut augue. Curabitur dapibus turpis at vehicula ultrices. Praesent tempor dolor sit amet
                            mauris tempus, vitae porttitor ante porta. Sed sit amet orci ultricies, convallis mi sit
                            amet, condimentum sapien. Fusce eu ipsum enim. Integer pellentesque venenatis pharetra.
                            Maecenas dignissim risus metus, eget feugiat nisi lacinia quis. Mauris vestibulum tempus
                            nisi vitae convallis. Maecenas pulvinar feugiat urna, at semper quam tempor vitae. Nunc
                            commodo congue erat, pretium aliquam nunc iaculis vel. Fusce mi sapien, imperdiet in
                            consequat ut, pellentesque vitae libero. Suspendisse quis ante pretium, ornare lacus a,
                            viverra diam.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secnav-tabs__content feat-tabs--50-50" role="tabpanel" id="tab_1-5">
                  <div className="secnav-tabs__content-container">
                    <div className="row">

                      <div className="feat-tabs__column-1 feat-tabs__column secnav-tabs__content-featured">
                      </div>
                      <div className="feat-tabs__column-2 feat-tabs__column secnav-tabs__content-text">
                        <div className="secnav-tabs__content-copy">

                          <p>Maecenas condimentum fringilla hendrerit. Pellentesque interdum dolor quis orci elementum
                            vestibulum. Quisque et leo nisi. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Etiam nec tempus leo. Nunc volutpat mi a bibendum
                            semper.</p>

                          <p className="sub-heading">An example sub-heading - how large should this heading be?</p>
                          <p>In a world where InsurTechs are seen as enablers, the process of partnering is crucial.
                            Especially as insurers increasingly look for partnerships to deliver results for them.</p>

                          <p>As part of my secondment to Startupbootcamp InsurTech I have been working on a project to
                            ease the partnering process (specifically proof of concepts) between insurers and start-ups.
                            It has been a fascinating piece of work that I have greatly enjoyed and that I hope has
                            added some real value for both start-ups and insurers.</p>

                          <p className="sub-heading">An example sub-heading</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non quam imperdiet libero
                            vulputate rhoncus ac ac lorem. Cras fringilla quam ante, quis varius dui imperdiet non.
                            Quisque sodales fermentum tellus eget convallis. Duis dictum dictum velit et dictum.
                            Maecenas vel ligula tincidunt, cursus ligula in, porta est. Maecenas eu sagittis purus.
                            Aliquam sed pretium ligula. Ut bibendum interdum ullamcorper.</p>

                          <a href="#" className="btn btn--transparent">Find out more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className={'tabs-title'}>About the Platform</div>
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
        </Tabs>
        {/*<Quotes/>*/}
        <div className={'tabs-title'}>About the Process</div>
        <AboutTheProcess/>
      </div>
    </>
  )
}

export default Home;
