"use client";

import React from "react";
import { GraduationCap, School, BookOpen, CheckCircle2, Cpu, Code2, Brain } from "lucide-react";

export default function Education() {
  const academicPillars = [
    {
      icon: <Brain className="w-5 h-5 text-teal-400" />,
      title: "Problem Solving & Analytical Thinking",
      desc: "Deconstructing complex software engineering problems into optimized, algorithmic solutions.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: "Software Architecture & OOP",
      desc: "Designing modular, scalable, and maintainable software systems applying Object-Oriented Principles.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Data Structures & Database Systems",
      desc: "Understanding core data organization, memory optimization, and relational & NoSQL schema design.",
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="gradient-text">Academic Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            My formal engineering degree, intermediate foundation, and core computer science competencies.
          </p>
        </div>

        {/* Education Timeline / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* College / Intermediate */}
          <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden bg-gradient-to-br from-teal-950/30 via-slate-900/80 to-slate-950/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <School className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30 font-mono">
                  Completed
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Intermediate in Pre-Engineering
              </h3>
              <p className="text-base font-medium text-teal-400 mb-4">
                Khatoon-e-Pakistan Govt Degree College for Women
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Completed intermediate pre-engineering studies with strong academic standing, building
                a robust background in advanced mathematics, physics, and analytical problem solving.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Higher Secondary Certificate (HSC)</span>
            </div>
          </div>

          {/* University Degree */}
          <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden bg-gradient-to-br from-teal-950/30 via-slate-900/80 to-slate-950/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30 font-mono">
                  2023 - 2027
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Science in Software Engineering (BSSE)
              </h3>
              <p className="text-base font-medium text-teal-400 mb-4">
                Sindh Madressatul Islam University (SMIU)
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Pursuing a comprehensive Software Engineering degree focused on modern software design patterns,
                full-stack web development, cross-platform mobile apps, relational databases, and algorithmic logic.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Undergraduate Degree Program</span>
            </div>
          </div>
        </div>

        {/* Academic Foundation Section */}
        <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Academic Foundation &amp; Core Strengths
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Core theoretical concepts and engineering practices developed throughout my education.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {academicPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 transition-colors"
              >
                <div className="mb-3 p-2 rounded-lg bg-slate-800/80 w-fit">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-sm text-white mb-1">{pillar.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
