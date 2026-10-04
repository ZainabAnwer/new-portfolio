"use client";

import React, { useState } from "react";
import {
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  NodeJsIcon,
  ExpressJsIcon,
  MongoDbIcon,
  MySqlIcon,
  FirebaseIcon,
  PythonIcon,
  PythonLibIcon,
  DartIcon,
  FlutterIcon,
  GitIcon,
  JiraIcon,
} from "./TechIcons";
import { Sparkles, Layers, Cpu, Database, Smartphone, GitBranch } from "lucide-react";

type SkillCategory = "All" | "Frontend" | "Backend" | "Databases & Cloud" | "Mobile & Languages" | "Tools & Workflow";

interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Databases & Cloud" | "Mobile & Languages" | "Tools & Workflow";
  proficiency: number;
  level: string;
  icon: React.ReactNode;
  tags: string[];
  description: string;
  accentColor: string;
}

const allSkills: SkillItem[] = [
  {
    id: "js",
    name: "JavaScript",
    category: "Frontend",
    proficiency: 92,
    level: "Advanced",
    icon: <JavaScriptIcon className="w-8 h-8" />,
    tags: ["ES6+", "DOM API", "Async/Await", "Event Loop"],
    description: "Core language for dynamic web development, interactive user interfaces, and browser engines.",
    accentColor: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30",
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    proficiency: 94,
    level: "Advanced",
    icon: <ReactIcon className="w-8 h-8" />,
    tags: ["Hooks", "Context API", "Component Architecture", "Next.js"],
    description: "Building responsive single-page applications and component-driven web interfaces.",
    accentColor: "from-cyan-500/20 to-sky-500/10 border-cyan-500/30",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 95,
    level: "Expert",
    icon: <TailwindIcon className="w-8 h-8" />,
    tags: ["Utility-First", "Responsive Layouts", "Flexbox/Grid", "Custom Themes"],
    description: "Rapid, modern UI styling with pixel-perfect responsiveness and glassmorphism designs.",
    accentColor: "from-sky-500/20 to-teal-500/10 border-sky-500/30",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    proficiency: 86,
    level: "Proficient",
    icon: <TypeScriptIcon className="w-8 h-8" />,
    tags: ["Type Safety", "Interfaces", "Generics", "Robust Code"],
    description: "Typed superset of JavaScript providing compile-time safety and scalable architecture.",
    accentColor: "from-blue-500/20 to-indigo-500/10 border-blue-500/30",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    proficiency: 85,
    level: "Proficient",
    icon: <NodeJsIcon className="w-8 h-8" />,
    tags: ["Runtime", "Event-Driven", "NPM Ecosystem", "Server Logic"],
    description: "Asynchronous JavaScript server-side runtime for high-throughput microservices and APIs.",
    accentColor: "from-emerald-500/20 to-green-500/10 border-emerald-500/30",
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "Backend",
    proficiency: 86,
    level: "Proficient",
    icon: <ExpressJsIcon className="w-8 h-8" />,
    tags: ["RESTful APIs", "Middleware", "Routing", "JWT Auth"],
    description: "Fast, unopinionated web framework for Node.js handling backend routing, auth, and controllers.",
    accentColor: "from-slate-500/20 to-teal-500/10 border-slate-400/30",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Databases & Cloud",
    proficiency: 84,
    level: "Proficient",
    icon: <MongoDbIcon className="w-8 h-8" />,
    tags: ["NoSQL", "Mongoose ODM", "Collections", "Aggregation Pipelines"],
    description: "Scalable document-oriented NoSQL database for flexible data persistence and querying.",
    accentColor: "from-green-500/20 to-emerald-500/10 border-green-500/30",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases & Cloud",
    proficiency: 80,
    level: "Proficient",
    icon: <MySqlIcon className="w-8 h-8" />,
    tags: ["Relational DB", "Complex Queries", "Foreign Keys", "Normalization"],
    description: "Relational database management system with structured schemas, joins, and ACID compliance.",
    accentColor: "from-blue-600/20 to-orange-500/10 border-blue-500/30",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Databases & Cloud",
    proficiency: 88,
    level: "Advanced",
    icon: <FirebaseIcon className="w-8 h-8" />,
    tags: ["Firestore", "Authentication", "Realtime DB", "Cloud Storage"],
    description: "Google cloud backend-as-a-service providing instant realtime sync, auth, and serverless power.",
    accentColor: "from-amber-500/20 to-yellow-500/10 border-amber-500/30",
  },
  {
    id: "python",
    name: "Python",
    category: "Mobile & Languages",
    proficiency: 88,
    level: "Advanced",
    icon: <PythonIcon className="w-8 h-8" />,
    tags: ["OOP", "Data Structures", "Algorithms", "Automation"],
    description: "Versatile programming language for algorithmic problem-solving, backend logic, and scripting.",
    accentColor: "from-blue-500/20 to-yellow-500/10 border-blue-400/30",
  },
  {
    id: "python-libs",
    name: "Python Libraries",
    category: "Mobile & Languages",
    proficiency: 82,
    level: "Proficient",
    icon: <PythonLibIcon className="w-8 h-8" />,
    tags: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    description: "Scientific computing, numerical data manipulation, analysis, and data visualization tools.",
    accentColor: "from-indigo-500/20 to-teal-500/10 border-indigo-400/30",
  },
  {
    id: "dart",
    name: "Dart",
    category: "Mobile & Languages",
    proficiency: 82,
    level: "Proficient",
    icon: <DartIcon className="w-8 h-8" />,
    tags: ["Null Safety", "OOP", "Async Streams", "Multi-Platform"],
    description: "Client-optimized programming language power-housing Flutter for fast apps on any platform.",
    accentColor: "from-sky-500/20 to-blue-500/10 border-sky-400/30",
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile & Languages",
    proficiency: 85,
    level: "Proficient",
    icon: <FlutterIcon className="w-8 h-8" />,
    tags: ["Cross-Platform", "iOS & Android", "Custom Widgets", "State Management"],
    description: "Google's UI toolkit for crafting beautiful, natively compiled cross-platform mobile apps.",
    accentColor: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Tools & Workflow",
    proficiency: 90,
    level: "Advanced",
    icon: <GitIcon className="w-8 h-8" />,
    tags: ["Version Control", "Git Flow", "Repositories", "Pull Requests"],
    description: "Version control management, code collaboration, branching strategies, and repository management.",
    accentColor: "from-orange-500/20 to-red-500/10 border-orange-500/30",
  },
  {
    id: "jira",
    name: "Jira",
    category: "Tools & Workflow",
    proficiency: 85,
    level: "Proficient",
    icon: <JiraIcon className="w-8 h-8" />,
    tags: ["Agile", "Scrum", "Issue Tracking", "Sprint Planning"],
    description: "Agile project management, sprint planning, ticket tracking, and team workflow management.",
    accentColor: "from-blue-600/20 to-sky-500/10 border-blue-500/30",
  },
];

const categories: { label: SkillCategory; icon: React.ReactNode }[] = [
  { label: "All", icon: <Layers className="w-4 h-4" /> },
  { label: "Frontend", icon: <Sparkles className="w-4 h-4" /> },
  { label: "Backend", icon: <Cpu className="w-4 h-4" /> },
  { label: "Databases & Cloud", icon: <Database className="w-4 h-4" /> },
  { label: "Mobile & Languages", icon: <Smartphone className="w-4 h-4" /> },
  { label: "Tools & Workflow", icon: <GitBranch className="w-4 h-4" /> },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");

  const filteredSkills = allSkills.filter(
    (skill) => selectedCategory === "All" || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Comprehensive toolkit covering frontend, backend APIs, relational & NoSQL databases,
            version control, agile project management, and cross-platform mobile development.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-teal-500/20 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat.label
                    ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md shadow-teal-500/25"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`group glass-panel rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-950/40 relative overflow-hidden bg-gradient-to-b ${skill.accentColor}`}
            >
              {/* Card Header: Icon + Info */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/20">
                    {skill.level}
                  </span>
                  <div className="text-xs text-slate-400 mt-1 font-mono">{skill.proficiency}%</div>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-300 mt-1.5 mb-3 leading-relaxed line-clamp-2">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="skill-tag text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stack Highlight Summary Banner */}
        <div className="mt-16 glass-panel rounded-3xl p-6 sm:p-8 border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-slate-950/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">13+</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">Core Tech & Frameworks</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Full-Stack</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">Frontend + Backend APIs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Mobile & Web</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">Next.js & Flutter (Dart)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">Data & DB</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">MongoDB, MySQL, Firebase, Python</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
