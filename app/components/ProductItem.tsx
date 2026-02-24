import React from 'react'
import { Product } from '@/types/categories'
import { useAppContext } from '../(context)/AppContext'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductDetails from './ProductDetails'



const ProductItem = ({ product }: { product: Product }) => {
  const { currency } = useAppContext();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full'>
      
      {/* Контейнер для фото */}
      <div className='relative overflow-hidden aspect-square bg-gray-50'>
        <Image 
          src={process.env.NEXT_PUBLIC_API_URL + product.images[0]?.url || '/placeholder.png'} 
          alt={product.name} 
          width={400} 
          height={400}
          className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500'
        />
        {/* Лейбл "Знижка", якщо є offerPrice */}
        {product.offerPrice && product.offerPrice < product.price && (
          <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
            SALE
          </span>
        )}
      </div>

      {/* Інформація про товар */}
      <div className='p-4 flex flex-col flex-grow'>
        <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>
          {product.categories && product.categories[0]?.name}
        </p>
        
        <h5 className='text-gray-800 font-semibold text-lg line-clamp-1 mb-2'>
          {product.name}
        </h5>
        
        <p className='text-gray-500 text-sm line-clamp-2 mb-4 flex-grow'>
          {product.description}
        </p>

        {/* Секція ціни */}
        <div className='flex items-center gap-3 mt-auto'>
          <span className='text-xl font-bold text-gray-900'>
            {currency}{product.offerPrice || product.price}
          </span>
          
          {product.offerPrice && product.offerPrice < product.price && (
            <span className='text-sm text-gray-400 line-through'>
              {currency}{product.price}
            </span>
          )}
        </div>

        <div className='mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700 transition duration-300 group-hover:border-gray-300 group-hover:bg-white'>
          View details
          <span className='text-base leading-none transition-transform duration-300 group-hover:translate-x-1'>→</span>
        </div>
      </div>
    </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Product details</DialogTitle>
        </DialogHeader>
        <ProductDetails product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductItem