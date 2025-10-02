"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Romofyi Website",
      category: "web",
      image: "/project1.png",
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce App",
      category: "design",
      image: "/project2.png",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "/project3.png",
      link: "#",
    },
    {
      id: 4,
      title: "Chat Application",
      category: "mobile",
      image: "/project4.png",
      link: "#",
    },
    {
      id: 5,
      title: "Blog Platform",
      category: "web",
      image: "/boy.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      category: "mobile",
      image: "/project6.png",
      link: "#",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const tabs = ["all", "web", "mobile", "design"];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black py-10 px-4 md:px-12"
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
            My Projects
          </h2>
          <div className="w-16 md:w-20 h-1 rounded-2xl bg-[#dc143c]"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 text-sm md:text-base
                ${
                  activeTab === tab
                    ? "bg-[#a40612] text-white shadow-[0_6px_12px_0_#a40612]"
                    : "bg-[#0b0a1a] border-2 border-[#a40612] text-gray-300 hover:bg-[#a40612] hover:text-white hover:shadow-[0_6px_12px_0_#a40612] hover:scale-105"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-[#0b0a1a] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-[#dc143c]/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center transition-opacity duration-500 p-4">
                <h3 className="text-lg md:text-xl font-bold mb-4">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#dc143c] px-3 md:px-4 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-200 transition"
                >
                  View Project
                </a>
              </div>

              {/* Category (always visible) */}
              <p className="p-3 md:p-4 text-gray-400 capitalize text-sm md:text-base">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
