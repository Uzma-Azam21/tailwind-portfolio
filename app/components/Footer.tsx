"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            © {new Date().getFullYear()} Uzma Azam. All rights reserved.
          </motion.p>

          <div className="flex space-x-5">
            <motion.a
              href="https://github.com/Uzma-Azam21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/uzma-azam-709baa32b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="https://twitter.com/uzmaazam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
