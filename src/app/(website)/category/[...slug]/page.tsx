'use client';

import React, { use } from 'react';


import { useState } from 'react';
import { products } from '@/staticsDatas/products';
import { extendedCategories } from '@/staticsDatas/categories';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Heart,
  ShoppingCart,
  Eye,
  Filter,
  X,
} from 'lucide-react';

export default function CategoryPage({ params }: { params: { slug: string[] } }) {
  const resolvedParams:any = use(params);
  
  const categorySlug =  resolvedParams.slug?.[0] || '';
  const categoryData = extendedCategories.find(cat => cat.id === categorySlug);
  const categoryLabel = categoryData?.label || 'Products';

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500000 });
  const [showFilters, setShowFilters] = useState(true);

  // Filter products
  const filteredProducts = products.filter(product => {
    const price = product.price;
    return price >= priceRange.min && price <= priceRange.max;
  });

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-700">{categoryLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryLabel}</h1>
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filter */}
          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-60 shrink-0`}
          >
            <Card className="p-6">
              <div className="flex justify-between items-center md:hidden mb-4">
                <h3 className="font-bold">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">
                      Min Price: ৳{priceRange.min.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">
                      Max Price: ৳{priceRange.max.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
                <div className="space-y-2">
                  {extendedCategories.slice(0, 5).map(cat => (
                    <div key={cat.id} className="flex items-center">
                      <Checkbox
                        id={cat.id}
                        checked={selectedCategory === cat.id}
                        onCheckedChange={() => setSelectedCategory(cat.id)}
                        className='rounded-xs'
                      />
                      <label
                        htmlFor={cat.id}
                        className="ml-2 text-sm text-gray-700 cursor-pointer"
                      >
                        {cat.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Brand</h3>
                <div className="space-y-2">
                  {['Apple', 'Samsung', 'Sony', 'Google'].map(brand => (
                    <div key={brand} className="flex items-center">
                      <Checkbox id={brand} className='rounded-xs' />
                      <label
                        htmlFor={brand}
                        className="ml-2 text-sm text-gray-700 cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
                <div className="space-y-2">
                  {['5 Stars', '4 Stars & up', '3 Stars & up', '2 Stars & up'].map(rating => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={rating} className='rounded-xs'/>
                      <label
                        htmlFor={rating}
                        className="ml-2 text-sm text-gray-700 cursor-pointer"
                      >
                        {rating}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Filter Toggle Button (Mobile) */}
            <div className="md:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="relative bg-gray-100 h-56 overflow-hidden group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Badge */}
                      {product.discount > 0 && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                          -{Math.round((product.discount / product.originalPrice!) * 100)}%
                        </div>
                      )}

                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full p-2 h-auto"
                        >
                          <Heart className="w-5 h-5" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full p-2 h-auto"
                        >
                          <Eye className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-gray-900">
                          ৳{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ৳{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <p className="text-gray-500 text-lg">No products found</p>
                  <p className="text-gray-400">Try adjusting your filters</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}