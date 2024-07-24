"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    url: "/slides/1.png",
    alt: "Балістичні пакети",
  },
  {
    id: 2,
    url: "/slides/2.png",
    alt: "Нові шеврони",
  },
  {
    id: 3,
    url: "/slides/3.png",
    alt: "Плитоноска ARES GEN.II",
  },
  {
    id: 4,
    url: "/slides/4.png",
    alt: "Саперське приладдя",
  },
  {
    id: 5,
    url: "/slides/5.png",
    alt: "Комплект Топ Балістик",
  },
  {
    id: 6,
    url: "/slides/6.png",
    alt: "Великий вибір касок",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;

    if (!isHovering) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering]);

  return (
    <div
      className="mt-5"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-[calc(100vw/3)] overflow-hidden rounded-lg">
        <div
          className="flex h-full w-max gap-4 transition-all duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="relative h-full w-[calc(100vw-16px)] last:mr-2"
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                sizes="100%"
                priority={i === currentSlide}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#f4a137cc] p-1 px-px opacity-80"
          onClick={prevSlide}
        >
          <ChevronLeft color="#fff" />
        </div>
        <div
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#f4a137cc] p-1 px-px opacity-70"
          onClick={nextSlide}
        >
          <ChevronRight color="#fff" />
        </div>
      </div>

      {/* Circles */}
      <div className="mt-2 hidden justify-center md:flex">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`mx-1 size-2 cursor-pointer rounded-full bg-[#f4a137cc] ${
              i === currentSlide ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
