import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { getNews, getNewsBySlug } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  const news = await getNews()
  return news.map((newsItem) => ({
    slug: newsItem.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const newsItem = await getNewsBySlug(slug)

  if (!newsItem) {
    return {
      title: 'صفحه مورد نظر یافت نشد!',
      description: 'The news article you are looking for does not exist.',
    }
  }

  return {
    title: `${newsItem.title} - SFLY Noshahr`,
    description: newsItem.seoDescription,
    keywords: 'skateboarding news, team updates, sports news',
    openGraph: {
      type: 'article',
      title: newsItem.title,
      description: newsItem.seoDescription,
      url: `https://sflynoshahar.com/news/${newsItem.slug}`,
      images: [
        {
          url: newsItem.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const newsItem = await getNewsBySlug(slug)
  const allNews = await getNews()
  const relatedNews = allNews.filter(n => n.slug !== slug).slice(0, 3)

  if (!newsItem) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">News Not Found</h1>
        <p className="text-muted-foreground mb-6">The news article you are looking for does not exist.</p>
        <Link href="/news" className="text-secondary hover:text-primary transition-colors">
          ← Back to News
        </Link>
      </Section>
    )
  }

  return (
    <>
      {/* Back Button */}
      <div className="flex items-center gap-2 mb-0">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          بازگشت به اخبار
        </Link>
      </div>

      {/* News Header */}
      <Section className="border-b border-border pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary font-semibold text-sm mb-4">{formatDate(newsItem.date)}</p>
          <h1 className="text-balance text-5xl font-bold text-foreground mb-6">
            {newsItem.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {newsItem.seoDescription}
          </p>
        </div>
      </Section>

      {/* Featured Image */}
      <Section className="mb-0 pb-8">
        <div className="relative h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Section>

      {/* News Content */}
      <Section className="max-w-3xl mx-auto">
        <article className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
            {newsItem.content}
          </div>
        </article>
      </Section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <Section className="border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`}>
                <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 cursor-pointer">
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-secondary font-semibold mb-2">{formatDate(news.date)}</p>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
