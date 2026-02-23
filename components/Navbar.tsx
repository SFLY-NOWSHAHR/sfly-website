'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const mobileMenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'خانه' },
    { href: '/posts', label: 'پست' },
    { href: '/players', label: 'بازیکنان' },
    { href: '/news', label: 'اخبار' },
    { href: '/coach', label: 'مربی' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur m-1 rounded-3xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-white">اسفلای</div>
              <span className="text-2xl font-semibold text-white">نوشهر</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative p-2 group cursor-pointer">
            <Image 
              className="md:flex hidden"
              src={"/mazandaran-map.webp"} 
              width={80} 
              height={60} 
              alt="mazandaran map" 
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
              opacity-0 group-hover:opacity-100 
              transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">
                مازندران
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-card rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          className="md:hidden border-t border-border overflow-hidden"
        >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col space-y-1 py-4"
        >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-card hover:text-primary rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  )
}
