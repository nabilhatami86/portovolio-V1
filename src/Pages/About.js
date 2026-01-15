import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const eduRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current || !workRef.current || !eduRef.current) return;

    // ABOUT SECTION
    gsap.from(aboutRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    // WORK EXPERIENCE
    gsap.from(workRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.3,
      ease: "power3.out",
    });

    // EDUCATION
    gsap.from(eduRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="container mx-auto max-width pt-32 pb-24">
      {/* ABOUT ME */}
      <section ref={aboutRef} className="mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
          About Me
        </h1>

        <div className="mt-4 h-1 w-20 bg-blue-500 rounded-full" />

        <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl">
          {personalDetails.about}
        </p>
      </section>

      {/* WORK EXPERIENCE */}
      <section ref={workRef} className="mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
          Work Experience
        </h1>

        <div className="mt-4 h-1 w-24 bg-purple-500 rounded-full" />

        <div className="mt-10 space-y-8 border-l-2 border-blue-500/30 pl-6">
          {workDetails.map(
            ({ Position, Company, Location, Type, Duration }, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-500 rounded-full" />
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* EDUCATION */}
      <section ref={eduRef}>
        <h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
          Education
        </h1>

        <div className="mt-4 h-1 w-20 bg-pink-500 rounded-full" />

        <div className="mt-10 space-y-8 border-l-2 border-pink-500/30 pl-6">
          {eduDetails.map(
            ({ Position, Company, Location, Type, Duration }, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[14px] top-2 w-3 h-3 bg-pink-500 rounded-full" />
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
