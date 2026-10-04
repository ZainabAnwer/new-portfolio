"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Next.js & React Specialist",
  "Flutter & Python Enthusiast",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">

            <h3 className="text-xl sm:text-2xl font-medium text-slate-300 mb-2">
              Hello, Myself
            </h3>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-white">Zainab </span>
              <span className="gradient-text">Anwar</span>
            </h1>

            <div className="text-xl sm:text-3xl font-semibold text-slate-200 mb-6 h-10 flex items-center justify-center lg:justify-start">
              <span>And I&apos;m a&nbsp;</span>
              <span className="text-teal-400 relative">
                {displayedText}
                <span className="animate-pulse font-normal ml-0.5 text-teal-300">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Explore my projects and experiences as a passionate developer, driven by
              modern technologies, problem-solving, and turning complex ideas into high-performance,
              scalable web and mobile applications.
            </p>

            {/* Download CV */}
            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download="Zainab_Anwar_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-teal-400/60 shadow-2xl">
                <Image
                  src="/assets/Profile.jpeg"
                  alt="Zainab Anwar - Software Engineer & Full Stack Developer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
