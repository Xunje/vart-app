import { useRoutes, Navigate } from 'react-router-dom'

import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'

function suspense(Component:any) {
  return (
    <Suspense fallback={<Spin className='center' />}>
      <Component />
    </Suspense>
  )
}

const layout = suspense(lazy(() => import('../layout/layout')))
const Login = suspense(lazy(() => import('../views/login/Login')))
const Home = suspense(lazy(() => import('../views/home/Home')))
const routes = [
  { path: '/login', element: Login },
  {
    path: '/',
    element: layout,
    children: [
      { path: '/', element: <Navigate to='/home' /> },
      { path: '/home', element: Home }
    ]
  }
]

export default function GetAppRouters() {
  return useRoutes(routes)
}
