"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BottomBar() {
  return (
    <footer className="bg-background shadow-[10px_-2px_4px_0px_rgba(0,0,0,0.1)] shadow-gray-100  text-foreground mt-16 relative overflow-hidden">

      {/* ── Newsletter Band ── */}
      <div className="border-b border-accent-foreground/20 relative z-10">
        <div className="container px-4 mx-auto py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1.5">
                Stay Updated
              </h3>
              <p className="text-sm text-zinc-500">
                Exclusive deals, new arrivals &amp; insider tips to your inbox
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 h-full bg-white/5 border focus:text-foreground text-foreground border-accent-foreground/30 rounded-xl px-4 py-2.5 text-sm  placeholder:text-zinc-600 outline-none focus:border-accent-foreground/70 transition-colors"
              />
              <button className="bg-accent-foreground hover:bg-accent-foreground transition-colors text-white text-sm font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 shrink-0 cursor-pointer">
                Subscribe
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand Centerpiece ── */}
      <div className="relative z-10 text-left pt-14 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glowing brand name */}
          <Link href="/" className="inline-block">
            <i
              className="text-accent-foreground font-bold tracking-wide"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
              }}
            >
              NEXT com
            </i>
          </Link>

          <p className="text-[11px] tracking-[0.22em] uppercase text-zinc-600 font-light mt-2">
            Modern e-commerce · AI-powered · Built for you
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-6">

          {/* Facebook */}
          <Link
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-accent-foreground/25 bg-accent-foreground/10 hover:bg-accent-foreground/25 hover:border-accent-foreground/60 transition-all text-accent-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>

          {/* X / Twitter */}
          <Link
            href="#"
            aria-label="X (Twitter)"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-accent-foreground/25 bg-accent-foreground/10 hover:bg-accent-foreground/25 hover:border-accent-foreground/60 transition-all text-accent-foreground"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-accent-foreground/25 bg-accent-foreground/10 hover:bg-accent-foreground/25 hover:border-accent-foreground/60 transition-all text-accent-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-accent-foreground/25 bg-accent-foreground/10 hover:bg-accent-foreground/25 hover:border-accent-foreground/60 transition-all text-accent-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>

          {/* YouTube */}
          <Link
            href="#"
            aria-label="YouTube"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-accent-foreground/25 bg-accent-foreground/10 hover:bg-accent-foreground/25 hover:border-accent-foreground/60 transition-all text-accent-foreground"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#0a0a0a" />
            </svg>
          </Link>

        </div>
        </div>
      </div>

      {/* ── Four-column Link Grid ── */}
      <div className="relative z-10 container px-4 mx-auto pb-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Shop */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-accent-foreground mb-4 flex items-center gap-2">
            Shop
          </p>
          <ul className="space-y-2.5">
            {["All Products", "New Arrivals", "Best Sellers", "Sale & Deals", "Categories"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-zinc-500 hover:text-accent-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-accent-foreground mb-4 flex items-center gap-2">
            Support
          </p>
          <ul className="space-y-2.5">
            {["Help Center", "Contact Us", "Shipping Info", "Returns", "FAQ"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-zinc-500 hover:text-accent-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-accent-foreground mb-4 flex items-center gap-2">
            Company
          </p>
          <ul className="space-y-2.5">
            {["About Us", "Careers", "Blog", "Press", "Partners"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-zinc-500 hover:text-accent-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-accent-foreground mb-4 flex items-center gap-2">
            Contact
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-2.5">
              <Phone size={14} className="text-accent-foreground mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-500">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={14} className="text-accent-foreground mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-500">support@nextcom.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-accent-foreground mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-500">123 Commerce St, NY 10001</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-zinc-700 order-2 md:order-1">
            © 2024{" "}
            <span className="text-accent-foreground font-medium">NEXT com</span>
            . All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-6 order-1 md:order-2">
            {/* Company Name */}
            <Link href="/" className="inline-block">
              <i
                className="text-accent-foreground font-bold tracking-wide text-lg"
                style={{
                  textShadow:
                    "0 0 rgba(217,119,6,0.6), 0 0 20px rgba(217,119,6,0.35)",
                }}
              >
                NEXT com
              </i>
            </Link>

            {/* Page Links */}
            <div className="flex flex-wrap gap-5 justify-center md:justify-end">
              {["Privacy Policy", "Terms & Conditions", "Cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-zinc-600 hover:text-accent-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}