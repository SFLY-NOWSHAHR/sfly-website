"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { FadeIn } from "./FadeIn"

interface ImageType {
  url: string
  alt: string
}

interface SwiperSlidesProps {
  images: ImageType[]
  autoplayDelay?: number
}

export default function SwiperSlides({
  images,
  autoplayDelay = 2000,
}: SwiperSlidesProps) {
  return (
    <section className="my-20 mx-auto max-w-7xl px-2 lg:px-4">
      <FadeIn className="flex items-center gap-x-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="h-96 w-full rounded-4xl"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-96 w-full">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-4xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeIn>
    </section>
  )
}