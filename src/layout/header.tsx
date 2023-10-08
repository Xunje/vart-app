import { Button, Breadcrumb, Avatar, Space, Dropdown } from 'antd'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons'
const styles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
}
const styles2: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
}

const items = [
  {
    key: '1',
    label: '个人中心'
  },
  {
    key: '2',
    label: '退出登录'
  }
]

export default function MyHeader(props:any) {
  const location = useLocation()
  const navigate = useNavigate()
  let user = useSelector((state:any) => state.user.userInfo)

  const breadcrumbNameMap:any = {}
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    }
  })
  const breadcrumbItems = [
    {
      title: (
        <Link to={'/home'}>
          <HomeOutlined />
        </Link>
      ),
      key: '/'
    }
  ].concat(extraBreadcrumbItems)
  const onCollapsed = () => {
    props.handonCollapsedClick()
  }

  const [open, setOpen] = useState(false)

  const handleMenuClick = (e:any) => {
    if (e.key === '2') {
      navigate('login')
    }
  }

  const handleOpenChange = (flag:boolean) => {
    setOpen(flag)
  }

  return (
    <div style={styles2}>
      <div style={styles}>
        <Button
          type='text'
          icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onCollapsed}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64
          }}
        />
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <Space wrap size={4} style={{ marginRight: '20px', color: '#333' }}>
        <Avatar size={28} icon={<UserOutlined />} />

        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick
          }}
          placement='bottom'
          onOpenChange={handleOpenChange}
          open={open}
        >
          <div
            style={{ height: '40px', lineHeight: '40px', cursor: 'pointer' }}
          >
            {user.name}
          </div>
        </Dropdown>
      </Space>
    </div>
  )
}
