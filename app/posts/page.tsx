import type { Metadata } from 'next'
import Section from '@/components/Section'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '@/components/Cta'

export const metadata: Metadata = {
  title: 'وبلاگ - اسفلای نوشهر',
  description: 'جدیدترین نکات، تکنیک‌ها و بینش‌های اسکیت‌ را از تیم اسفلای نوشهر بخوانید.',
  keywords: 'ولاگ اسکیت، نکات اسکیت، تکنیک های اسکیت، راهنما های اسکیت',
}

export default async function PostsPage() {
  const posts = await getPosts()

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
                همه چیز درباره <span className="text-primary">اسکیت</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                هنر اسکیت‌ را با نکات، تکنیک‌ها و دانش تخصصی تیم حرفه‌ای ما به اوج برسانید
            </p>
        </div>
      </Section>

      {/* Posts Grid */}
      <Section>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">وبلاگی هنوز در دسترس نیست.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <CTA 
        imgSrc="bg3"
        title="می‌خواهید با تیم ما بیشتر آشنا شوید؟"
        desc="با تیم حرفه‌ای ما آشنا شوید و از آخرین اخبار مطلع شوید."
        href="posts"
        linkContent="خواندن بلاگ ها "
        />
    </>
  )
}
