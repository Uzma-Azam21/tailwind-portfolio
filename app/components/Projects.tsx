"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Furniture Website",
      description:
        "A full-featured online store built with Next.js and Stripe integration.",
      image: "/chair.jpg",
      url: "https://ecommmerce-marketplace-comfort-crafty.vercel.app/",
    },
    {
      title: "AI-Powered Web App",
      description: "Modern AI tool built with Next.js + Tailwind CSS.",
      image: "/ai.jpg",
      url: "https://agentia-world-website-nextjs.vercel.app/",
    },
    {
      title: "Online Book Shop",
      description: "Online book selling platform with clean UI.",
      image: "/book.jpg",
      url: "https://ecommerce-bookshop.vercel.app/",
    },
    {
      title: "Horror Blogs",
      description: "A dark-themed blog platform for horror stories.",
      image: "/horror.jpg",
      url: "https://horror-blog-seven.vercel.app/",
    },
    {
      title: "Figma Design",
      description:
        "Designed in Figma and meticulously translated to code using Next.js and Tailwind CSS for pixel-perfect results.",
      image: "/figma.jpg",
      url: "https://figma-design-two-gamma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
