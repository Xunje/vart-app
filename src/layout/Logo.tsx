import { Avatar, Image } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import logo from '../assets/logo.jpeg'

const style:React.CSSProperties = {
  color: '#fff',
  height: '35px',
  lineHeight: '35px',
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center'
  //   background: '#c0b3b3'
}

export default function Logo() {
  return (
    <div style={style}>
      <Avatar
        shape='square'
        size={30}
        src={logo}
        style={{ marginLeft: '10px' }}
      />
      <span style={{ marginLeft: '6px' }}>千与千寻的花果山</span>
    </div>
  )
}
