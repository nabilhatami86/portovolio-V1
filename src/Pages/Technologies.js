import React, { useEffect, useRef } from "react";
import { techStackDetails } from "../Details";
import gsap from "gsap";

function Technologies() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const techRef = useRef(null);
  const toolsRef = useRef(null);

  const {
    html,
    css,
    js,
    ts,
    node,
    python,
    react,
    redux,
    tailwind,
    sass,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    cloud,
    cisco,
    winbox,
    mongodb,
    mysql,
    firebase,
  } = techStackDetails;

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(descRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    if (techRef.current) {
      gsap.from(techRef.current.children, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        stagger: 0.07,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out",
      });
    }

    if (toolsRef.current) {
      gsap.from(toolsRef.current.children, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        stagger: 0.07,
        duration: 0.6,
        delay: 0.7,
        ease: "power3.out",
      });
    }
  }, []);

  const TechItem = ({ icon, label }) => (
    <div className="tech-item" title={label}>
      <img src={icon} alt={label} />
    </div>
  );

  return (
    <main className="container mx-auto max-width pt-32 pb-24">
      {/* HEADER */}
      <section className="mb-16">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading"
        >
          Tech Stack
        </h1>

        <div className="mt-3 h-1 w-20 bg-blue-500 rounded-full" />

        <p
          ref={descRef}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
        >
          Technologies and tools I actively use to build modern applications
        </p>
      </section>

      {/* TECHNOLOGIES */}
      <section
        ref={techRef}
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 mb-20"
      >
        <TechItem icon={html} label="HTML" />
        <TechItem icon={css} label="CSS" />
        <TechItem icon={js} label="JavaScript" />
        <TechItem icon={ts} label="TypeScript" />
        <TechItem icon={node} label="Node.js" />
        <TechItem icon={python} label="Python" />
        <TechItem icon={react} label="React" />
        <TechItem icon={redux} label="Redux" />
        <TechItem icon={tailwind} label="Tailwind CSS" />
        <TechItem icon={bootstrap} label="Bootstrap" />
        <TechItem icon={sass} label="Sass" />
      </section>

      {/* TOOLS */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
          Tools
        </h2>

        <div className="mt-3 h-1 w-20 bg-purple-500 rounded-full" />
      </section>

      <section
        ref={toolsRef}
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10"
      >
        <TechItem icon={vscode} label="VS Code" />
        <TechItem icon={git} label="Git" />
        <TechItem icon={github} label="GitHub" />
        <TechItem icon={figma} label="Figma" />
        <TechItem icon={npm} label="NPM" />
        <TechItem icon={postman} label="Postman" />
        <TechItem icon={cloud} label="Cloud" />
        <TechItem icon={winbox} label="Winbox" />
        <TechItem icon={cisco} label="Cisco" />
        <TechItem icon={mysql} label="MySQL" />
        <TechItem icon={mongodb} label="MongoDB" />
        <TechItem icon={firebase} label="Firebase" />
      </section>
    </main>
  );
}

export default Technologies;
