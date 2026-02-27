import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { getPosts, getPostBySlug } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { FadeIn } from '@/components/FadeIn'


export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'صفحه مورد نظر یافت نشد!',
      description: 'پستی که به دنبالش هستید وجود ندارد.',
    }
  }

  return {
    title: `${post.title} - اسفلای نوشهر`,
    description: post.seoDescription,
    keywords: post.seoKeywords,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.seoDescription,
      url: `https://sflynoshahar.com/posts/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default async function PostPage(
    { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const allPosts = await getPosts()
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">صفحه مورد نظر یافت نشد!</h1>
        <p className="text-muted-foreground mb-6">پستی که به دنبالش هستید وجود ندارد.</p>
        <Link href="/posts" className="text-primary hover:text-secondary transition-colors">
            به مقالات برگردید ⭠
        </Link>
      </Section>
    )
  }

  return (
    <>
      {/* Post Header */}
      <Section>
        <FadeIn className="flex justify-evenly items-start flex-col md:flex-row">
          <div className="mx-auto mb-8">
            <p className="text-primary font-semibold text-sm mb-4">{formatDate(post.date)}</p>
            <h1 className="text-balance text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={500}
            className="object-cover rounded-3xl"
            priority
          />
        </FadeIn>
      </Section>

      {/* Post Content */}
      <Section>
        <FadeIn className="flex justify-evenly items-start flex-col md:flex-row">
          <article className="prose prose-invert max-w-96 mb-8">
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
          <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={400}
              className="object-cover rounded-3xl"
              priority
            />
          </FadeIn>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="border-t border-border">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-8">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/posts/${relatedPost.slug}`}>
                  <div className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                    <div className="relative h-40 w-full overflow-hidden bg-muted">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-primary font-semibold mb-2">{formatDate(relatedPost.date)}</p>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}
    </>
  )
}
