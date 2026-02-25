import type { Metadata } from 'next'
import Section from '@/components/Section'
import NewsCard from '@/components/NewsCard'
import { getNews } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '@/components/Cta'

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
      <Section className="relative overflow-hidden text-center border-b border-border">
        {/* background image */}
        <Image
          src={"/images/bg1.jpg"}
          alt="Hero background"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>

        <div className="relative z-10">
            <h1 className="text-balance text-5xl md:text-6xl font-bold text-foreground mb-4">
                آخرین <span className="text-secondary">اخبار</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            از آخرین اطلاعیه‌ها، مسابقات و به‌روزرسانی‌های اسفلای نوشهر مطلع شوید.
            </p>
        </div>
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
            <p className="text-muted-foreground text-lg">آخبار جدیدی در دسترس نیست.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <CTA 
        imgSrc="bg2"
        title="می‌خواهید درباره اسکیت‌ بیشتر بدانید؟"
        desc="وبلاگ جامع ما را با نکات و تکنیک‌های سوارکاران حرفه‌ای ما بررسی کنید."
        href="posts"
        linkContent="خواندن بلاگ ها "
      />
    </>
  )
}
