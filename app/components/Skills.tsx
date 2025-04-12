"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "CMS - Sanity",
    "Git",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-xl text-center border border-white/20 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
