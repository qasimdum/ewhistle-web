import React from "react";
import {Carousel, Row, Col, Tabs} from "antd";
import './home.css'
import TabFile from '../../../assets/tabs-img.jpeg';

function Home() {
  return (
    <div className={'home'}>
      <h1>About the Platform</h1>
      <Tabs defaultActiveKey="1" onChange={() => {}} className={'home-tabs'}>
        <Tabs.TabPane tab="E-Whistle" key="1">
          <Row className={'tab-content'}>
            <Col xs={24} md={16}>
              <p>E-Whistle is secure and impartial reporting platform which is specifically designed to protect the identity
                of the individuals reporting an allegation. Due diligence is conducted on each allegation by trained
                professionals and appropriate action will be taken at the earliest. </p>
            </Col>
            <Col xs={24} md={8}>
              <img src={TabFile} alt={'tab description'} />
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Secure communication" key="2">
          <Row className={'tab-content'}>
            <Col xs={24} md={16}>
              <p>
                When you send the report, you have the option to choose whether you remain available for further inquiries.
                We recommend that you make yourself available because we may not be able to finalise the case without
                further information from you.
              </p>
              <p>When you create an allegation you will be given a case number, and you will choose a password. You will use
                the case number and password to log in to the secure allegation section to see if you have received any
                questions.
              </p>
              <p>All communication with us is anonymous if you wish it to be.</p>
            </Col>
            <Col xs={24} md={8}>
              <img src={TabFile} alt={'tab description'} />
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Who is a whistleblower?" key="3">
          <Row className={'tab-content'}>
            <Col xs={24} md={16}>
              <p>A whistleblower could be a worker, self-employed, a shareholder, a volunteer, an unpaid trainee a
                contractor, subcontractor or supplier, a former worker, or even someone going for a job interview and coming
                across information about corruption.</p>
            </Col>
            <Col xs={24} md={8}>
              <img src={TabFile} alt={'tab description'} />
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Why are whistleblowers important?" key="4">
          <Row className={'tab-content'}>
            <Col xs={24} md={16}>
              <p>Recent cases exposed by whistleblowers include illegal mass surveillance, industrial scale tax avoidance,
                abuse of environmental protections, and even the sexual abuse of children by peacekeepers. Such
                whistleblowing against large corporations and nation states is one of the most effective measures for
                combating wrongdoing that affects the whole of society.
              </p>
              <p>On a personal level, many people will feel it is their duty as citizens to report crimes, or to disclose
                improper conduct, wrongdoing, and illegal activities. This may go further than purely illegal acts to
                include omissions or corruption that go against the spirit of a law.
              </p>
            </Col>
            <Col xs={24} md={8}>
              <img src={TabFile} alt={'tab description'} />
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>
      {/*<Collapse
        bordered={true}
        accordion={true}
        defaultActiveKey={['1']}
        expandIconPosition={'right'}
        expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
        className="site-collapse"
      >
        <Collapse.Panel header="E-Whistle" key="1" className="site-collapse">
          <p>E-Whistle is secure and impartial reporting platform which is specifically designed to protect the identity
            of the individuals reporting an allegation. Due diligence is conducted on each allegation by trained
            professionals and appropriate action will be taken at the earliest. </p>
        </Collapse.Panel>
        <Collapse.Panel header="Secure communication" key="2" className="site-collapse">
          <p>
            When you send the report, you have the option to choose whether you remain available for further inquiries.
            We recommend that you make yourself available because we may not be able to finalise the case without
            further information from you.
          </p>
          <p>When you create an allegation you will be given a case number, and you will choose a password. You will use
            the case number and password to log in to the secure allegation section to see if you have received any
            questions.
          </p>
          <p>All communication with us is anonymous if you wish it to be.</p>
        </Collapse.Panel>
        <Collapse.Panel header="Who is a whistleblower?" key="3" className="site-collapse">
          <p>A whistleblower could be a worker, self-employed, a shareholder, a volunteer, an unpaid trainee a
            contractor, subcontractor or supplier, a former worker, or even someone going for a job interview and coming
            across information about corruption.</p>
        </Collapse.Panel>
        <Collapse.Panel header="Why are whistleblowers important?" key="4" className="site-collapse">
          <p>Recent cases exposed by whistleblowers include illegal mass surveillance, industrial scale tax avoidance,
            abuse of environmental protections, and even the sexual abuse of children by peacekeepers. Such
            whistleblowing against large corporations and nation states is one of the most effective measures for
            combating wrongdoing that affects the whole of society.
          </p>
          <p>On a personal level, many people will feel it is their duty as citizens to report crimes, or to disclose
            improper conduct, wrongdoing, and illegal activities. This may go further than purely illegal acts to
            include omissions or corruption that go against the spirit of a law.
          </p>
        </Collapse.Panel>
      </Collapse>*/}

      <Carousel autoplay className={'quotes'}>
        <div>
          <blockquote className="blockquote">Did you know that tips from employees and suppliers are responsible for
            more instances of fraud detection than any other method?
          </blockquote>
        </div>
        <div>
          <blockquote className="blockquote">Your life changes the moment you make a new, congruent, and committed
            decision
          </blockquote>
        </div>
      </Carousel>
    </div>
  )
}

export default Home;
