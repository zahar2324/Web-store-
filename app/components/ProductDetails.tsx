"use client"

import React, { useState } from 'react'
import { Product } from '@/types/categories'
import { useAppContext } from '../(context)/AppContext'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const ProductDetails = ({ product }: { product: Product }) => {
  const { currency } = useAppContext()
  const [quantity, setQuantity] = useState(1)

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-gray-400">{product.category[0]}</p>
          <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>
        <Link href={`products/${product.id}`}
          
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-700 transition hover:bg-gray-50"
        >
          View page
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
        <div className="h-44 w-44 overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
          <img
            src={product.image[0]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              {currency}{product.offerPrice || product.price}
            </span>
            {product.offerPrice && product.offerPrice < product.price && (
              <span className="text-sm text-gray-400 line-through">
                {currency}{product.price}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <p className="text-gray-500">ID</p>
            <p className="font-medium text-gray-900">{product.id}</p>

            <p className="text-gray-500">Color</p>
            <p className="font-medium text-gray-900">{product.color}</p>

            <p className="text-gray-500">Date</p>
            <p className="font-medium text-gray-900">{product.date}</p>

            <p className="text-gray-500">Popular</p>
            <p className="font-medium text-gray-900">{String(product.popular)}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">Quantity</p>
          <p className="text-lg font-semibold text-gray-900">{quantity}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDecrease}
            className="h-10 w-10 rounded-full border border-gray-300 bg-white text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            -
          </button>
          <button
            type="button"
            onClick={handleIncrease}
            className="h-10 w-10 rounded-full border border-gray-300 bg-white text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-2xl bg-black py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-gray-900"
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductDetails