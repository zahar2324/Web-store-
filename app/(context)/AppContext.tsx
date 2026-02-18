'use client'

import React , { createContext, useContext , useEffect, useState} from 'react'
import {Products} from "@/data"
import { Product } from '@/types/categories'


type AppContextType = {
  products: Product[],
  subtotal: number,
  totalAmount: number,
  setSubtotal: (subtotal: number) => void,
  setTotalAmount: (totalAmount: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)
const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  const currency = "$"
  const [products, setProducts] = useState<Product[]>([])
  const [subtotal, setSubtotal] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)


  useEffect(() => {
    try{
      setProducts(Products)
    }catch(error) {
      console.error("Error fetching products:", error)
    }
  }, [])

  const value: AppContextType = {products, subtotal, totalAmount, setSubtotal, setTotalAmount }
  console.log("Products in context:", products) // Debugging log
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider')
  }
  return context
}