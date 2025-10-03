"use client";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { GrSend } from "react-icons/gr";

export default function About() {
  const contacts = [
    {
      id: 1,
      label: "Email",
      value: "mtahirmusman2@gmail.com",
      icon: <Mail size={22} />,
      link: "mailto:mtahirmusman2@gmail.com",
    },
    {
      id: 2,
      label: "Phone",
      value: "+92 325 4828492",
      icon: <Phone size={22} />,
      link: "tel:+923254828492",
    },
    {
      id: 3,
      label: "Location",
      value: "J3 Block House 526, Lahore Johar Town",
      icon: <MapPin size={22} />,
      link: "https://www.google.com/maps?q=Lahore+Johar+Town",
    },
  ];

  const socials = [
    {
      id: 4,
      label: "LinkedIn",
      value: "linkedin.com/in/m-tahir-usman-712772385",
      icon: <Linkedin size={22} />,
      link: "https://www.linkedin.com/in/m-tahir-usman-712772385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 5,
      label: "GitHub",
      value: "github.com/tahirta143",
      icon: <Github size={22} />,
      link: "https://github.com/tahirta143",
    },
  ];

  return (
    <>
      <section
        id="contacts"
        className="w-full bg-black py-12 px-4 sm:px-6 lg:px-20"
      >
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dc143c] mb-4 mt-6">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 rounded-2xl bg-[#dc143c]"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="mt-12 flex flex-col lg:flex-row items-start justify-center gap-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left: Contact Info */}
          <div className="flex-1 space-y-6 text-white">
            <h1 className="text-2xl font-bold text-[#dc143c]">
              Let's Talk About Your Project
            </h1>
            <p className="text-gray-400 max-w-xl">
              I'm currently open to new opportunities and would love to hear
              about your project. Whether you have a question, want to discuss a
              potential collaboration, or just want to say hello, feel free to
              reach out using the contact information below.
            </p>

            {/* Contacts */}
            {contacts.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] text-red-500">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            {/* Social Media Section */}
            <h2 className="text-xl font-bold text-[#dc143c] mt-8">
              Social Media
            </h2>
            {socials.map((item) => (
              <div key={item.id} className="flex items-start gap-4 mt-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] text-red-500">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 w-full">
            <div className="space-y-4 p-6 sm:p-8 text-white rounded-lg shadow-[0_2px_10px_rgba(255,0,0,0.8)] bg-[#1a1a1a]">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="4"
                ></textarea>
              </div>

              <button className="w-full sm:w-60 h-12 border-2 cursor-pointer border-red-700 hover:bg-red-700 hover:shadow-[0_8px_30px_rgba(220,20,60,0.7)] transition-all duration-300 hover:scale-105 font-semibold rounded-lg mt-4 flex items-center justify-center gap-2">
                <GrSend />
                SEND MESSAGE
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div>
        <footer className="w-full bg-black text-white text-sm md:text-[18px] p-4 md:p-6 flex items-center justify-center shadow-[0_2px_10px_rgba(255,0,0,0.3)]">
          <p className="text-center">© 2025 All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
}
