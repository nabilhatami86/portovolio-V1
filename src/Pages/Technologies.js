import React, { useEffect, useRef } from "react";
import { techStackDetails } from "../Details";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Server, Database, Wrench, Network, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Technologies() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const {
    html, js, ts, node, python, react, tailwind, sass, bootstrap,
    vscode, git, github, npm, postman, figma, cloud, cisco, winbox,
    mongodb, mysql, firebase, docker, fastapi, postgresql,
  } = techStackDetails;

  const categories = [
    {
      id: "frontend",
      label: "Frontend",
      lucideIcon: <Cpu className="w-5 h-5" />,
      accent: "text-blue-500",
      badge: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-700/30",
      iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
      colors: {
        light: "#93c5fd",
        main: "#3b82f6",
        dark: "#1d4ed8",
        glow: "rgba(59,130,246,0.55)",
        text: "#3b82f6",
      },
      skills: [
        { name: "React / Redux", level: 90, icon: react },
        { name: "JavaScript / TypeScript", level: 85, icon: js },
        { name: "Tailwind CSS", level: 90, icon: tailwind },
        { name: "HTML / CSS", level: 95, icon: html },
        { name: "Bootstrap", level: 85, icon: bootstrap },
        { name: "Sass", level: 75, icon: sass },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      lucideIcon: <Server className="w-5 h-5" />,
      accent: "text-emerald-500",
      badge: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-700/30",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
      colors: {
        light: "#6ee7b7",
        main: "#10b981",
        dark: "#065f46",
        glow: "rgba(16,185,129,0.55)",
        text: "#10b981",
      },
      skills: [
        { name: "Node.js", level: 80, icon: node },
        { name: "Python", level: 75, icon: python },
        { name: "FastAPI", level: 70, icon: fastapi },
        { name: "TypeScript", level: 80, icon: ts },
      ],
    },
    {
      id: "database",
      label: "Database",
      lucideIcon: <Database className="w-5 h-5" />,
      accent: "text-violet-500",
      badge: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border border-violet-200/60 dark:border-violet-700/30",
      iconBg: "bg-violet-500/10 dark:bg-violet-500/20",
      colors: {
        light: "#c4b5fd",
        main: "#8b5cf6",
        dark: "#5b21b6",
        glow: "rgba(139,92,246,0.55)",
        text: "#8b5cf6",
      },
      skills: [
        { name: "MySQL", level: 80, icon: mysql },
        { name: "PostgreSQL", level: 75, icon: postgresql },
        { name: "MongoDB", level: 75, icon: mongodb },
        { name: "Firebase", level: 70, icon: firebase },
      ],
    },
    {
      id: "devops",
      label: "DevOps & Tools",
      lucideIcon: <Wrench className="w-5 h-5" />,
      accent: "text-orange-500",
      badge: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-200/60 dark:border-orange-700/30",
      iconBg: "bg-orange-500/10 dark:bg-orange-500/20",
      colors: {
        light: "#fdba74",
        main: "#f97316",
        dark: "#c2410c",
        glow: "rgba(249,115,22,0.55)",
        text: "#f97316",
      },
      skills: [
        { name: "Git / GitHub", level: 85, icon: git },
        { name: "Docker", level: 65, icon: docker },
        { name: "Google Cloud", level: 70, icon: cloud },
        { name: "VPS / Linux Server", level: 65, icon: null },
        { name: "Figma", level: 75, icon: figma },
        { name: "Postman", level: 80, icon: postman },
        { name: "VS Code", level: 90, icon: vscode },
      ],
    },
    {
      id: "networking",
      label: "Networking",
      lucideIcon: <Network className="w-5 h-5" />,
      accent: "text-cyan-500",
      badge: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-700/30",
      iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
      colors: {
        light: "#67e8f9",
        main: "#06b6d4",
        dark: "#0e7490",
        glow: "rgba(6,182,212,0.55)",
        text: "#06b6d4",
      },
      skills: [
        { name: "Cisco", level: 65, icon: cisco },
        { name: "Mikrotik / Winbox", level: 60, icon: winbox },
        { name: "NPM / Package Mgmt", level: 85, icon: npm },
        { name: "GitHub", level: 85, icon: github },
      ],
    },
  ];

  useEffect(() => {
    gsap.from(headerRef.current?.children, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    cardsRef.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto max-width">

        {/* HEADER */}
        <div ref={headerRef} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-700/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Skills & Technologies
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark-heading dark:text-light-heading leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl">
            Technologies I use daily — organized by category with proficiency levels.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map(({ label, lucideIcon, badge, accent }) => (
              <span key={label} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium ${badge}`}>
                <span className={accent}>{lucideIcon}</span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="space-y-6">
          {categories.map(({ id, label, lucideIcon, accent, badge, iconBg, colors, skills }, i) => {
            const avg = Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length);
            return (
              <div
                key={id}
                ref={(el) => (cardsRef.current[i] = el)}
                className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/30 dark:border-neutral-800 overflow-hidden shadow-sm"
              >
                {/* Category header */}
                <div className="px-6 py-5 flex items-center justify-between border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center`}>
                      <span className={accent}>{lucideIcon}</span>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-dark-heading dark:text-light-heading leading-tight">
                        {label}
                      </h2>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {skills.length} technologies
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${badge}`}>
                    {avg}% avg
                  </span>
                </div>

                {/* Skills grid */}
                <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map(({ name, level, icon }) => (
                    <div
                      key={name}
                      className="group p-4 rounded-xl bg-gray-50/80 dark:bg-neutral-800/50 border border-black/5 dark:border-white/5 hover:shadow-lg transition-all duration-300"
                      style={{
                        "--glow": colors.glow,
                      }}
                    >
                      {/* Top row: icon + name + badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300"
                          style={{ boxShadow: `0 4px 12px ${colors.glow}` }}
                        >
                          {icon ? (
                            <img src={icon} alt={name} className="w-full h-full object-contain" />
                          ) : (
                            <Server className="w-5 h-5 text-orange-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-dark-heading dark:text-light-heading truncate leading-tight">
                            {name}
                          </p>
                        </div>
                        {/* Percentage badge */}
                        <span
                          className="flex-shrink-0 text-xs font-black px-2 py-0.5 rounded-lg"
                          style={{
                            color: colors.text,
                            background: `${colors.glow}`.replace("0.55", "0.12"),
                          }}
                        >
                          {level}%
                        </span>
                      </div>

                      {/* 3D Bar */}
                      <div className="bar-track">
                        <div
                          className="bar-fill"
                          style={{
                            width: `${level}%`,
                            background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.main} 45%, ${colors.dark} 100%)`,
                            boxShadow: `0 0 14px ${colors.glow}, 0 3px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.15)`,
                          }}
                        >
                          <div className="bar-shine" />
                          <div className="bar-dot" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CARD */}
        <div
          ref={(el) => (cardsRef.current[categories.length] = el)}
          className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center shadow-xl shadow-blue-500/20"
        >
          <h3 className="text-2xl font-bold mb-2">Always Learning</h3>
          <p className="text-blue-200 max-w-md mx-auto text-sm leading-relaxed">
            Technology evolves fast. I continuously expand my skill set through projects, certifications, and hands-on experimentation.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Technologies", value: "20+" },
              { label: "Frameworks", value: "10+" },
              { label: "Certificates", value: "15+" },
              { label: "Years Learning", value: "3+" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold">{value}</div>
                <div className="text-blue-300 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

export default Technologies;
