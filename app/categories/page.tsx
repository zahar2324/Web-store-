'use client';

import React, { useEffect, useState } from 'react'
import { useAppContext } from '../(context)/AppContext';
import ProductItem from '../components/ProductItem';
import { useSearchParams, useRouter } from 'next/navigation';
import { Product } from '@/types/categories';

const Page = () => {
  const { products, categories, searchQuery, setSearchQuery, setSelectedCategory, selectedCategory } = useAppContext();
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Next.js Navigation
  const searchParams = useSearchParams();
  const router = useRouter();

  // Sort State (Local or URL)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>(searchParams.get('sort') as 'asc' | 'desc' || '');

  // 1. Filter Logic
  let filteredProducts: Product[] = products || [];

  // Filter by Search Query
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  }

  // Filter by Category
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter((product) => {
      // Check if product has the selected category in its categories array
      if (product.categories && Array.isArray(product.categories)) {
          return product.categories.some(cat => cat.name === selectedCategory);
      }
      return false; 
    });
  }

  // 2. Sort Logic
  if (sortOrder === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Handlers
  const handleCategorySelect = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset to page 1
    
    // Update URL logic optionally
    const params = new URLSearchParams(searchParams.toString());
    if (categoryName) {
        params.set('category', categoryName);
    } else {
        params.delete('category');
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'asc' | 'desc' | '';
    setSortOrder(value);
    
    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
        params.set('sort', value);
    } else {
        params.delete('sort');
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync from URL on Mount / Updates
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || null;
    const sort = searchParams.get("sort") as 'asc' | 'desc' || '';

    if (search !== searchQuery) setSearchQuery(search);
    if (category !== selectedCategory) setSelectedCategory(category);
    if (sort !== sortOrder) setSortOrder(sort);
  }, [searchParams, setSearchQuery, setSelectedCategory]); // Added missing dependencies if needed, usually searchParams is enough if logic is correct inside

  return (
    <div className='flex flex-col md:flex-row w-full p-4 md:p-10 gap-6'>
      
      {/* Filters Sidebar - 1/4 width */}
      <aside className='w-full md:w-1/4 flex flex-col gap-6 border-r md:pr-4'>
        <h2 className='text-xl font-bold mb-4'>Filters</h2>
        
        {/* Sort Filter */}
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold'>Sort by Price</h3>
          <select 
            className='border p-2 rounded-md w-full' 
            value={sortOrder} 
            onChange={handleSortChange}
          >
            <option value="">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Categories Filter */}
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold'>Categories</h3>
          <div className='flex flex-col gap-2'>
            {categories && categories.length > 0 ? (
              categories.map((cat) => (
                <label key={cat.id} className='flex items-center gap-2 cursor-pointer'>
                  <input 
                    checked={selectedCategory === cat.name} 
                    onChange={(e) => handleCategorySelect(e.target.checked ? cat.name : null)} 
                    type="checkbox" 
                    className='w-4 h-4 rounded border-gray-300' 
                  />
                  <span>{cat.name}</span>
                </label>
              ))
            ) : (
              <p className='text-gray-500 text-sm'>No categories available</p>
            )}
          </div>
        </div>
      </aside>

      {/* Products Grid - 3/4 width */}
      <main className='w-full md:w-3/4'>
        <div className="flex justify-between items-center mb-4">
             <h2 className='text-xl font-bold'>
                All Products 
                <span className="text-gray-500 text-sm font-normal ml-2">
                    ({filteredProducts.length} items)
                </span>
            </h2>
        </div>
       
        {paginatedProducts && paginatedProducts.length > 0 ? (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {paginatedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-black text-white' : 'bg-white'}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
          </>
        ) : (
          <div className='flex flex-col justify-center items-center h-64 text-gray-500'>
            {products.length === 0 ? (
                 <p>Loading products...</p>
            ) : (
                 <p>No products found based on your filters.</p>
            )}
          </div>
        )}
      </main>

    </div>
  )
}

export default Page