'use client'

import React , { createContext, useContext , useState} from 'react'
import {Products} from "@/data"
import { Product } from '@/types/categories'
import { useRouter } from 'next/router'


const AppContext = createContext({})
type AppContextType = {
  products: Product[],
  currency: string,
  subtotal: number,
  totalAmount: number,
  route: any
}
const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  const currency = "$"
  const [products, setProducts] = useState<Product[]>(Products)
  const [subtotal, setSubtotal] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const route = useRouter()
  const value: AppContextType = {products, currency, subtotal, totalAmount, route}
  console.log("Products in context:", products) // Debugging log
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)