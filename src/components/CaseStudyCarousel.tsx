"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CaseStudyCarouselProps = {
  images: string[];
  title: string;
};

export function CaseStudyCarousel({ images, title }: CaseStudyCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((imgSrc, index) => (
            <div className="embla__slide flex-none w-full" key={index}>
              <Image
                src={imgSrc}
                alt={`${title} - Imagem ${index + 1}`}
                width={900}
                height={400}
                className="w-full h-auto object-cover"
                priority={index === 0} // Carrega a primeira imagem com prioridade
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && ( // Só mostra botões se houver mais de uma imagem
        <>
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={scrollPrev}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={scrollNext}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === selectedIndex ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                aria-label={`Ir para a imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}