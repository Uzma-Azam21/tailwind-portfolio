"use client";

import { motion } from "framer-motion";
import { Code, Layout, ShoppingCart } from "lucide-react";
import { SiNextdotjs, SiReact } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and performant websites using modern technologies.",
      icon: () => <Code className="w-12 h-12 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and attractive user interfaces for web applications.",
      icon: () => <MdDesignServices className="w-12 h-12 text-primary" />,
    },
    {
      title: "Next.js & React.js Frontend Development",
      description:
        "Building fast, SEO-friendly and scalable UIs using modern frameworks like Next.js and React.",
      icon: () => (
        <div className="flex gap-2 text-3xl text-primary">
          <SiNextdotjs />
          <SiReact />
        </div>
      ),
    },
    {
      title: "Landing Page Design & Development",
      description:
        "Creating high-converting, responsive landing pages tailored for marketing and product showcases.",
      icon: () => <Layout className="w-12 h-12 text-primary" />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Developing secure and scalable online stores with payment integration and product management.",
      icon: () => <ShoppingCart className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon()}</div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
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
