import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logogradient from "../assets/logo.png";

const FULL_NAME = "Muhammad Nabil Hatami";
const TAGLINE = "Building technology, creating the future.";

function SplashScreen({ onFinish }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const lettersRef = useRef([]);
  const taglineRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTrackRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const percentRef = useRef(null);

  const letters = FULL_NAME.split("");

  useEffect(() => {
    // Floating orbs
    gsap.to(orb1Ref.current, { y: -30, x: 20, repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut" });
    gsap.to(orb2Ref.current, { y: 25, x: -15, repeat: -1, yoyo: true, duration: 5, ease: "sine.inOut", delay: 1 });
    gsap.to(orb3Ref.current, { y: -20, x: 10, repeat: -1, yoyo: true, duration: 3.5, ease: "sine.inOut", delay: 0.5 });

    const tl = gsap.timeline();

    // 1. Logo pop in
    tl.from(logoRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -15,
      duration: 0.7,
      ease: "back.out(2)",
    });

    // 2. Letters cascade in — each letter flips from above
    tl.from(
      lettersRef.current.filter(Boolean),
      {
        y: -70,
        opacity: 0,
        rotateX: 90,
        transformOrigin: "top center",
        duration: 0.5,
        stagger: {
          each: 0.045,
          ease: "power1.out",
        },
        ease: "back.out(1.4)",
      },
      "-=0.2"
    );

    // 3. Tagline fade up
    tl.from(
      taglineRef.current,
      {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.1"
    );

    // 4. Progress bar fill + percentage counter
    tl.to(
      progressBarRef.current,
      {
        width: "100%",
        duration: 1.6,
        ease: "power1.inOut",
      },
      "+=0.1"
    );

    // percentage counter parallel
    const counter = { val: 0 };
    tl.to(
      counter,
      {
        val: 100,
        duration: 1.6,
        ease: "power1.inOut",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = Math.round(counter.val) + "%";
          }
        },
      },
      "<"
    );

    // 5. Brief pause
    tl.to({}, { duration: 0.25 });

    // 6. Exit — letters scatter up + logo shrink, then curtain wipe
    tl.to(
      lettersRef.current.filter(Boolean),
      {
        y: -80,
        opacity: 0,
        stagger: { each: 0.02, from: "center" },
        duration: 0.4,
        ease: "power2.in",
      }
    )
      .to(
        [logoRef.current, taglineRef.current, progressTrackRef.current],
        { opacity: 0, duration: 0.3, ease: "power2.in" },
        "<+=0.1"
      )
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.7,
          ease: "power3.inOut",
          onComplete: onFinish,
        },
        "-=0.05"
      );
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
        background: "#020817",
        overflow: "hidden",
        perspective: "800px",
      }}
    >
      {/* Background grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Floating orbs */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.30) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb3Ref}
        style={{
          position: "absolute",
          top: "50%",
          right: "20%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(35px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>

        {/* Logo */}
        <div ref={logoRef} style={{ marginBottom: 28 }}>
          <img
            src={logogradient}
            alt="Logo"
            style={{
              width: 72,
              height: 72,
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(59,130,246,0.9)) drop-shadow(0 0 40px rgba(59,130,246,0.4))",
            }}
          />
        </div>

        {/* Name — letter by letter */}
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            perspective: "600px",
          }}
        >
          {letters.map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 40%, #3b82f6 70%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                ...(char === " " ? { width: "0.35em" } : {}),
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Role / Tagline */}
        <p
          ref={taglineRef}
          style={{
            marginTop: 14,
            color: "rgba(148,163,184,0.85)",
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {TAGLINE}
        </p>

        {/* Progress track */}
        <div
          ref={progressTrackRef}
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 240,
              height: 3,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 99,
              overflow: "hidden",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            <div
              ref={progressBarRef}
              style={{
                width: 0,
                height: "100%",
                background: "linear-gradient(90deg, #93c5fd, #3b82f6, #6366f1)",
                borderRadius: 99,
                boxShadow: "0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.4)",
              }}
            />
          </div>
          <span
            ref={percentRef}
            style={{
              color: "rgba(147,197,253,0.7)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            0%
          </span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
