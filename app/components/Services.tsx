"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and performant websites using modern technologies.",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and attractive user interfaces for web applications.",
      icon: Layout,
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile apps using React Native.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What I Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <service.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
