import FeaturedPlayers from "@/components/FeaturedPlayer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";


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
    </>
  );
}
