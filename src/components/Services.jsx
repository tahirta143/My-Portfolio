"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#1a1a1a] py-10 px-4 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#dc143c] mb-4 mt-8">
            My Services
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#dc143c] rounded-2xl"></div>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-black h-auto min-h-[250px] p-6 rounded-lg shadow-[0_2px_10px_rgba(255,0,0,0.6)] hover:shadow-none transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-[#dc143c] mb-4">
              Web Development
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Custom website development tailored to your specific needs, built
              with modern technologies and best practices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black h-auto min-h-[250px] p-6 rounded-lg shadow-[0_2px_10px_rgba(255,0,0,0.6)] hover:shadow-none transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-[#dc143c] mb-4">
              Mobile App Development / Flutter
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Building responsive and high-performance mobile applications with
              Flutter.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black h-auto min-h-[250px] p-6 rounded-lg shadow-[0_2px_10px_rgba(255,0,0,0.6)] hover:shadow-none transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-[#dc143c] mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Creating visually appealing and user-friendly interfaces for web
              and mobile applications.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
