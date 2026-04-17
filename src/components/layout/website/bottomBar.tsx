"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BottomBar() {
  return (
    <footer className="bg-linear-to-b from-slate-900 via-slate-900 to-black text-white mt-16">
      {/* Newsletter Section */}
      <div className="border-b border-amber-600/20">
        <div className="container mx-auto px-2 sm:px-6 lg:px-30 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get exclusive deals, new arrivals & insider tips delivered to your inbox</p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="bg-white/10 border-amber-600/30 text-white placeholder:text-gray-500 focus-visible:border-amber-600 focus-visible:ring-amber-600/30"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white shrink-0 gap-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-2 sm:px-6 lg:px-30 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <p className="font-bold text-2xl text-amber-600 shadow-sm">
                <i>NEXT com</i>
              </p>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Modern e-commerce platform with AI-powered features for the best shopping experience.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-amber-600/20 hover:bg-amber-600/40 flex items-center justify-center transition-colors duration-300">
                facebook
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-amber-600/20 hover:bg-amber-600/40 flex items-center justify-center transition-colors duration-300">
                twitter
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-amber-600/20 hover:bg-amber-600/40 flex items-center justify-center transition-colors duration-300">
                instagram
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-amber-600/20 hover:bg-amber-600/40 flex items-center justify-center transition-colors duration-300">
                linkedin
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              Shop
              <span className="w-1 h-1 rounded-full bg-amber-600"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">All Products</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">New Arrivals</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Best Sellers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Sale & Deals</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Categories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              Support
              <span className="w-1 h-1 rounded-full bg-amber-600"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Shipping Info</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              Company
              <span className="w-1 h-1 rounded-full bg-amber-600"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Press</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300 text-sm">Partners</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              Contact
              <span className="w-1 h-1 rounded-full bg-amber-600"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">support@nextcom.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">123 Commerce St, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">Terms & Conditions</Link>
            <Link href="#" className="text-gray-400 hover:text-amber-600 transition-colors duration-300">Cookies</Link>
          </div>

          <div className="text-right">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-amber-600 font-semibold">NEXT com</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Ambient gradient effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl opacity-50"></div>
      </div>
    </footer>
  )
}