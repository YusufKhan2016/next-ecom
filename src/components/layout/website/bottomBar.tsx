"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

export default function BottomBar() {
  return (
    <footer className="bg-background shadow-[10px_-2px_4px_0px_rgba(0,0,0,0.1)] shadow-amber-500  text-foreground mt-16 relative overflow-hidden">

      {/* Ambient glow orbs */}
      <div
        className="absolute top-10 -left-16 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)" }}
      />

      {/* ── Newsletter Band ── */}
      <div className="border-b border-amber-600/20 relative z-10">
        <div className="max-w-5xl mx-auto py-10">
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
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-white/5 border border-amber-600/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-amber-600/70 transition-colors"
              />
              <button className="bg-amber-600 hover:bg-amber-700 transition-colors text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-2 shrink-0 cursor-pointer">
                Subscribe
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand Centerpiece ── */}
      <div className="relative z-10 text-center pt-14 pb-10">

        {/* Glowing brand name */}
        <Link href="/" className="inline-block">
          <i
            className="text-amber-500 font-bold tracking-wide"
            style={{
              fontSize: "clamp(40px, 8vw, 60px)",
              textShadow:
                "0 0 18px rgba(217,119,6,0.6), 0 0 40px rgba(217,119,6,0.35), 0 0 80px rgba(217,119,6,0.18)",
            }}
          >
            NEXT com
          </i>
        </Link>

        <p className="text-[11px] tracking-[0.22em] uppercase text-zinc-600 font-light mt-2">
          Modern e-commerce · AI-powered · Built for you
        </p>

        {/* Amber decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-6 max-w-xs mx-auto">
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(217,119,6,0.45))" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-amber-600"
            style={{ boxShadow: "0 0 8px rgba(217,119,6,0.9)" }}
          />
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(to left, transparent, rgba(217,119,6,0.45))" }}
          />
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mt-7">

          {/* Facebook */}
          <Link
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-amber-600/25 bg-amber-600/10 hover:bg-amber-600/25 hover:border-amber-600/60 transition-all text-amber-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>

          {/* X / Twitter */}
          <Link
            href="#"
            aria-label="X (Twitter)"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-amber-600/25 bg-amber-600/10 hover:bg-amber-600/25 hover:border-amber-600/60 transition-all text-amber-500"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-amber-600/25 bg-amber-600/10 hover:bg-amber-600/25 hover:border-amber-600/60 transition-all text-amber-500"
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
            className="w-9 h-9 rounded-full flex items-center justify-center border border-amber-600/25 bg-amber-600/10 hover:bg-amber-600/25 hover:border-amber-600/60 transition-all text-amber-500"
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
            className="w-9 h-9 rounded-full flex items-center justify-center border border-amber-600/25 bg-amber-600/10 hover:bg-amber-600/25 hover:border-amber-600/60 transition-all text-amber-500"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#0a0a0a" />
            </svg>
          </Link>

        </div>
      </div>

      {/* ── Four-column Link Grid ── */}
      <div className="relative z-10 max-w-5xl mx-auto pb-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Shop */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-amber-600 mb-4 flex items-center gap-2">
            Shop
          </p>
          <ul className="space-y-2.5">
            {["All Products", "New Arrivals", "Best Sellers", "Sale & Deals", "Categories"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-zinc-500 hover:text-amber-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-amber-600 mb-4 flex items-center gap-2">
            Support
          </p>
          <ul className="space-y-2.5">
            {["Help Center", "Contact Us", "Shipping Info", "Returns", "FAQ"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-zinc-500 hover:text-amber-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-amber-600 mb-4 flex items-center gap-2">
            Company
          </p>
          <ul className="space-y-2.5">
            {["About Us", "Careers", "Blog", "Press", "Partners"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-zinc-500 hover:text-amber-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-amber-600 mb-4 flex items-center gap-2">
            Contact
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-2.5">
              <Phone size={14} className="text-amber-600 mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-500">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={14} className="text-amber-600 mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-500">support@nextcom.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-amber-600 mt-0.5 shrink-0" />
              <span className="text-sm text-zinc-500">123 Commerce St, NY 10001</span>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms & Conditions", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-zinc-600 hover:text-amber-500 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-xs text-zinc-700">
            © 2024{" "}
            <span className="text-amber-600 font-medium">NEXT com</span>
            . All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}