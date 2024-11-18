"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden mx-auto border-4 border-primary">
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
              I am a passionate Frontend Developer with a strong foundation in
              technologies like HTML, CSS, tailwind JavaScript, TypeScript, and
              Next.js. My interest lies in creating clean, user-friendly, and
              visually appealing web interfaces, which has also sparked my
              curiosity in UI/UX design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              While I am continuously learning and growing in this field, I am
              excited to explore the world of Artificial Intelligence (AI) and
              how it integrates with frontend development to create smarter and
              more interactive applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
