import Section from './Section'
import NewsCard from './NewsCard'
import { getNews } from '@/lib/data'
import Link from 'next/link'

export default async function LatestNews() {
  const news = await getNews()
  const latestNews = news.slice(0, 3)

  return (
    <Section>
      <div className="mb-12 text-center flex justify-center items-center flex-col">
        <h2 className="text-balance text-4xl font-bold text-foreground mb-4">
          آخرین <span className="text-secondary">اخبار</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          از آخرین رویدادها، مسابقات و اطلاعیه‌های اسفلای نوشهر مطلع شوید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {latestNews.map((newsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/news"
          className="inline-flex items-center px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
        >
          → دیدن اخبار
        </Link>
      </div>
    </Section>
  )
}
