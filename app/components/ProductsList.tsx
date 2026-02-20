'use client';
import React, { use, useEffect } from 'react'
import { useAppContext } from '../(context)/AppContext';
import ProductItem from './ProductItem';
const ProductsList = () => {
  const { products } = useAppContext();
  const data = products.slice(0, 6);

  if (!products || products.length === 0) {
    return <div className="flex justify-center p-10 text-gray-500">Loading products...</div>;
  }

  return (
    <section className='w-full px-4 py-12 lg:px-12'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {data.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList