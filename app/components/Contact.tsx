"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate send success
    setSubmitStatus("success");

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide message after 3s
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="max-w-lg mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-gray-700 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                className="p-3 bg-green-100 text-green-700 rounded-md text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✅ Thank you! Your message has been received.
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
