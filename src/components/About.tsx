"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 flex flex-col sm:flex-row items-center gap-8">
      {/* Avatar com animação */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="shrink-0"
      >
        <Image
          src="https://github.com/gabriellefoliv.png"
          alt="Gabrielle Oliveira"
          width={160}
          height={160}
          className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Texto com animação */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center sm:text-left"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
          Gabrielle Oliveira
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Estudante de Engenharia da Computação na <span className="font-semibold text-blue-600 dark:text-blue-400">UERJ</span>, atualmente no 6º período.
          Diretora de Projetos de Computação na <span className="font-semibold text-emerald-600 dark:text-emerald-400">Serra Jr. Engenharia</span>.
          Tenho paixão por <span className="font-medium">desenvolvimento de software</span>,
          <span className="font-medium"> cloud computing</span> e <span className="font-medium">liderança técnica</span>.
        </p>
      </motion.div>
    </section>
  );
}
