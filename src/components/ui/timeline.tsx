"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  logo?: string; // url opcional
  date: string;
  bullets: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white dark:bg-neutral-950 px-4 md:px-10 py-20"
    >
      <h1 className="text-3xl font-bold text-center mb-16 text-zinc-900 dark:text-white">
        Experiência Profissional & Acadêmica
      </h1>

      <div ref={ref} className="relative max-w-5xl mx-auto space-y-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:items-start relative z-10"
          >
            {/* Linha + Ponto */}
            <div className="relative w-6 flex-shrink-0 flex justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
            </div>

            {/* Conteúdo da experiência */}
            <div className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="rounded-md object-contain"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{item.date}</p>
                </div>
              </div>

              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Linha de animação */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[11px] top-0 w-[2px] bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
