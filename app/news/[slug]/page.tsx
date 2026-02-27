import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { getNews, getNewsBySlug } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import ImageSwiper from '@/components/ImagesSwiper'
import NewsCard from '@/components/NewsCard'

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
      description: 'مقاله خبری مورد نظر شما وجود ندارد.',
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

      {/* News Header */}
      <Section className="border-b border-border pb-12">
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <ArrowRight size={20} />
            بازگشت به اخبار
          </Link>
        </div>
        <div className=" mx-auto">
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
        <ImageSwiper 
          autoplayDelay={3000}
          images={newsItem.gallary.map(image => ({
            url: image.url,
            alt: image.alt ?? ""
          }))}>

        </ImageSwiper>

      {/* News Content */}
      <Section>
        <article className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
            {newsItem.content}
          </div>
        </article>
      </Section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <Section className="border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">اخبار بیشتر</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
