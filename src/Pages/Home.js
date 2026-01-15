import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails, workDetails, eduDetails, projectDetails, techStackDetails, certificateDetails } from "../Details";
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

    const interval = setInterval(() => {
      setDisplayedName((prev) => prev + name.charAt(index));
      index++;
      if (index >= name.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
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
      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden container mx-auto max-width section md:flex items-center justify-between pt-32 md:pt-40 min-h-screen">
        {/* Background Glow */}
        <div
          ref={glowRef}
          className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/30 rounded-full blur-3xl"
        />

        {/* TEXT */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading">
            Hi, <span role="img" aria-label="wave">👋</span> <br />
            I'm
          </h1>

          {/* TYPEWRITER NAME */}
          <h1 className="mt-2 text-3xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
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
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-7 py-3 rounded-full bg-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-7 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              About Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative z-10 mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40" />
          <img
            ref={imageRef}
            src={img}
            alt={name}
            className="relative w-64 md:w-80 rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-width relative z-10">
          {/* About Me Card */}
          <div ref={aboutRef} className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
                About Me
              </h1>
            </div>

            <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-neutral-800 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-3xl" />
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {personalDetails.about}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-gray-200 dark:border-neutral-700">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {projectDetails.length}+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                    {certificateDetails.length}+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-blue-500"
                    >
                      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                      <div className="p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/20 dark:border-neutral-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
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
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:to-purple-500"
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
          <div className="mt-3 h-1 w-20 bg-purple-500 rounded-full" />
        </div>

        <MarqueeRow items={toolsRow} direction="right" />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="pt-24 pb-16">
        <div className="container mx-auto max-width mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
              Certificates
            </h1>
          </div>
          <div className="mt-4 h-1 w-20 bg-purple-500 rounded-full" />
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
