import { FadeIn } from "@/components/FadeIn";
import FeaturedPlayers from "@/components/FeaturedPlayer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LateNews";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";


async function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await sleep(2000)

  return (
    <>
      <Hero
        title="آکادمی اسکیت اسفلای نوشهر"
        subtitle="آکادمی اسکیت حرفه ای"
        description="در اسفلای نوشهر، اسکیت فقط حرکت نیست؛
جریانِ سرعت، تمرکز و جسارت است"
        ctaText="به ما بپیوندید"
        ctaHref="/players"
        backgroundImage="/images/hero-default.jpg"
      />

      {/* Team Introduction */}
      <Section className="bg-gradient-to-b to-card/50 ">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-balance text-4xl font-bold text-white mb-4">
            درباره <span className="">تیم اسفلای نوشهر</span>
          </h2>
          <p className="text-xl text-right sm:text-center text-white mb-6 leading-relaxed">
            اسفلای نوشهر، تیمی حرفه‌ای و پیشرو در دنیای اسکیت است که همواره مرزهای این ورزش را فراتر می‌برد.
اعضای تیم ما علاوه بر حضور در بالاترین سطح رقابت، با کسب مقام‌های برتر در مسابقات استانی و کشوری، افتخارات ارزشمندی را رقم زده‌اند و الهام‌بخش نسل آینده اسکیت‌سواران هستند.
          </p>
            <p className="text-lg text-right sm:text-center text-white leading-relaxed">
              از فری‌استایل تا مسابقات حرفه‌ای،
  ما نماینده‌ی پیشروی فرهنگ اسکیت رولینگ هستیم.
  به ما بپیوندید تا همچنان نوآوری کنیم، الهام ببخشیم و این ورزش را به سطحی بالاتر برسانیم.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 pt-12 mx-auto justify-items-center">
            <div className="text-center bg-primary text-white rounded-3xl w-28 h-28 flex justify-center items-center flex-col">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-sm">بازیکنان</p>
            </div>
            <div className="text-center bg-primary text-white rounded-3xl w-28 h-28 flex justify-center items-center flex-col">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-sm">قهرمانان</p>
            </div>
            <div className="text-center bg-primary text-white rounded-3xl w-28 h-28 flex justify-center items-center flex-col">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-sm">مسابقات</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Featured Player */}
      <FadeIn>
        <FeaturedPlayers />
      </FadeIn>

      {/* Latest News */}
      <FadeIn>
        <LatestNews />
      </FadeIn>

      <FadeIn>
        <Section className="bg-background text-center relative flex items-center justify-center overflow-hidden">
          {/* background image */}
          <Image
            src={"/images/bg3.jpg"}
            alt="Hero background"
            fill
            sizes="100vw"
            className="absolute inset-0 object-cover"
            priority
          />
        
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
          
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-balance text-4xl font-bold text-foreground mb-6">
              آماده‌ای بهترین تجربه را حس کنی؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              به جمع ما بپیوند، از حرفه‌ای‌ها یاد بگیر و ببین چه چیزی لازم است تا در صدر اسکیت رولینگ بدرخشی.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/posts"
                className="inline-flex items-center justify-center font-bold hover:shadow-lg hover:shadow-primary/50"
              >
                خواندن بلاگ های ما
              </Button>
              <Button
                href="/coach"
                invert={true}
                className="inline-flex items-center justify-center border-2 border-primary font-bold"
              >
                دیدار با مربی
              </Button>
            </div>
          </div>
        </Section>
      </FadeIn>
    </>
  );
}
