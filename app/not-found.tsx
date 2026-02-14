import Section from '@/components/Section'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">صفحه مورد نظر یافت نشد!</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          متاسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد. بیایید شما را به مسیر درست برگردانیم.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all"
          >
            بازگشت به صفحه اصلی
          </Link>
          <Link
            href="/posts"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            خواندن مقالات
          </Link>
        </div>
      </div>
    </Section>
  )
}
