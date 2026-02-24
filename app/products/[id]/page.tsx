"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { useAppContext } from "@/app/(context)/AppContext"
import { Product } from "@/types/categories"
import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string
  const { products, currency } = useAppContext()

  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id))
    if (found) setProduct(found)
  }, [id, products])

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Product not found</h2>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            Go back to shop
          </Link>
        </div>
      </div>
    )
  }

  const discount =
    product.offerPrice && product.offerPrice < product.price
      ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
      : 0

  return (
    <div className="min-h-screen bg-white">
      {/* top nav */}
      <div className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to shop
          </Link>
        </div>
      </div>

      {/* main content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[550px_1fr]">
          
          {/* image */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
             {/* Thumbnails list */}
             <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto w-full lg:w-24 max-h-[500px] scrollbar-hide">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 lg:w-full flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    selectedImage === index
                      ? "border-black ring-1 ring-black/10 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={process.env.NEXT_PUBLIC_API_URL + img.url}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={process.env.NEXT_PUBLIC_API_URL + (product.images[selectedImage]?.url || product.images[0]?.url) || '/placeholder.png'}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                  -{discount}%
                </span>
              )}
            </div>
          </div>

          {/* details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {product.categories && product.categories[0]?.name}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mt-3">{product.description}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-gray-900">
                {currency}{product.offerPrice || product.price}
              </span>
              {discount > 0 && (
                <span className="text-lg text-gray-400 line-through">
                  {currency}{product.price}
                </span>
              )}
            </div>

            {/* quantity */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="h-10 w-10 border rounded-lg"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="h-10 w-10 border rounded-lg"
              >
                +
              </button>
            </div>

            {/* actions */}
            <button className="w-full rounded-xl bg-black py-4 text-white font-semibold">
              Add to cart
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border rounded-xl py-3">
                <Heart size={18} /> Wishlist
              </button>
              <button className="flex items-center justify-center gap-2 border rounded-xl py-3">
                <Share2 size={18} /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
