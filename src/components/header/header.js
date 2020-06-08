import {Layout, Menu, Row, Col} from 'antd';
import React from 'react';
import './header.css';
import BackgroundImage1 from '../../assets/header_1.jpg';
import BackgroundImage2 from '../../assets/header_2.png';
import LogoImage from '../../assets/logo.png';
import {useHistory} from 'react-router-dom';

const {Header} = Layout;

function HeaderPage() {
  const history = useHistory();
  const initPage = history.location.pathname;
  const [selectedMenu, setSelectedMenu] = React.useState(initPage);
  function changePage(e){
    history.push(e.key);
    setSelectedMenu(e.key);
  }

  return (
    <>
      <Header className={'header'}>
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
      </Header>
      {history.location.pathname === '/' ? (
        <div className={'landing-img'}>
          <img src={BackgroundImage1} alt={'background'} />
          <div className={'text'}>
            <h1>E-Whistle</h1>
          </div>
          <div className={'bottom-text'}>
            <div><button onClick={() => history.push('/report_allegation')}>Report Allegation</button></div>
            <span>Your electronic Whistleblowing platform</span>
          </div>
        </div>
      ) : null}
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
