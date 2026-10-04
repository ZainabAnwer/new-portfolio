"use client";

import React from "react";
import { Code, Database, Smartphone, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-7 h-7 text-teal-400" />,
      title: "Web Development",
      subtitle: "Scalable Full-Stack Web Apps",
      description:
        "Building fast, modern, and SEO-friendly web applications using Next.js, React, TypeScript, and Tailwind CSS with robust Node.js/Express backend APIs.",
      features: [
        "Interactive Single Page Apps (SPA) & SSR",
        "Responsive Pixel-Perfect UI Designs",
        "REST API Development & Integration",
        "E-Commerce & Database Management",
      ],
      gradient: "from-teal-500/20 via-slate-900 to-slate-950",
      borderGlow: "group-hover:border-teal-400/60",
    },
    {
      icon: <Database className="w-7 h-7 text-emerald-400" />,
      title: "Backend & API Services",
      subtitle: "Server Architecture & Databases",
      description:
        "Engineering robust REST APIs, authentication services, relational & NoSQL databases with Node.js, Express, Python, MongoDB, and MySQL.",
      features: [
        "RESTful API Architecture & Endpoints",
        "MongoDB & MySQL Schema Design",
        "Firebase Auth & Realtime Database",
        "Python Scripting & Automation Logic",
      ],
      gradient: "from-emerald-500/20 via-slate-900 to-slate-950",
      borderGlow: "group-hover:border-emerald-400/60",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-cyan-400" />,
      title: "App Development",
      subtitle: "Cross-Platform iOS & Android",
      description:
        "Developing natively compiled, responsive mobile applications using Flutter and Dart, backed by Firebase and cloud microservices.",
      features: [
        "Cross-Platform iOS & Android Codebase",
        "Real-Time Database & Auth Integration",
        "Custom Animated UI Widgets",
        "Smooth Offline Storage & Performance",
      ],
      gradient: "from-cyan-500/20 via-slate-900 to-slate-950",
      borderGlow: "group-hover:border-cyan-400/60",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-teal-400">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Delivering high-quality, customer-centric software solutions tailored for web and mobile.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group glass-panel rounded-3xl p-8 border border-teal-500/20 ${service.borderGlow} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-950/50 flex flex-col justify-between bg-gradient-to-b ${service.gradient}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 group-hover:translate-x-1 transition-all"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
