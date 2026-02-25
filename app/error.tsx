'use client'

import Section from '@/components/Section'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[v0] Error caught:', error)
  }, [error])

  return (
    <Section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-6xl font-bold text-primary mb-4">خطا!</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">مشکلی پیش آمده است.</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          با خطای غیرمنتظره‌ای مواجه شدیم. لطفاً دوباره امتحان کنید یا به صفحه اصلی برگردید.
        </p>
        {error.digest && (
          <p className="text-sm text-muted-foreground mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-secondary transition-all"
          >
            دوباره تلاش کنید!
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-black transition-all"
          >
            برگشت به خانه
          </Link>
        </div>
      </div>
    </Section>
  )
}
