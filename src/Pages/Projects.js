import React, { useEffect, useRef } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import gsap from "gsap";

function Projects() {
  const sectionRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // Animasi judul "Projects"
    tl.from(sectionRef.current.querySelector("h1"), {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power4.out",
    });

    // Animasi setiap proyek
    tl.fromTo(
      sectionRef.current.querySelectorAll(".project-card"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
      },
      "<"
    );
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section ref={sectionRef}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-start mb-8 animate__animated animate__fadeIn">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {React.Children.toArray(
            projectDetails.map(
              (
                {
                  title,
                  image,
                  description,
                  techstack,
                  previewLink,
                  githubLink,
                },
                index
              ) => (
                <div className="project-card flex flex-col justify-between bg-white p-2 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
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
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
