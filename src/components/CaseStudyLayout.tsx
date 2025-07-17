"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  techStack: string[];
  description: string;
  problem: string;
  solution: string;
  impact: string;
  github?: string;
  demo?: string;
};

export function CaseStudyLayout({
  title,
  image,
  techStack,
  description,
  problem,
  solution,
  impact,
  github,
  demo,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-16 space-y-12"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">
          {title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
      </motion.div>

      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
        {image && (
          <Image
            src={image}
            alt={title}
            width={900}
            height={400}
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 shadow"
          />
        )}
      </motion.div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
        <div>
          <h2 className="text-xl font-semibold">🧩 O Problema</h2>
          <p>{problem}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🛠️ A Solução</h2>
          <p>{solution}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">📈 Impacto</h2>
          <p>{impact}</p>
        </div>
      </div>

      <div className="flex gap-6 pt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
          >
            <Github size={16} /> Ver código
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-1 text-green-600 hover:underline text-sm"
          >
            <ExternalLink size={16} /> Ver projeto ao vivo
          </a>
        )}
      </div>
    </motion.section>
  );
}
