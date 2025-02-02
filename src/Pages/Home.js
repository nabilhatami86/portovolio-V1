import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myImageRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from([h11.current, h12.current, h13.current], {
      y: "50px",
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power4.out",
    }).from(
      myImageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      },
      "<"
    );

    // Animasi Yoyo pada gambar agar memberikan efek gerak lembut
    gsap.to(myImageRef.current, {
      y: "15px",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    // Animasi muncul huruf per huruf untuk name
    const nameLetters = name.split(""); // Memecah nama menjadi array huruf
    nameRef.current.innerHTML = ""; // Clear dulu sebelum menambahkan animasi

    nameLetters.forEach((letter, index) => {
      setTimeout(() => {
        nameRef.current.innerHTML += letter; // Menambahkan huruf satu per satu
        gsap.fromTo(
          nameRef.current.childNodes[index],
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      }, 100 * index); // Menambahkan delay bertambah per huruf
    });
  }, [name]);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold hover:text-blue-500 transition-all duration-300"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold hover:scale-105 transition-all duration-300"
        >
          <span ref={nameRef}></span>
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold hover:text-green-500 transition-all duration-300"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myImageRef}
          className="w-1/2 md:ml-auto drop-shadow-lg rounded-full border-4 border-blue-500"
          src={img}
          alt={name}
        />
      </div>
    </main>
  );
}

export default Home;
