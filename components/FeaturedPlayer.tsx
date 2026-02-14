import Section from './Section'
import PlayerCard from './PlayerCard'
import { getPlayers } from '@/lib/data'
import Link from 'next/link'

export default async function FeaturedPlayers() {
  const players = await getPlayers()
  const featuredPlayers = players.slice(0, 3)

  return (
    <Section className="bg-card/30">
      <div className="mb-12 text-center flex justify-center items-center flex-col">
        <h2 className="text-balance text-4xl font-bold text-foreground mb-4">
          دیدار با <span className="text-primary">قهرمانان</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          بازیکنان اسکیت‌ بااستعدادی را کشف می کنیم که با مهارت، عزم و اشتیاق، نماینده‌ی اسفلای نوشهر هستند.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredPlayers.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/players"
          className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
        >
          → دیدن تمام بازیکنان
        </Link>
      </div>
    </Section>
  )
}
