import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import PrivateRoutes from "../../routes/private_routes";
import {useHistory} from "react-router-dom";
import './content.css';
import {getMyAccount} from "../../axios/users";
import {enums as rolesEnum} from '../../enums/Roles';

const { Header, Sider, Content } = Layout;

function BackendContent() {
  const [collapsed, setCollapsed] = React.useState(false);
  const history = useHistory();
  const [myUser, setMyUser] = React.useState(null);

  React.useEffect(() => {
    getMyAccount()
      .then(response => {
        setMyUser(response.data);
      })
  }, []);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg"
             collapsedWidth="0">
        <div className="backend-logo">e-Whistle</div>
        <Menu mode="inline" defaultSelectedKeys={[history.location.pathname]} onSelect={e => history.push(e.key)}>
          <Menu.Item key="/allegations" icon={<UserOutlined />}>
            Allegation
          </Menu.Item>
          {myUser && myUser.role === rolesEnum.ADMINISTRATOR ? <Menu.Item key="/users" icon={<VideoCameraOutlined />}>
            Users
          </Menu.Item> : null}
          {myUser && myUser.role === rolesEnum.ADMINISTRATOR ? <Menu.Item key="/dashboard" icon={<VideoCameraOutlined />}>
            Dashboard
          </Menu.Item> : null}
        </Menu>
      </Sider>
      <Layout className="site-layout-back">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <PrivateRoutes myUser={myUser} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default BackendContent;
