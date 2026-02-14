import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface NewsCardProps {
  slug: string
  title: string
  content: string
  image: string
  date: string
}

export default function NewsCard({ slug, title, content, image, date }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 cursor-pointer">
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
          <p className="text-xs text-secondary font-semibold mb-2">{formatDate(date)}</p>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {content}
          </p>
          <div className="mt-4 inline-flex items-center text-secondary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
            Read news →
          </div>
        </div>
      </div>
    </Link>
  )
}
