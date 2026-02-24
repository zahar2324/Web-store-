"use client"

import React, { useState } from 'react'
import { Product } from '@/types/categories'
import { useAppContext } from '../(context)/AppContext'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const ProductDetails = ({ product }: { product: Product }) => {
  const { currency } = useAppContext()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="grid gap-6 sm:grid-cols-[280px_1fr]">
      {/* Left Column: Images */}
      <div className="flex flex-col gap-3">
        <div className="h-72 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
          <img
            src={process.env.NEXT_PUBLIC_API_URL + (product.images[selectedImage]?.url || product.images[0]?.url) || '/placeholder.png'}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        {/* Thumbnails */}
        <div className="flex gap-2 w-full flex-wrap justify-center">
          {product.images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`product-detail-thumbnail h-14 w-14 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index 
                  ? 'border-gray-900 ring-1 ring-gray-900/10' 
                  : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-300'
              }`}
            >
              <img
                src={process.env.NEXT_PUBLIC_API_URL + image.url}
                alt={`${product.name} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Details */}
      <div className="flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-4">
             <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                {product.categories && product.categories[0]?.name}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">{product.name}</h3>
            </div>
            <Link href={`products/${product.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
            >
              More
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline gap-3 border-t border-gray-100 pt-4">
            <span className="text-3xl font-bold text-gray-900">
              {currency}{product.offerPrice || product.price}
            </span>
            {product.offerPrice && product.offerPrice < product.price && (
              <span className="text-lg text-gray-400 line-through decoration-gray-300 decoration-2">
                {currency}{product.price}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between">
              <span className="text-gray-500">Color</span>
              <span className="font-medium text-gray-900">{product.color}</span>
            </div>
            <div className="flex justify-between">
               <span className="text-gray-500">ID</span>
              <span className="font-medium text-gray-900">#{product.id}</span>
            </div>
          </div>
        
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center justify-between rounded-xl border border-gray-200 p-1 pr-2">
               <div className="px-3 text-xs uppercase font-bold text-gray-500 tracking-wider">Qty</div>
               <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition"
                >
                  -
                </button>
                <span className="text-sm font-semibold w-4 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-gray-900 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-gray-900/10 transition hover:bg-black hover:shadow-xl hover:-translate-y-0.5"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails