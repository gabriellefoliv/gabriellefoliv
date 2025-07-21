"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  // github?: string;
  demo?: string;
  caseLink: string;
};

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  demo,
  caseLink,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full w-auto dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-36 object-cover"
      />

      <div className="p-4 flex flex-col gap-1 flex-grow">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm ">
          {description}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-sky-900 dark:bg-zinc-800 text-xs font-bold text-white dark:text-zinc-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-1 flex-grow">
          <div className="flex items-center gap-4 justify-start">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-600 hover:underline text-sm"
              >
                <ExternalLink size={16} /> Deploy
              </a>
            )}
            <Link href={caseLink}>
              <span className="inline-block text-sm text-purple-600 hover:underline mt-1">
                Estudo de caso →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>

  );
}
