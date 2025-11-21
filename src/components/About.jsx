"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-black py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dc143c] mb-4 mt-16">
            About Me
          </h2>
          <div className="w-16 sm:w-20 bg-[#dc143c] h-1 rounded-2xl"></div>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/boy2.jpeg"
              alt="Profile"
              className="rounded-lg shadow-lg w-56 sm:w-72 md:w-80 lg:w-[300px] h-auto"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-2xl font-bold text-[#dc143c]">Who am I?</h1>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              I am a passionate software engineer with a focus on building
              high-quality web applications. With a strong foundation in
              computer science and a keen eye for detail, I strive to create
              efficient, scalable, and user-friendly solutions. My expertise
              lies in front-end and back-end development, and I enjoy working
              with modern technologies to bring ideas to life. I am dedicated to
              continuous learning and growth, always seeking new challenges to
              enhance my skills and contribute to impactful projects.
            </p>

            {/* Skills */}
            <h1 className="text-2xl font-bold text-white mt-6">My Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-8">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "TypeScript",
                "Express",
                "Git",
                "HTML",
                "CSS",
                "Flutter",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#0b0a1a] text-[#dc143c] px-3 py-2 font-bold rounded-full text-sm sm:text-base hover:bg-[#dc143c] hover:text-black transition-all duration-500 text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
