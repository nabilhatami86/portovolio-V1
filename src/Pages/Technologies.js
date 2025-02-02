import React, { useEffect, useRef } from "react";
import { techStackDetails } from "../Details";
import gsap from "gsap";

function Technologies() {
  const sectionRef = useRef();

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
    const tl = gsap.timeline();

    // Animasi judul dan deskripsi
    tl.from(sectionRef.current.querySelector("h1"), {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power4.out",
    })
      .from(
        sectionRef.current.querySelector("p"),
        {
          opacity: 0,
          x: -50,
          duration: 1.5,
          ease: "power3.out",
        },
        "<"
      )

      // Animasi ikon teknologi dan tools
      .fromTo(
        sectionRef.current.querySelectorAll(".tech-icon"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 1.5,
          ease: "back.out(1.7)",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section ref={sectionRef}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-start">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl text-start">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="tech-icon" src={html} title="HTML" alt="HTML" />
        <img className="tech-icon" src={css} title="CSS" alt="CSS" />
        <img className="tech-icon" src={node} title="NodeJs" alt="NodeJs" />
        <img
          className="tech-icon"
          src={js}
          title="JavaScript"
          alt="JavaScript"
        />
        <img
          className="tech-icon"
          src={ts}
          title="TypeScript"
          alt="TypeScript"
        />
        <img className="tech-icon" src={python} title="Python" alt="Python" />
        <img className="tech-icon" src={react} title="React" alt="React" />
        <img className="tech-icon" src={redux} title="Redux" alt="Redux" />
        <img
          className="tech-icon"
          src={tailwind}
          title="Tailwind CSS"
          alt="Tailwind CSS"
        />
        <img
          className="tech-icon"
          src={bootstrap}
          title="Bootstrap"
          alt="Bootstrap"
        />
        <img className="tech-icon" src={sass} title="Sass" alt="Sass" />
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-start">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img
          className="tech-icon"
          src={vscode}
          title="Visual Studio Code"
          alt="VSCode"
        />
        <img className="tech-icon" src={git} title="Git" alt="Git" />
        <img className="tech-icon" src={github} title="Github" alt="Github" />
        <img className="tech-icon" src={figma} title="Figma" alt="Figma" />
        <img className="tech-icon" src={npm} title="NPM" alt="NPM" />
        <img className="tech-icon" src={cloud} title="Cloud" alt="Cloud" />
        <img
          className="tech-icon"
          src={postman}
          title="Postman"
          alt="Postman"
        />
        <img className="tech-icon" src={winbox} title="Winbox" alt="Winbox" />
        <img className="tech-icon" src={cisco} title="Cisco" alt="Cisco" />
        <img className="tech-icon" src={mysql} title="MySQL" alt="MySQL" />
        <img
          className="tech-icon"
          src={mongodb}
          title="MongoDB"
          alt="MongoDB"
        />
        <img
          className="tech-icon"
          src={firebase}
          title="Firebase"
          alt="Firebase"
        />
      </section>
    </main>
  );
}

export default Technologies;
