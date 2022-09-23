import "./styles.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  IdcardOutlined,
  LoginOutlined,
  SolutionOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const SiteLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home"
            },
            {
              key: "2",
              icon: <SolutionOutlined />,
              label: "About"
            },
            {
              key: "3",
              icon: <IdcardOutlined />,
              label: "Contact"
            },
            {
              key: "4",
              icon: <LoginOutlined />,
              label: "Login"
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed)
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default SiteLayout;
