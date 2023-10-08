import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined
} from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { Space, message } from 'antd'
import {post} from '../../utils/request'

import {success} from '@/model/success'
const iconStyles = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer'
}

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
const Login: React.FC = (props: any) => {
  const [messageApi, contextHolder] = message.useMessage()
  
  const navigate = useNavigate()
  const FormComponents = LoginForm
  

  const showMessage = useCallback(
    async (values: Record<string, any>) => {
      await waitTime(2000)
      console.log(values)
      // post<success>('/login',values).then(res=>{

      // })
      messageApi.open({
        type: 'success',
        content: '登录成功',
      });
      await waitTime(1000)
      navigate('/home')
      return true
    },
    [messageApi]
  )

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      {contextHolder}
      <div style={{ width: '100%' }}>
        <FormComponents
          title='千与千寻的花果山'
          subTitle='最舒适的院子'
          actions={
            <Space>
              其他登录方式
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
          onFinish={(formData) => showMessage(formData)}
        >
          <ProFormText
            name='username'
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              }
            ]}
          />
          <ProFormText.Password
            name='password'
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！'
              }
            ]}
          />
        </FormComponents>
      </div>
    </div>
  )
}
export default Login
