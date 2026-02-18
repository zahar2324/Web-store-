'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Package, Truck, Shield, Heart, ShoppingCart } from 'lucide-react'
import { useAppContext } from '../(context)/AppContext';
import { Product } from '@/types/categories'

const NewArrials = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [displayProducts, setDisplayProducts] = useState<Product[]>([])

  const { products } = useAppContext()

  useEffect(() => {
    console.log("Products in NewArrials component:", products) // Debugging log
  }, [products])



  

  const handleCategoryClick = (categoryName: string) => {
    const filtered = products.filter(p => 
      p.category.some(cat => cat.toLowerCase().includes(categoryName.toLowerCase()))
    )
    setDisplayProducts(filtered.length > 0 ? filtered : products.slice(0, 6))
  }

  const features = [
    {
      icon: Zap,
      title: "Fast Shipping",
      description: "Deliver within 24-48 hours"
    },
    {
      icon: Package,
      title: "Easy Returns",
      description: "30 days return policy"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% safe transactions"
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="padd-container">
        {/* Hero Section */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              New Collection
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Explore Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Gadgets</span>
            </h2>
            <p className="max-w-xl text-lg text-gray-600">
              Discover cutting-edge technology and premium gadgets curated just for you. From audio to computing, find everything you need.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
                Start Shopping
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="flex-1">
            <div className="relative h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl">
              <img 
                src={displayProducts[0]?.image[0] || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"}
                alt="Featured Product"
                className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Categories Tabs */}
        

        {/* Products Grid */}
        {displayProducts.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Featured Products</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100 sm:h-72">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/300x400?text=No+Image"
                      }}
                    />

                    {/* Wishlist Button */}
                    <button className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition-all hover:bg-white hover:scale-110">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-end justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                      <div className="-translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pb-4">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3 p-4 sm:p-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-blue-600">
                      {product.category[0]}
                    </p>

                    <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mt-auto">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.offerPrice.toFixed(2)}
                      </span>
                      <span className="text-sm line-through text-gray-500">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Features */}
        <div className="grid gap-6 rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-start gap-4 group ">
                <div className="rounded-full bg-blue-100 p-3 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrials