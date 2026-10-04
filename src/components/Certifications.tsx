"use client";

import React from "react";
import { Award, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  provider: string;
  issueDate: string;
  description: string;
  tags: string[];
  badgeColor: string;
  accentGlow: string;
}

const certificatesList: CertificateItem[] = [
  {
    id: "frontend-ai",
    title: "Frontend with AI",
    provider: "Bano Qabli",
    issueDate: "Certified",
    description:
      "Specialized certification in AI-driven frontend development, integrating modern web interfaces with artificial intelligence workflows and smart client tools.",
    tags: ["Frontend AI", "AI Integration", "React JS", "Smart UI"],
    badgeColor: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    accentGlow: "from-teal-500/20 via-emerald-500/10 to-transparent border-teal-500/30",
  },
  {
    id: "react-tailwind",
    title: "React with Tailwind CSS",
    provider: "Bano Qabli",
    issueDate: "Certified",
    description:
      "Comprehensive training in building responsive, modern single-page applications with React component architecture and utility-first Tailwind CSS styling.",
    tags: ["React JS", "Tailwind CSS", "Component Architecture", "Responsive Design"],
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    accentGlow: "from-cyan-500/20 via-sky-500/10 to-transparent border-cyan-500/30",
  },
  {
    id: "backend-nodejs",
    title: "Backend with Node.js",
    provider: "Bano Qabli",
    issueDate: "Certified",
    description:
      "Core backend engineering certification focused on asynchronous Node.js server runtime, Express routing, REST API construction, and database persistence.",
    tags: ["Node.js", "Express.js", "RESTful APIs", "Backend Architecture"],
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accentGlow: "from-emerald-500/20 via-green-500/10 to-transparent border-emerald-500/30",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Verified tech certifications completed from <span className="text-teal-400 font-semibold">BanoQabli</span> initiative, validating hands-on expertise in frontend AI, modern UI frameworks, and server-side logic.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className={`group glass-panel rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/40 relative overflow-hidden flex flex-col justify-between bg-gradient-to-b ${cert.accentGlow}`}
            >
              <div>
                {/* Header: Award Icon + Provider Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-700/60 text-teal-400 shadow-inner">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                    {cert.provider}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Verification Indicator */}
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Completed via BanoQabli</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="flex justify-center">
          <a
            href="http://www.zainabcertificate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>View All Certificates</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
