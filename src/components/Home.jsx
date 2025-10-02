"use client";
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { GrSend } from "react-icons/gr";

function Page() {
  const fullText = " Web & Mobile App Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let typing;
    const handleType = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setSpeed(150);
        if (displayedText === fullText) {
          setIsDeleting(true);
          setSpeed(1000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setSpeed(100);
        if (displayedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setSpeed(200);
        }
      }
    };
    typing = setTimeout(handleType, speed);
    return () => clearTimeout(typing);
  }, [displayedText, isDeleting]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-12"
    >
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "#1a1a1a" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 200, links: { opacity: 0.8 } } },
          },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#1E90FF" },
            links: {
              enable: true,
              color: "#1E90FF",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 0.3 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mt-20 w-full max-w-6xl">
        {/* Profile Image with spinning border */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute rounded-full border-[3px] border-dotted border-red-700 animate-spin-slow"
            style={{ width: "250px", height: "250px" }}
          ></div>

          <div className="w-[230px] h-[230px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-[4px] border-red-700 relative z-10">
            <img
              src="/boy.jpg"
              alt="boy"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left text-white max-w-lg">
          <h3 className="text-lg md:text-xl">Software Engineer</h3>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Muhammad Tahir
          </h1>

          <span className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-5">
            <h4 className="text-xl md:text-2xl">I'm a</h4>
            <h4 className="text-red-500 text-xl md:text-2xl">
              {displayedText}
            </h4>
          </span>

          <p className="mt-4 text-gray-300 text-sm md:text-base">
            I am a passionate software engineer with a focus on building
            high-quality web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://wa.me/923254828492?text=Hello%20I%20want%20to%20hire%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-36 h-12 border-2 cursor-pointer border-red-700 hover:bg-red-700 hover:shadow-[0_8px_30px_rgba(220,20,60,0.7)] transition-all duration-500 hover:scale-105 font-semibold rounded-lg">
                <GrSend className="inline mr-2" />
                Hire me
              </button>
            </a>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="w-40 h-12 border-2 border-red-700 hover:bg-red-700 hover:text-white hover:shadow-[0_8px_30px_rgba(220,20,60,0.7)] transition-all duration-500 hover:scale-105 font-semibold rounded-lg flex items-center justify-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
