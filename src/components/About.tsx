"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Download, Github, Linkedin } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";
import Link from "next/link";
import { BlurredBubbles } from "./BlurredBubbles";
import { secretPfpMessages } from "@/lib/secretPfpMessages";

export function About() {
  const controls = useAnimation(); 
  const [isHovering, setIsHovering] = useState(false); 
  const [showSecretMessage, setShowSecretMessage] = useState(false); 
  const [currentSecretMessage, setCurrentSecretMessage] = useState(""); 

  const profileImageSrc = "https://github.com/gabriellefoliv.png";

  const getRandomMessage = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * secretPfpMessages.length);
    return secretPfpMessages[randomIndex];
  }, [secretPfpMessages]);

  const IMAGE_SIZE = 160; 
  const BORDER_WIDTH = 4; 
  const SVG_PADDING = 8; 

  const SVG_RADIUS = (IMAGE_SIZE / 2) + BORDER_WIDTH / 2 + SVG_PADDING / 2;
  const SVG_VIEWBOX_SIZE = IMAGE_SIZE + (BORDER_WIDTH * 2) + SVG_PADDING;

  const CIRCUMFERENCE = 2 * Math.PI * SVG_RADIUS;

  const handleMouseEnter = () => {
    setIsHovering(true);
    setCurrentSecretMessage(getRandomMessage());
    controls.start({ strokeDashoffset: 0 }).then(() => {
      setShowSecretMessage(true);
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowSecretMessage(false);
    controls.start({ strokeDashoffset: CIRCUMFERENCE });
  };

  useEffect(() => {
    controls.set({ strokeDashoffset: CIRCUMFERENCE });
  }, [controls, CIRCUMFERENCE]);

  return (
    <>
      <BlurredBubbles />
      <section id="sobre" className="w-full max-w-4xl mx-auto mt-12 px-4 py-16 flex flex-col sm:flex-row items-center gap-8">
        {/* Avatar com animação e HoverCard */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="shrink-0 relative flex items-center justify-center" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: SVG_VIEWBOX_SIZE, height: SVG_VIEWBOX_SIZE }} 
        >
          {/* SVG para a borda animada */}
          <svg
            width={SVG_VIEWBOX_SIZE}
            height={SVG_VIEWBOX_SIZE}
            className="absolute top-0 left-0"
            viewBox={`0 0 ${SVG_VIEWBOX_SIZE} ${SVG_VIEWBOX_SIZE}`}
            fill="none"
          >
            <motion.circle
              cx={SVG_VIEWBOX_SIZE / 2} 
              cy={SVG_VIEWBOX_SIZE / 2} 
              r={SVG_RADIUS} 
              stroke="#8B5CF6" 
              strokeWidth="4" 
              strokeDasharray={CIRCUMFERENCE} 
              animate={controls} 
              transition={{ duration: 1, ease: "easeInOut" }} 
              className="origin-center rotate-[-90deg]" 
            />
          </svg>

          <HoverCard open={showSecretMessage}>
            <HoverCardTrigger asChild>
              {/* Imagem de perfil */}
              <Image
                src={profileImageSrc} 
                alt="Gabrielle Oliveira"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105 relative z-10"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-60 text-center">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {currentSecretMessage} 
              </p>
            </HoverCardContent>
          </HoverCard>
        </motion.div>

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
            Estudante de Engenharia da Computação na{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              UERJ
            </span>
            , atualmente no 6º período. Diretora de Projetos de Computação na{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Serra Jr. Engenharia
            </span>
            . Tenho paixão por{" "}
            <span className="font-medium">desenvolvimento de software</span>,
            <span className="font-medium"> cloud computing</span> e{" "}
            <span className="font-medium">liderança técnica</span>.
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
              Currículo
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}