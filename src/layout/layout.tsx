import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import MyMenu from './menu'
import MyHeader from './header'
import Logo from './Logo'

const { Header, Footer, Sider, Content } = Layout
const rqstyle: React.CSSProperties = {
  background: '#f5f5f5'
}
const headerStyle: React.CSSProperties = {
  color: '#fff',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  padding: 0
}
const contentStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '15px'
}
const siderStyle: React.CSSProperties = {
  height: '100vh'
}
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '30px',
  lineHeight: '30px',
  padding: 0
}

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const handonCollapsedClick = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={rqstyle}>
      <Sider width={200} style={siderStyle} collapsed={collapsed}>
        <Logo></Logo>
        <MyMenu></MyMenu>
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <MyHeader
            collapsed={collapsed}
            handonCollapsedClick={handonCollapsedClick}
          ></MyHeader>
        </Header>
        <Content style={contentStyle}>
          <Outlet></Outlet>
        </Content>
        <Footer style={footerStyle}>
          ©{new Date().getFullYear()} 千与千寻的花果山之家
        </Footer>
      </Layout>
    </Layout>
  )
}
