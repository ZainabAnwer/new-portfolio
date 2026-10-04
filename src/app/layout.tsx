import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Zainab Anwar | Software Engineer & Full Stack Developer Portfolio",
  description:
    "Portfolio of Zainab Anwar - Software Engineer, Frontend & Full Stack Developer specializing in React, Next.js, Flutter, Node.js, and Modern Web Development.",
  keywords: [
    "Zainab Anwar",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Python",
    "Flutter",
    "Dart",
  ],
  authors: [{ name: "Zainab Anwar" }],
  openGraph: {
    title: "Zainab Anwar | Software Engineer & Full Stack Developer",
    description:
      "Explore projects, skills, and experience in modern web and mobile application development.",
    url: "https://zainabanwar.dev",
    siteName: "Zainab Anwar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-teal-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
