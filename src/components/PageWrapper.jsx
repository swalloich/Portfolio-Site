import React from 'react'
import { Outlet } from 'react-router'
import { Header, HeaderProvider } from '.'

export default function PageWrapper({ links }) {
  return (
    <HeaderProvider>
      <Header links={links} />
      <main>
        <Outlet />
      </main>
    </ HeaderProvider>
  )
}