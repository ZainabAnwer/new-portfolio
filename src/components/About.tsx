"use client";

import React from "react";
import { GraduationCap, Award, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-teal-400" />,
      title: "BS Software Engineering",
      subtitle: "Sindh Madressatul Islam University (SMIU)",
      desc: "Pursuing rigorous software engineering degree focusing on algorithms, OOP, data structures, and system design.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: "Full Stack & Mobile Development",
      subtitle: "Web & Cross-Platform",
      desc: "Skilled in Next.js, React, Node.js, Express, Tailwind, Flutter, and relational/NoSQL databases.",
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Clean & Scalable Code",
      subtitle: "Engineering Excellence",
      desc: "Passionate about building responsive, high-performance, and pixel-perfect applications.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/40">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Single column layout - no image */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio Text */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              I&apos;m a Dedicated <span className="gradient-text">Software &amp; Web Developer</span>
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Hi, I&apos;m <strong className="text-teal-400 font-semibold">Zainab Anwar</strong>, a passionate
              software engineering student with a keen eye for detail and a love for crafting user-friendly,
              visually appealing, and performant web &amp; mobile applications.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Currently pursuing a <span className="text-white font-medium">Bachelor&apos;s in Software Engineering (BSSE)</span> at
              SMIU, I specialize in <span className="text-teal-300 font-medium">Next.js, React, Tailwind CSS, TypeScript, Node.js, Python</span>,
              and cross-platform app development with <span className="text-teal-300 font-medium">Flutter &amp; Dart</span>.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              I thrive on challenges, turning complex problem statements into elegant, intuitive digital
              products. Whether it&apos;s crafting seamless frontends, engineering robust backend APIs, or
              integrating cloud databases, I strive for high quality, responsiveness, and scalable architecture.
            </p>
          </div>

          {/* Feature Highlights Grid - moved here instead of image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 p-2 rounded-xl bg-teal-500/10 w-fit">{item.icon}</div>
                <h4 className="font-bold text-sm text-white">{item.title}</h4>
                <p className="text-xs text-teal-300 font-medium mt-0.5">{item.subtitle}</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
