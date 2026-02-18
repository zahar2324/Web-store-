'use client'

import React from 'react'
import AppContextProvider from './app/(context)/AppContext'
import Header from './app/components/Header'

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <AppContextProvider>
        <Header/>
        {children}
    </AppContextProvider>
  )
}

export default Provider