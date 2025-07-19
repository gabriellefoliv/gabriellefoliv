"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiExpo,
} from "react-icons/si";

const stacks = [
{ name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//   { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Prisma", icon: <SiPrisma className="text-black dark:text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

export function Stacks() {
  return (
    <section id="stack" className="w-full py-8  dark:bg-neutral-950 px-4 md:px-20">
      {/* <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-10">
        💻 Stacks que uso no dia a dia
      </h2> */}

      <div className="flex flex-wrap justify-center gap-4">
        {stacks.map((stack, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-xl shadow-md text-sm text-zinc-800 dark:text-white font-medium"
          >
            <span className="text-xl">{stack.icon}</span>
            {stack.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
