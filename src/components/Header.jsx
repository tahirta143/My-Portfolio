"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons for mobile menu

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-black text-[18px] p-4 md:p-6 shadow-[0_2px_10px_rgba(255,0,0,0.3)] text-[#dc143c] font-sans flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[#dc143c] font-bold text-xl md:text-2xl">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="relative group cursor-pointer hover:text-white transition-all duration-300 ease-in-out"
            >
              <Link
                href={`#${link.id}`}
                scroll={true}
                className={`transition ${
                  activeSection === link.id ? "text-white" : ""
                }`}
              >
                {link.label}
              </Link>
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full ${
                  activeSection === link.id ? "w-full" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#dc143c] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 shadow-lg z-40">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              scroll={true}
              className={`transition ${
                activeSection === link.id ? "text-[#dc143c]" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
