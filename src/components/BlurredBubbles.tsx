"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BlurredBubbles() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const y3 = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-10 left-10 w-56 h-56 bg-blue-400 rounded-full blur-3xl opacity-20"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-64 right-24 w-72 h-72 bg-blue-600 rounded-full blur-[100px] opacity-10"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-60 h-60 bg-blue-500 rounded-full blur-[120px] opacity-15"
        style={{ y: y3 }}
      />
    </div>
  );
}
