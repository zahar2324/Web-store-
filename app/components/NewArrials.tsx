'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Package, Truck, Shield } from 'lucide-react'

const NewArrials = () => {
  const [activeTab, setActiveTab] = useState(0)

  const categories = [
    {
      id: 1,
      name: "Audio & Sound",
      icon: "🎧",
      description: "Premium headphones & speakers",
      color: "from-blue-500 to-purple-500",
      count: "2,345 products"
    },
    {
      id: 2,
      name: "Smart Devices",
      icon: "⌚",
      description: "Latest smartwatches & gadgets",
      color: "from-green-500 to-teal-500",
      count: "1,856 products"
    },
    {
      id: 3,
      name: "Computing",
      icon: "💻",
      description: "Laptops, SSDs & accessories",
      color: "from-orange-500 to-red-500",
      count: "3,120 products"
    },
    {
      id: 4,
      name: "Cameras",
      icon: "📷",
      description: "Professional & action cameras",
      color: "from-pink-500 to-rose-500",
      count: "987 products"
    },
  ];

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
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop" 
                alt="Featured Product"
                className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>


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