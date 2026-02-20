'use client'

import React from 'react'
import { useAppContext } from '../(context)/AppContext'
import ProductItem from './ProductItem'

const PopularProducts = () => {
    const { products } = useAppContext()
    
    // Фільтруємо популярні товари (тільки ті, де popular: true)
    const popularProducts = products.filter((product) => product.popular === true)

    if (!popularProducts || popularProducts.length === 0) {
        return (
            <>
                <p>no Data</p>
            </>
        )
    }

  return (
    <section className="padd-container py-16 lg:py-24 bg-gray-50">
      <div className="mb-10 text-center">
        <span className="mb-2 inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">
           Hot Picks
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Popular Products</h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Our most coveted items that represent the best of what we offer.
        </p>
      </div>
      
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {
                popularProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default PopularProducts