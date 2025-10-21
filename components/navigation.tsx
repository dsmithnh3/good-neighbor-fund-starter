"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const primaryLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Programs", url: "/programs" },
    { label: "Impact", url: "/impact" },
    { label: "Our Approach", url: "/approach" },
    { label: "FAQ", url: "/faq" },
  ]

  return (
    <header className="bg-white border-b border-[#E8EDF3] sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0B1F3F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GN</span>
            </div>
            <span className="font-semibold text-[#0B1F3F] text-lg hidden sm:block">Good Neighbor Fund</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-[#0B1F3F] hover:text-[#2d5a8c] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#0B1F3F] text-white hover:bg-[#1a3a5c] rounded-full px-8 py-5 font-semibold">
              <Link href="#donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B1F3F]" /> : <Menu className="w-6 h-6 text-[#0B1F3F]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            {primaryLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block py-2 text-[#0B1F3F] hover:text-[#2d5a8c] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#0B1F3F] text-white hover:bg-[#1a3a5c] rounded-full py-5 font-semibold mt-4"
            >
              <Link href="#donate" onClick={() => setMobileMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
