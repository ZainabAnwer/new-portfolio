"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./TechIcons";

interface ProjectItem {
  id: string;
  title: string;
  category: "Web Apps" | "Data Science & ML" | "Mobile Apps" | "Frontend UI";
  image: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

const projectsList: ProjectItem[] = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    category: "Web Apps",
    image: "/assets/ECOMMERCE.png",
    description:
      "Built a full-stack-style e-commerce interface with product catalog, cart management, and checkout flow, structured as reusable React components for maintainability.",
    demoUrl: "https://ecommerce-website-delta-nine-49.vercel.app/",
    githubUrl: "https://github.com/ZainabAnwer",
    tags: ["React JS", "Tailwind CSS", "JavaScript", "E-Commerce"],
  },
  {
    id: "mini-lms",
    title: "Mini LMS (Learning Management System)",
    category: "Web Apps",
    image: "/assets/LMS.png",
    description:
      "Developed a Learning Management System UI supporting course browsing, video module structuring, focused on clean React state management and smooth navigation.",
    demoUrl: "https://mini-lms-sandy.vercel.app/",
    githubUrl: "https://github.com/ZainabAnwer",
    tags: ["React JS", "State Management", "Component Architecture"],
  },
  {
    id: "student-rental-hub",
    title: "Student Rental Hub",
    category: "Mobile Apps",
    image: "/assets/student-rental-hub.png",
    description:
      "Built and deployed a cross-platform rental listing app for students with Firebase backend for secure authentication, database persistence, and cloud storage.",
    demoUrl: "https://student-rental-hub-e4883.web.app/",
    githubUrl: "https://github.com/ZainabAnwer",
    tags: ["Flutter", "Dart", "Firebase", "Cross-Platform"],
  },
  {
    id: "mobile-usage-analysis",
    title: "Mobile Usage Analysis & Prediction",
    category: "Data Science & ML",
    image: "/assets/mobile-usage-analysis.png",
    description:
      "Analyzed mobile usage behavior dataset and trained a Random Forest model, deployed through an interactive Streamlit dashboard for exploring predictions and trends.",
    demoUrl: "https://mobile-usage-analysis-2yjucegwvht4xrxcdzsw3e.streamlit.app/",
    githubUrl: "https://github.com/ZainabAnwer",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Random Forest"],
  },
  {
    id: "kfc-website",
    title: "KFC Brand Website Replica",
    category: "Frontend UI",
    image: "/assets/KFC.png",
    description:
      "Recreated a responsive static brand website focused on pixel-accurate food catalog layout, component structure, and responsive breakpoint design.",
    demoUrl: "https://kfc-website-ten.vercel.app/",
    githubUrl: "https://github.com/ZainabAnwer",
    tags: ["React JS", "Tailwind CSS", "Static UI", "Component Design"],
  },
];

const categories = ["All", "Web Apps", "Data Science & ML", "Mobile Apps", "Frontend UI"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsList.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A curated collection of web applications, tools, and interactive digital interfaces I have built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md shadow-teal-500/25"
                  : "glass-panel text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-teal-500/20 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-950/40 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/80 gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 shadow-md shadow-teal-500/20 transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-teal-300 hover:border-teal-400/50 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
