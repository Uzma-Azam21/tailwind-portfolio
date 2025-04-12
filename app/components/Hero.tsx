"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-28 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
            Frontend Developer
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Crafting{" "}
            <span className="text-primary font-semibold">beautiful</span> and{" "}
            <span className="text-primary font-semibold">functional</span> web
            experiences
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg shadow-primary/40 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
