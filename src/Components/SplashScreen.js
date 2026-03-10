import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logogradient from "../assets/logo.png";

function SplashScreen({ onFinish }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const progressRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up to exit
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: onFinish,
        });
      },
    });

    // Entry animations
    tl.from(logoRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .from(
        nameRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        taglineRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .to(
        progressRef.current,
        {
          width: "100%",
          duration: 1.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to({}, { duration: 0.3 }); // brief pause before exit

    // Glow pulse loop
    gsap.to(glowRef.current, {
      opacity: 0.8,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #020817, #0a1628, #0d1f3c)",
        overflow: "hidden",
      }}
    >
      {/* Glow blob */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div ref={logoRef} style={{ marginBottom: 24 }}>
        <img
          src={logogradient}
          alt="Logo"
          style={{
            width: 80,
            height: 80,
            objectFit: "contain",
            filter: "drop-shadow(0 0 16px rgba(59,130,246,0.9))",
          }}
        />
      </div>

      {/* Name */}
      <h1
        ref={nameRef}
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 800,
          background: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        Muhammad Nabil Hatami
      </h1>

      {/* Tagline */}
      <p
        ref={taglineRef}
        style={{
          marginTop: 10,
          color: "rgba(200,200,220,0.75)",
          fontSize: "clamp(0.85rem, 2vw, 1rem)",
          fontStyle: "italic",
        }}
      >
        Building technology, creating the future. 🚀✨
      </p>

      {/* Progress bar */}
      <div
        style={{
          marginTop: 48,
          width: 220,
          height: 3,
          background: "rgba(255,255,255,0.1)",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          ref={progressRef}
          style={{
            width: 0,
            height: "100%",
            background: "linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8)",
            borderRadius: 99,
          }}
        />
      </div>
    </div>
  );
}

export default SplashScreen;
