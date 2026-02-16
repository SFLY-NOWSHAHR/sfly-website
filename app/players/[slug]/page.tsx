import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import { getPlayers, getPlayerBySlug } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  const players = await getPlayers()
  return players.map((player) => ({
    slug: player.slug,
  }))
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params
    const player = await getPlayerBySlug(slug)

  if (!player) {
    return {
      title: 'Player Not Found',
      description: 'The player profile you are looking for does not exist.',
    }
  }

  return {
    title: `${player.name} - SFLY Noshahr`,
    description: player.bio,
    keywords: `${player.name}, skateboarding, ${player.position}, professional skater`,
    openGraph: {
      type: 'profile',
      title: player.name,
      description: player.bio,
      url: `https://sflynoshahar.com/players/${player.slug}`,
      images: [
        {
          url: player.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default async function PlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const player = await getPlayerBySlug(slug)
  const allPlayers = await getPlayers()
  const otherPlayers = allPlayers.filter(p => p.slug !== slug).slice(0, 3)

  if (!player) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Player Not Found</h1>
        <p className="text-muted-foreground mb-6">The player profile you are looking for does not exist.</p>
        <Link href="/players" className="text-primary hover:text-secondary transition-colors">
          ← Back to Team
        </Link>
      </Section>
    )
  }

  return (
    <>
      {/* Player Header */}
      <Section className="border-b border-border pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gri">
          {/* Image */}
          <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-full ">
            <Image
              src={player.image}
              alt={player.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div>
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary">
              <p className="text-sm font-semibold text-primary">{player.position}</p>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {player.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {player.bio}
            </p>

            {/* Quick Link */}
            <Link
              href="/players"
              className="inline-flex items-center px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-secondary transition-all"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </Section>

      {/* Achievements */}
      {player.achievements.length > 0 && (
        <Section className="border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {player.achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary font-bold">★</div>
                  <p className="text-foreground font-semibold">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Other Players */}
      {otherPlayers.length > 0 && (
        <Section className="border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Other Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPlayers.map((p) => (
              <Link key={p.id} href={`/players/${p.slug}`}>
                <div className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary font-semibold mb-2">{p.position}</p>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.name}
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
