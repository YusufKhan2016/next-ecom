"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Mock blog data with Pexels images
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Learn the basics of Next.js and how to build your first modern web application with server-side rendering.",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "E-commerce Design Best Practices",
    excerpt: "Discover essential design principles for creating user-friendly e-commerce platforms that convert visitors into customers.",
    category: "Design",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips and Tricks",
    excerpt: "Master CSS-in-the-markup with Tailwind. Learn advanced techniques to speed up your development workflow.",
    category: "Development",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Understanding React Hooks",
    excerpt: "Deep dive into React Hooks and learn how to manage state and side effects in functional components.",
    category: "Technology",
    date: "March 8, 2024",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "Create inclusive digital experiences by implementing accessibility best practices in your web projects.",
    category: "Accessibility",
    date: "March 5, 2024",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Performance Optimization Strategies",
    excerpt: "Boost your website performance with proven optimization techniques and tools.",
    category: "Development",
    date: "March 1, 2024",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    title: "Web Design Trends 2024",
    excerpt: "Explore the latest design trends that are shaping the future of web and digital experiences.",
    category: "Design",
    date: "February 28, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    title: "SEO Secrets for E-commerce",
    excerpt: "Optimize your online store for search engines and drive organic traffic to boost sales.",
    category: "Marketing",
    date: "February 25, 2024",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

const categories = [
  "All",
  "Technology",
  "Design",
  "Development",
  "Accessibility",
  "Marketing",
]

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
    <div className="bg-background mx-auto min-h-screen">

      <section className="container px-30 mx-auto">
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Decorative background elements */}
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base border-amber-500/30 focus:border-amber-500 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="sticky top-0 z-20 bg-background/90 backdrop-blur-sm border-b border-amber-500/10 py-4">
          <div className="mx-auto ">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
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
        <section className="py-16 md:py-24">
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

                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors line-clamp-2">
                          {blog.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Excerpt */}
                        <CardDescription className="text-muted-foreground line-clamp-3">
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
    </div>
  )
}