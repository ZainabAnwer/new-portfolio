"use client";

import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./TechIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-teal-500/15 py-12 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Brand Name - single solid color, no star icon */}
        <div>
          <a href="#home" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-400">
            Zainab Anwar
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <a href="#home" className="hover:text-teal-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-teal-400 transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-teal-400 transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">
            Skills
          </a>
          <a href="#services" className="hover:text-teal-400 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/zainab-anwer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/ZainabAnwer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:zainabanwer2152@gmail.com"
            aria-label="Email Address"
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            title="Back to top"
            className="p-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 transition-all hover:-translate-y-1 ml-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Credit */}
        <div className="pt-4 border-t border-slate-800/80 w-full flex items-center justify-center text-xs sm:text-sm text-slate-400 gap-1 font-medium">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline mx-0.5" />
          <span>by zainab anwar</span>
        </div>
      </div>
    </footer>
  );
}
