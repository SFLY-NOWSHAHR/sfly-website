import Link from 'next/link'
import Image from 'next/image'

interface PlayerCardProps {
  slug: string
  name: string
  position: string
  bio: string
  image: string
}

export default function PlayerCard({ slug, name, position, bio, image }: PlayerCardProps) {
  return (
    <Link href={`/players/${slug}`}>
      <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/10 border border-primary">
            <p className="text-xs font-semibold text-primary">{position}</p>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {bio}
          </p>
          <div className="mt-4 inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
            View profile →
          </div>
        </div>
      </div>
    </Link>
  )
}
