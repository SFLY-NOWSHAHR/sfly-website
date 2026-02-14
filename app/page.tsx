import FeaturedPlayers from "@/components/FeaturedPlayer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LateNews";
import Section from "@/components/Section";
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
        title="تیم اسفلای مازندران نوشهر"
        subtitle="آکادمی اسکیت حرفه ای"
        description="در SFLY نوشهر، اسکیت فقط حرکت نیست؛
جریانِ سرعت، تمرکز و جسارت است"
        ctaText="به ما بپیوندید"
        ctaHref="/players"
        backgroundImage="/images/hero-default.jpg"
      />

      {/* Team Introduction */}
      <Section className="bg-gradient-to-b from-background to-card/80">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-balance text-4xl font-bold text-foreground mb-4">
            درباره <span className="text-primary">تیم اسفلای نوشهر</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            اسفلای نوشهر، تیمی حرفه‌ای و پیشرو در دنیای اسکیت است که همواره مرزهای این ورزش را فراتر می‌برد.
اعضای تیم ما علاوه بر حضور در بالاترین سطح رقابت، با کسب مقام‌های برتر در مسابقات استانی و کشوری، افتخارات ارزشمندی را رقم زده‌اند و الهام‌بخش نسل آینده اسکیت‌سواران هستند.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            از فری‌استایل تا مسابقات حرفه‌ای،
ما نماینده‌ی پیشروی فرهنگ اسکیت رولینگ هستیم.
به ما بپیوندید تا همچنان نوآوری کنیم، الهام ببخشیم و این ورزش را به سطحی بالاتر برسانیم.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <p className="text-sm text-muted-foreground">بازیکنان</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
            <p className="text-sm text-muted-foreground">قهرمانان</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-sm text-muted-foreground">مسابقات</p>
          </div>
        </div>
      </Section>

      {/* Featured Player */}
      <FeaturedPlayers />

      {/* Latest News */}
      <LatestNews />

      <Section className="bg-card/50 text-center">
        <h2 className="text-balance text-4xl font-bold text-foreground mb-6">
          آماده‌ای بهترین تجربه را حس کنی؟
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          به جمع ما بپیوند، از حرفه‌ای‌ها یاد بگیر و ببین چه چیزی لازم است تا در صدر اسکیت رولینگ بدرخشی.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            خواندن بلاگ های ما
          </Link>
          <Link
            href="/coach"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            دیدار با مربی
          </Link>
        </div>
      </Section>
    </>
  );
}
