"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-[6px] border-white dark:border-gray-700 shadow-xl hover:scale-105 transition duration-300">
              <Image
                src="/profile.png"
                alt="Frontend Developer"
                className="object-cover"
                width={300}
                height={300}
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-gray-700 shadow-xl">
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I&rsquo;m a <strong>Frontend Developer</strong> who enjoys building
                clean and user-friendly websites using <strong>HTML</strong>,{" "}
                <strong>CSS</strong>, <strong>Tailwind</strong>,{" "}
                <strong>JavaScript</strong>, <strong>TypeScript</strong>, and{" "}
                <strong>Next.js</strong>. I also love designing smooth and
                attractive interfaces with <strong>UI/UX design</strong>.
              </p>

              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I&rsquo;m currently exploring the world of <strong>AI</strong> and how
                it connects with web development. I&rsquo;ve been learning{" "}
                <strong>Python</strong> and <strong>Agentic AI</strong> to build
                smarter apps. I enjoy using tech to{" "}
                <strong>solve real problems</strong>, like helping businesses
                work better or making everyday tasks easier for people.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&rsquo;m always excited to <strong>learn new tools</strong>, try out
                new ideas, and grow as a developer who brings together
                creativity and real-world solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
