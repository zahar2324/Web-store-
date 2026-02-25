'use client'

import React , { createContext, useContext , useEffect, useState} from 'react'
//import {Products} from "@/data"
import { Product, Category } from '@/types/categories'
import axios from 'axios'


axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || ""
type AppContextType = {
  products: Product[],
  subtotal: number,
  totalAmount: number,
  setSubtotal: (subtotal: number) => void,
  setTotalAmount: (totalAmount: number) => void,
  currency: string,
  categories: Category[],
  searchQuery: string,
  setSearchQuery: (searchQuery: string) => void,
  selectedCategory: string | null,
  setSelectedCategory: (selectedCategory: string | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)
const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  const currency = "$"
  const [products, setProducts] = useState<Product[]>([])
  const [subtotal, setSubtotal] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const [categories, setCategories] = useState<Category[]>([])

const getProducts = async () => {
    try{
      const response = await axios.get('/api/products?populate=*')
      if(response.data){
        console.log("Fetched products:", response.data.data)
        setProducts(response.data.data)
      }

      
    }catch(error){
      console.error("Error fetching products:", error)
    }
  }

  const getCategories = async () => {
    try{
      const response = await axios.get('/api/categories')
      if(response.data){
        console.log("Fetched categories:", response.data.data)
        setCategories(response.data.data)
      }

      
    }catch(error){
      console.error("Error fetching categories:", error)
    }
  }
  
  useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  const value = React.useMemo(() => ({
    products, 
    subtotal, 
    totalAmount, 
    setSubtotal, 
    setTotalAmount, 
    currency, 
    categories,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
  }), [products, subtotal, totalAmount, categories, searchQuery, selectedCategory])
 
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