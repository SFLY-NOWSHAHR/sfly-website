import Hero from "@/components/Hero";
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
    </>
  );
}
