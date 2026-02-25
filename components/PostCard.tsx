import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface PostCardProps {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
}

export default function PostCard({ slug, title, excerpt, image, date }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="group rounded-3xl border border-border bg-card overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-xs text-primary font-semibold mb-2">{formatDate(date)}</p>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
          <div className="mt-4 inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
            بیشتر ⭠
          </div>
        </div>
      </div>
    </Link>
  )
}
