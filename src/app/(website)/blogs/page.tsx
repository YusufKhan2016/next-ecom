"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

import { blogPosts } from "@/staticsDatas/blogs"
import { blogCategories } from "@/staticsDatas/categories"

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <section className="bg-background mx-auto min-h-screen">
      <section className="container px-30 mx-auto">
        <section className="relative py-4">

          <div
            className="absolute top-0 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                Latest Insights & Articles
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover tips, trends, and best practices for modern web development and e-commerce
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5 z-50" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base focus-visible:ring-1 focus-visible:border-amber-500 shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="sticky top-0 z-20 bg-background/90 backdrop-blur-sm border-b border-amber-500/10 pb-4">
          <div className="mx-auto ">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "border-amber-500/30 text-foreground hover:border-amber-500 hover:bg-amber-500/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="mx-auto ">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <Link key={blog.id} href={`/blogs/${blog.id}`}>
                    <Card className="h-full border-amber-500/10 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden">
                      {/* Blog Image */}
                      <div className="relative w-full h-48 overflow-hidden bg-muted">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>

                      <CardHeader className="pb-3">
                        {/* Category Badge */}
                        <div className="mb-2">
                          <Badge
                            variant="outline"
                            className="bg-amber-500/10 text-amber-500 border-amber-500/30"
                          >
                            {blog.category}
                          </Badge>
                        </div>

                        <CardTitle className="text-xl font-bold text-foreground transition-colors line-clamp-2">
                          {blog.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Excerpt */}
                        <CardDescription className="text-muted-foreground line-clamp-2">
                          {blog.excerpt}
                        </CardDescription>

                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-4 border-t border-amber-500/10">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-amber-500" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-amber-500" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-3 transition-all pt-2">
                          <span>Read More</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>  
            ) : (
              /* No Results */
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-amber-500/5 border-y border-amber-500/10">
        <div className="mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated with Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter and never miss an article
          </p>
          <div className="flex justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white py-6 text-base">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}