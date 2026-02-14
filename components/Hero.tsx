"use client"

import Link from 'next/link'
import Image from 'next/image'
import {ReactTyped} from "react-typed"


interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  backgroundImage = '/images/hero-default.jpg',
}: HeroProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-primary font-semibold text-2xl mb-4 animate-fadeIn">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-balance text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          <ReactTyped strings={[title]} typeSpeed={40} backDelay={3000} backSpeed={50} loop/>
        </h1>
        
        {description && (
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        {ctaText && ctaHref && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              {ctaText}
            </Link>
            <Link
              href="/players"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              تیم ما
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
