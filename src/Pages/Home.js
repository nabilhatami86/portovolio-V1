import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User, Briefcase, GraduationCap, LayoutGrid, Award,
  Download, Github, Trophy, Cloud, Rocket,
} from "lucide-react";
import { personalDetails, workDetails, eduDetails, projectDetails, techStackDetails, certificateDetails } from "../Details";
import { socialMediaUrl } from "../Details";
import Work from "../Components/Work";
import Project from "../Components/Project";
import Certificate from "../Components/Certificate";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { name, tagline, img } = personalDetails;

  const [displayedName, setDisplayedName] = useState("");
  const imageRef = useRef();
  const taglineRef = useRef();
  const glowRef = useRef();

  // Section refs
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const eduRef = useRef(null);
  const techSectionRef = useRef(null);

  const {
    html, css, js, ts, node, python, react, redux, tailwind, sass, bootstrap,
    vscode, git, github, npm, postman, figma, cloud, cisco, winbox, mongodb, mysql, firebase,
    docker, fastapi, postgresql,
  } = techStackDetails;

  // Tech items for marquee rows
  const techRow1 = [
    { icon: html, label: "HTML" },
    { icon: css, label: "CSS" },
    { icon: js, label: "JavaScript" },
    { icon: ts, label: "TypeScript" },
    { icon: react, label: "React" },
    { icon: redux, label: "Redux" },
    { icon: node, label: "Node.js" },
    { icon: python, label: "Python" },
    { icon: fastapi, label: "FastAPI" },
  ];

  const techRow2 = [
    { icon: tailwind, label: "Tailwind" },
    { icon: bootstrap, label: "Bootstrap" },
    { icon: sass, label: "Sass" },
    { icon: mysql, label: "MySQL" },
    { icon: mongodb, label: "MongoDB" },
    { icon: firebase, label: "Firebase" },
  ];

  const toolsRow = [
    { icon: vscode, label: "VS Code" },
    { icon: git, label: "Git" },
    { icon: github, label: "GitHub" },
    { icon: figma, label: "Figma" },
    { icon: npm, label: "NPM" },
    { icon: postman, label: "Postman" },
    { icon: docker, label: "Docker" },
    { icon: postgresql, label: "PostgreSQL" },
    { icon: cloud, label: "Cloud" },
    { icon: winbox, label: "Winbox" },
    { icon: cisco, label: "Cisco" },
  ];

  // TYPEWRITER EFFECT
  useEffect(() => {
    let index = 0;
    setDisplayedName("");

    let timeout;
    const type = () => {
      if (index < name.length) {
        setDisplayedName(name.slice(0, index + 1));
        index++;
        timeout = setTimeout(type, 80);
      }
    };
    timeout = setTimeout(type, 80);

    return () => clearTimeout(timeout);
  }, [name]);

  // HERO ANIMATIONS
  useEffect(() => {
    gsap.from(imageRef.current, {
      scale: 0.85,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
    });

    gsap.from(taglineRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.6,
    });

    gsap.to(imageRef.current, {
      y: 18,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.15,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });
  }, []);

  // SCROLL ANIMATIONS
  useEffect(() => {
    // About Section
    if (aboutRef.current) {
      gsap.from(aboutRef.current.children, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    // Work Experience
    if (workRef.current) {
      gsap.from(workRef.current.children, {
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    // Education
    if (eduRef.current) {
      gsap.from(eduRef.current.children, {
        scrollTrigger: {
          trigger: eduRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // MAGNIFY EFFECT ON SCROLL
  const handleMagnifyEffect = useCallback(() => {
    if (!techSectionRef.current) return;

    const techItems = techSectionRef.current.querySelectorAll('.tech-item');
    const sectionRect = techSectionRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;

    techItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const distanceFromCenter = Math.abs(itemCenter - viewportCenter);
      const maxDistance = 300;

      if (distanceFromCenter < maxDistance && sectionRect.top < viewportCenter && sectionRect.bottom > viewportCenter) {
        const scale = 1 - (distanceFromCenter / maxDistance) * 0.3;
        if (scale > 0.85) {
          item.classList.add('magnify');
        } else {
          item.classList.remove('magnify');
        }
      } else {
        item.classList.remove('magnify');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleMagnifyEffect);
    return () => window.removeEventListener('scroll', handleMagnifyEffect);
  }, [handleMagnifyEffect]);

  // DRAG TO SCROLL FUNCTIONALITY
  useEffect(() => {
    const scrollTracks = document.querySelectorAll('.card-scroll-track');

    scrollTracks.forEach((track) => {
      let isDown = false;
      let startX;
      let scrollLeft;

      const handleMouseDown = (e) => {
        isDown = true;
        track.classList.add('active');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      };

      const handleMouseLeave = () => {
        isDown = false;
        track.classList.remove('active');
      };

      const handleMouseUp = () => {
        isDown = false;
        track.classList.remove('active');
      };

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
      };

      track.addEventListener('mousedown', handleMouseDown);
      track.addEventListener('mouseleave', handleMouseLeave);
      track.addEventListener('mouseup', handleMouseUp);
      track.addEventListener('mousemove', handleMouseMove);

      // Touch events for mobile
      track.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });

      track.addEventListener('touchend', () => {
        isDown = false;
      });

      track.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
      });
    });
  }, []);

  const TechItem = ({ icon, label }) => (
    <div className="tech-item" title={label}>
      <img src={icon} alt={label} />
      <span className="tech-label">{label}</span>
    </div>
  );

  const MarqueeRow = ({ items, direction = "right" }) => (
    <div className="marquee-container py-4">
      <div className={`marquee-track marquee-track-${direction}`}>
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <TechItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">

      {/* GLOBAL LIGHT MODE BACKGROUND DECORATION */}
      <div className="fixed inset-0 pointer-events-none -z-10 dark:hidden">
        {/* top-right mesh */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/50 via-indigo-200/30 to-transparent blur-3xl" />
        {/* bottom-left mesh */}
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-100/60 via-sky-100/30 to-transparent blur-3xl" />
        {/* center subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-50/80 blur-3xl" />
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden container mx-auto max-width section md:flex items-center justify-between pt-32 md:pt-40 min-h-screen">
        {/* Background Glow — stronger in light mode */}
        <div
          ref={glowRef}
          className="absolute -top-40 -left-40 w-[560px] h-[560px] bg-blue-400/25 dark:bg-blue-500/30 rounded-full blur-3xl"
        />
        {/* Extra right glow light mode */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-300/20 dark:hidden rounded-full blur-3xl" />

        {/* TEXT */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading">
            Hi, <span role="img" aria-label="wave">👋</span> <br />
            I'm
          </h1>

          {/* TYPEWRITER NAME */}
          <h1 className="mt-2 text-3xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent leading-tight">
            {displayedName}
            <span className="animate-pulse">|</span>
          </h1>

          <h2
            ref={taglineRef}
            className="mt-5 text-lg md:text-2xl text-gray-600 dark:text-gray-300"
          >
            {tagline}
          </h2>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-6 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              About Me
            </button>
            <a
              href="https://drive.google.com/drive/u/0/folders/1F7hG13AyZ18oEePdRuNN2bVPhA5WCjLR"
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3 rounded-full border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href={socialMediaUrl.github}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative z-10 mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full blur-2xl opacity-40" />
          <img
            ref={imageRef}
            src={img}
            alt={name}
            className="relative w-64 md:w-80 rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-16 bg-gradient-to-r from-blue-50/60 via-white/0 to-indigo-50/60 dark:from-transparent dark:to-transparent">
        <div className="container mx-auto max-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Trophy className="w-6 h-6" />, color: "from-yellow-400 to-orange-500", bg: "bg-yellow-50 dark:bg-yellow-900/20", label: "Best Graduate", sub: "Faculty of Engineering" },
              { icon: <Briefcase className="w-6 h-6" />, color: "from-blue-400 to-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20", label: "IT Developer", sub: "Daya Otomasi Asia" },
              { icon: <Cloud className="w-6 h-6" />, color: "from-sky-400 to-cyan-500", bg: "bg-sky-50 dark:bg-sky-900/20", label: "Google Cloud", sub: "Certified" },
              { icon: <Rocket className="w-6 h-6" />, color: "from-purple-400 to-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20", label: `${projectDetails.length}+ Projects`, sub: "Production Ready" },
            ].map(({ icon, color, bg, label, sub }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800 shadow-lg hover:-translate-y-1 hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-3 shadow-md`}>
                  {icon}
                </div>
                <p className="font-bold text-sm md:text-base text-dark-heading dark:text-light-heading">{label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-width relative z-10">
          {/* About Me Card */}
          <div ref={aboutRef} className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
                About Me
              </h1>
            </div>

            <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-neutral-800 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-700 rounded-t-3xl" />
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {personalDetails.about}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-gray-200 dark:border-neutral-700">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    {projectDetails.length}+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    {certificateDetails.length}+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* WORK EXPERIENCE */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
                  Work Experience
                </h2>
              </div>

              <div ref={workRef} className="space-y-6">
                {workDetails.map(
                  ({ Position, Company, Location, Type, Duration }, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-blue-500"
                    >
                      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                      <div className="p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/20 dark:border-neutral-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                        <Work
                          position={Position}
                          company={Company}
                          location={Location}
                          type={Type}
                          duration={Duration}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
                  Education
                </h2>
              </div>

              <div ref={eduRef} className="space-y-6">
                {eduDetails.map(
                  ({ Position, Company, Location, Type, Duration }, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:to-blue-600"
                    >
                      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-pink-500 ring-4 ring-pink-500/20" />
                      <div className="p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/20 dark:border-neutral-800 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1">
                        <Work
                          position={Position}
                          company={Company}
                          location={Location}
                          type={Type}
                          duration={Duration}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="technologies" ref={techSectionRef} className="pt-24 pb-16">
        <div className="container mx-auto max-width mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
            Tech Stack
          </h1>
          <div className="mt-3 h-1 w-20 bg-blue-500 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Technologies and tools I actively use to build modern applications
          </p>
        </div>

        {/* CATEGORIZED SKILL BARS */}
        <div className="container mx-auto max-width mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-5">Frontend</h3>
              <div className="space-y-4">
                {[
                  { name: "React / Redux", level: 90 },
                  { name: "JavaScript / TypeScript", level: 85 },
                  { name: "Tailwind CSS / Bootstrap", level: 90 },
                  { name: "HTML / CSS / Sass", level: 95 },
                ].map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-dark-heading dark:text-light-heading">{name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-5">Backend</h3>
              <div className="space-y-4">
                {[
                  { name: "Node.js / Express", level: 80 },
                  { name: "Python / FastAPI", level: 75 },
                  { name: "REST API Design", level: 85 },
                  { name: "PHP", level: 65 },
                ].map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-dark-heading dark:text-light-heading">{name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-5">Database</h3>
              <div className="space-y-4">
                {[
                  { name: "MySQL / PostgreSQL", level: 80 },
                  { name: "MongoDB", level: 75 },
                  { name: "Firebase", level: 70 },
                ].map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-dark-heading dark:text-light-heading">{name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-5">DevOps & Tools</h3>
              <div className="space-y-4">
                {[
                  { name: "Git / GitHub", level: 85 },
                  { name: "Docker", level: 65 },
                  { name: "Google Cloud", level: 70 },
                  { name: "Figma / Postman", level: 75 },
                ].map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-dark-heading dark:text-light-heading">{name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE ROWS */}
        <div className="space-y-6">
          <MarqueeRow items={techRow1} direction="right" />
          <MarqueeRow items={techRow2} direction="left" />
        </div>

        {/* TOOLS */}
        <div className="container mx-auto max-width mt-16 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
            Tools
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <MarqueeRow items={toolsRow} direction="right" />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="pt-24 pb-16">
        <div className="container mx-auto max-width mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
              Projects
            </h1>
          </div>
          <div className="mt-4 h-1 w-20 bg-blue-500 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Showcasing my recent work and creative solutions
          </p>
        </div>

        {/* Projects Scrollable */}
        <div className="card-scroll-container">
          <div className="card-scroll-track">
            {projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }, index) => (
                <div key={index} className="card-item">
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="pt-24 pb-24">
        <div className="container mx-auto max-width mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
              Certificates
            </h1>
          </div>
          <div className="mt-4 h-1 w-20 bg-blue-500 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certificates Scrollable */}
        <div className="card-scroll-container">
          <div className="card-scroll-track">
            {certificateDetails.map(
              ({ title, image, description, techstack, CertificateLink }, index) => (
                <div key={index} className="card-item">
                  <Certificate
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    CertificateLink={CertificateLink}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
