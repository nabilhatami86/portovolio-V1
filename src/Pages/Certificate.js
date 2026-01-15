import React, { useEffect, useRef } from "react";
import Certificate from "../Components/Certificate";
import { certificateDetails } from "../Details";
import gsap from "gsap";

function Certificates() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !gridRef.current) return;

    // TITLE
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // CERTIFICATE CARDS
    gsap.from(gridRef.current.children, {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="container mx-auto max-width pt-32 pb-24">
      {/* HEADER */}
      <section className="mb-12">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading"
        >
          Certificates
        </h1>

        <div className="mt-4 h-1 w-20 bg-purple-500 rounded-full" />
      </section>

      {/* CERTIFICATE GRID */}
      <section
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {certificateDetails.map(
          (
            { title, image, description, techstack, CertificateLink },
            index
          ) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white dark:bg-neutral-900 p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
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
      </section>
    </main>
  );
}

export default Certificates;
