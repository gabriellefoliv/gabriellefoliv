"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Download, Github, Linkedin } from "lucide-react";
import { BlurredBubbles } from "./BlurredBubbles";
import { LinkPreview } from "./ui/link-preview";

export function About() {
  return (
    <>
    <BlurredBubbles/>
    <section id="sobre" className="w-full max-w-4xl mx-auto mt-12 px-4 py-16 flex flex-col sm:flex-row items-center gap-8">
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
        <div className="mt-6 flex gap-2">
          <LinkPreview url="https://www.linkedin.com/" className="flex gap-2">
              <Link
                className="flex gap-2 px-4 py-2 bg-sky-700 text-white font-bold rounded-md hover:duration-500 duration-500 transition hover:transition hover:bg-sky-900/75"
                href="https://www.linkedin.com/in/gabriellefoliv/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="" width={16} />
                LinkedIn
              </Link>
          </LinkPreview>

          <LinkPreview url="https://www.github.com/gabriellefoliv/" className="flex gap-2">
              <Link
                className="flex gap-2 px-4 py-2 bg-zinc-800 text-white font-bold rounded-md hover:duration-500 duration-500 transition hover:transition hover:bg-zinc-700"
                href="https://www.github.com/gabriellefoliv/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="" width={16} />
                GitHub
              </Link>
          </LinkPreview>
          <a
            href="/CV.pdf" 
            download="Gabrielle-Oliveira-CV.pdf" 
            className="flex gap-2 justify-center items-center rounded-md font-bold px-4 py-2 hover:duration-500 duration-500 transition hover:transition bg-neutral-100 text-black hover:bg-zinc-800 hover:text-white border border-zinc-900"
          >
            <Download className="" width={16} />
            Resume
          </a>
        
            
            
        </div>
      </motion.div>
    </section>
    </>
  );
}
