import type { Metadata } from 'next'
import Section from '@/components/Section'
import PlayerCard from '@/components/PlayerCard'
import { getPlayers } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'بازیکنان تیم - اسفلای نوشهر',
  description: 'با اسکیت‌ سواران حرفه‌ای اسفلای نوشهر آشنا شوید. پیشینه، دستاوردها و سبک‌های منحصر به فرد اسکیت‌سواری آنها را کشف کنید.',
  keywords: 'تیم اسکیت به، اسکیت  حرفه ای، سوارکاران تیم، ورزشکاران اسکیت',
}

export default async function PlayersPage() {
  const players = await getPlayers()

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
          دیدن <span className="text-primary">قهرمانان</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              با اسکیت‌ سواران بااستعدادی آشنا شوید که با مهارت، پشتکار و اشتیاق، نماینده‌ی اسفلای نوشهر هستند و با اجرای خود می‌درخشند.

            </p>
        </div>
      </Section>

      {/* Players Grid */}
      <Section>
        {players.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No players available yet.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-balance text-3xl font-bold text-foreground mb-4">
          به تیم ما علاقه دارید؟
        </h2>
        <p className="text-muted-foreground mb-6">
          آخرین اخبار تیم ما را دنبال کنید.
        </p>
        <Link
          href="/news"
          className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-primary transition-all"
        >
           → خواندن آخرین اخبار
        </Link>
      </Section>
    </>
  )
}
