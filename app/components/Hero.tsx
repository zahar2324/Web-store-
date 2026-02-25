import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import  Link  from 'next/link'
const Hero = () => {
    const slides = [
        {
            headline: "Discover the Best ",
            description: "Shop now and enjoy exclusive discounts ",
      image: "/slide1.jpg"
        },
        {
            headline: "Upgrade Your Style on!",
            description: "Explore our new arrivals and ",
      image: "/slide2.jpg"
        },
        {
            headline: "Transform Your Decor!",
            description: "Discover our unique home",
            image: "/slide3.jpg"
        }

    ]
  return (
    <div className="padd-container">
      <Carousel className="w-full">
        <CarouselContent className="ml-0">
          {
            slides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative h-[72vh] min-h-[440px] w-full overflow-hidden rounded-3xl sm:h-[560px] xl:h-[640px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.25),transparent_45%)]" />

                  <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-6 sm:px-12 lg:px-16">
                    <span className="w-fit rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      New season
                    </span>
                    <h2 className="max-w-[16ch] text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                      {slide.headline}
                    </h2>
                    <p className="max-w-[52ch] text-sm text-white/80 sm:text-base">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href='/categories'>
                        <button className='bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 cursor-pointer'>
                          Shop now
                        </button>
                      </Link>
                      
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/40 bg-white/10 text-white hover:bg-white/20 cursor-pointer"
                      >
                        Browse collection
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border-white/30 bg-black/40 text-white hover:bg-black/60" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border-white/30 bg-black/40 text-white hover:bg-black/60" />
      </Carousel>
    </div>
  )
}

export default Hero