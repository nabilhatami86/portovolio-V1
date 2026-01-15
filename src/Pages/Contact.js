import React, { useEffect, useRef } from "react";
import { contactDetails } from "../Details";
import gsap from "gsap";

function Contact() {
  const { email, phone } = contactDetails;

  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const orRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from([emailRef.current, orRef.current, phoneRef.current], {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="container mx-auto max-width pt-32 pb-24 flex flex-col items-center text-center">
      <h1
        ref={titleRef}
        className="text-2xl md:text-4xl lg:text-6xl font-bold text-dark-heading dark:text-light-heading max-w-4xl"
      >
        Let’s build something great together
      </h1>

      {/* EMAIL */}
      <h3
        ref={emailRef}
        className="mt-10 text-3xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
      >
        <a href={`mailto:${email}`}>{email}</a>
      </h3>

      <span
        ref={orRef}
        className="my-6 text-xl text-gray-500 dark:text-gray-400"
      >
        or
      </span>

      {/* PHONE */}
      <h3
        ref={phoneRef}
        className="text-3xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
      >
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
