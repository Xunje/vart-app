import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
const items = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1)
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `option${subKey}`
        }
      })
    }
  }
)

export default function MyMenu() {
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const navigate = useNavigate()

  function menuOnClick(key:any) {
    console.log(key.key)
  }
  const onOpenChange = (keys:any) => {
    const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1)
    setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }
  return (
    <Menu
      defaultSelectedKeys={['1']}
      openKeys={openKeys}
      mode='inline'
      theme='dark'
      onClick={menuOnClick}
      onOpenChange={onOpenChange}
      items={items}
    />
  )
}
