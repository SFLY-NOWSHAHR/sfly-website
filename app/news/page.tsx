import type { Metadata } from 'next'
import Section from '@/components/Section'
import NewsCard from '@/components/NewsCard'
import { getNews } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'اخبار جدید - اسفلای نوشهر',
  description: 'از آخرین اخبار، اطلاعیه‌ها و رویدادهای تیم اسکیت‌ اسفلای نوشهر مطلع شوید.',
  keywords: 'اخبار اسکیت, اخبار اسکیت نوشهر, رقابت اسکیت, اخبار تیم اسفلای نوشهر',
}

export default async function NewsPage() {
  const news = await getNews()

  return (
    <>
      {/* Header */}
      <Section className="text-center bg-card/30 border-b border-border">
        <h1 className="text-balance text-5xl md:text-6xl font-bold text-foreground mb-4">
          Latest <span className="text-secondary">News</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay informed with the latest announcements, competitions, and updates from SFLY Noshahr.
        </p>
      </Section>

      {/* News Grid */}
      <Section>
        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((newsItem) => (
              <NewsCard key={newsItem.id} {...newsItem} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No news available yet.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section className="text-center bg-card/50">
        <h2 className="text-balance text-3xl font-bold text-foreground mb-4">
          Want to Learn More About Skateboarding?
        </h2>
        <p className="text-muted-foreground mb-6">
          Check out our comprehensive blog with tips and techniques from our professional riders.
        </p>
        <Link
          href="/posts"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-secondary transition-all"
        >
          Read Blog Posts →
        </Link>
      </Section>
    </>
  )
}
