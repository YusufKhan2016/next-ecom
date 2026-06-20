'use client'

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/staticsDatas/products';
import { extendedCategories } from '@/staticsDatas/categories';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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

import { Input } from "@/components/ui/input"
import {
  ShoppingCart,
  ListFilter,
  ChevronRight,
} from 'lucide-react';

import acGreatDeal from "@/assets/home/ac-mid-great-deal.gif"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useCartStore } from '@/store/website/cart';

export default function CategoryPage() {
  const params = useParams();
  
  const categorySlug =  params?.slug?.[0] || '';
  const categoryData = extendedCategories.find(cat => cat.id === categorySlug);
  const categoryLabel = categoryData?.label || 'Products';

  const addToCart = useCartStore((state) => state.addToCart)

  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500000 });

  const filteredProducts = products.filter(product => {
    const price = product.price;  
    return price >= priceRange.min && price <= priceRange.max;
  });

  return (
    <section>
      <div className='container mx-auto px-4'>
        <div>
          <Image
            src={acGreatDeal}
            alt="Great Deals"
            width={10000}
            unoptimized
            height={300}
            loading="eager"
            className="rounded-xl mt-8"
          />
        </div>

        {/* Breadcrumb  */}
        
        <div className='my-8 space-y-4'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={'/'}
                    className='text-foreground font-semibold'
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoryLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Category Header */}
          <div>
            <h1 className="text-5xl font-semibold text-gray-900">{categoryLabel}</h1>
          </div>
        </div>

        <div className="flex gap-6">

          {/* Sidebar Filter */}
          <div
            className="block w-full md:w-60 shrink-0"
          >
            <Card>
              <CardHeader >
                <CardTitle >
                  Filters
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-2'>

                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                >
                  <CollapsibleTrigger
                    className='cursor-pointer'
                    asChild
                  >

                    <span className='font-bold flex justify-between'>
                      Price Range
                      <ChevronRight className={ `transition-all ${isOpen? 'rotate-90': 'rotate-0'}`} />
                    </span>

                  </CollapsibleTrigger>

                  <CollapsibleContent className='py-2'>
                    <FieldGroup className='flex flex-row gap-1'>

                      <Field>
                        <Input placeholder="Min" />
                      </Field>

                      <Field>
                        <Input placeholder="Max" />
                      </Field>

                      <Button 
                        type="submit" 
                        size="icon" 
                        aria-label='Submit'
                      >
                        <ListFilter />
                      </Button>
                      
                    </FieldGroup>
                  </CollapsibleContent>
                  
                </Collapsible>
                
                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                >
                  <CollapsibleTrigger
                    className='cursor-pointer'
                    asChild
                  >

                    <span className='font-bold flex justify-between'>
                      Category
                      <ChevronRight className={ `transition-all ${isOpen? 'rotate-90': 'rotate-0'}`} />
                    </span>

                  </CollapsibleTrigger>

                  <CollapsibleContent className='py-2'>
                    
                      {extendedCategories.slice(0, 5).map(cat => (

                        <FieldGroup 
                          key={cat.id} 
                          className='flex flex-row gap-1 py-1'
                        >

                          <Field
                            orientation="horizontal"
                            id={cat.id}
                          >
                            <Checkbox
                              checked={selectedCategory === cat.id}
                              onCheckedChange={() => setSelectedCategory(cat.id)}
                              className='rounded-xs'
                            />

                            <FieldContent>
                              <FieldLabel>
                                { cat?.label }
                              </FieldLabel>
                            </FieldContent>
                          </Field>
                          
                        </FieldGroup>
                        
                      ))}
                    
                  </CollapsibleContent>
                  
                </Collapsible>

                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                >
                  <CollapsibleTrigger
                    className='cursor-pointer'
                    asChild
                  >

                    <span className='font-bold flex justify-between'>
                      Category
                      <ChevronRight className={ `transition-all ${isOpen? 'rotate-90': 'rotate-0'}`} />
                    </span>

                  </CollapsibleTrigger>

                  <CollapsibleContent className='py-2'>
                    
                      {extendedCategories.slice(0, 5).map(cat => (

                        <FieldGroup 
                          key={cat.id} 
                          className='flex flex-row gap-1 py-1'
                        >

                          <Field
                            orientation="horizontal"
                            id={cat.id}
                          >
                            <Checkbox
                              checked={selectedCategory === cat.id}
                              onCheckedChange={() => setSelectedCategory(cat.id)}
                              className='rounded-xs'
                            />

                            <FieldContent>
                              <FieldLabel>
                                { cat?.label }
                              </FieldLabel>
                            </FieldContent>
                          </Field>
                          
                        </FieldGroup>
                        
                      ))}
                    
                  </CollapsibleContent>
                  
                </Collapsible>
              </CardContent>

            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <Card className='mb-4'>
              <CardHeader className='w-full flex-row items-center justify-between'>
                <CardTitle className='text-xl'><span className='font-normal text-lg'>Showing:</span> ({filteredProducts?.length} items) </CardTitle>
                
                <Select>
                  <SelectTrigger icon={<ListFilter />}>
                    <SelectValue placeholder="Sort Product" />
                  </SelectTrigger>
                  
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='default'>Default</SelectItem>
                      <SelectItem value='low-to-high'>Low to high</SelectItem>
                      <SelectItem value='high-to-low'>High to low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

              </CardHeader>
            </Card>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <Card
                    key={product.id}
                    className="drop-shadow-xl overflow-hidden"
                  >
                    {/* Product Image */}
                    <Link 
                      href={`/product/${product.id}`} 
                      className="relative bg-gray-100 h-56 overflow-hidden group"
                    >
                      <Image
                        src={product?.image}
                        alt={product?.name}
                        height={1000}
                        width={1000}
                        className="object-cover transition-transform duration-300"
                      />
                    </Link>

                    {/* Product Info */}
                    <CardContent className='mt-2'>
                      <Link href={`/product/${product.id}`} className="text-sm font-medium line-clamp-2 mb-4">
                        {product.name}
                      </Link>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ৳{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ৳{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className='space-x-1'>
                      <Button className="flex-1">
                        Buy Now
                      </Button>

                      <Button
                        onClick={() => {
                          addToCart({
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                          })
                        }}
                      >
                        <ShoppingCart />
                      </Button>
                    </CardFooter>
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
    </section>
  );
}