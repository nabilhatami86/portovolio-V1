import React, { useEffect, useRef, useState } from "react";
import {
  Mail, Linkedin, Github, Phone, Instagram,
  Send, CheckCircle, ChevronRight,
} from "lucide-react";
import { contactDetails, socialMediaUrl } from "../Details";
import gsap from "gsap";

function Contact() {
  const { email, phone } = contactDetails;
  const { linkdein, github, instagram } = socialMediaUrl;

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.from(titleRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(contentRef.current?.children, {
      y: 20, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.3, ease: "power3.out",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socialLinks = [
    {
      label: "Email",
      href: `mailto:${email}`,
      value: email,
      gradient: "from-red-400 to-orange-500",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: "LinkedIn",
      href: linkdein,
      value: "nabilhatami",
      gradient: "from-blue-500 to-blue-700",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      label: "GitHub",
      href: github,
      value: "nabilhatami86",
      gradient: "from-gray-600 to-gray-900",
      icon: <Github className="w-5 h-5" />,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/628124766270`,
      value: phone,
      gradient: "from-green-400 to-green-600",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: "Instagram",
      href: instagram,
      value: "nabil.hatami",
      gradient: "from-pink-500 to-purple-600",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <main className="container mx-auto max-width pt-32 pb-24">
      {/* Title */}
      <h1
        ref={titleRef}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-heading dark:text-light-heading max-w-3xl"
      >
        Let's build something{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          great
        </span>{" "}
        together
      </h1>

      <div ref={contentRef} className="mt-12 grid lg:grid-cols-2 gap-10">
        {/* Left: Social Links */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm always open to new opportunities, collaborations, or just a friendly chat. Reach out through any channel below.
          </p>

          <div className="space-y-3">
            {socialLinks.map(({ label, href, value, gradient, icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</p>
                  <p className="text-sm font-semibold text-dark-heading dark:text-light-heading truncate">{value}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0 group-hover:text-blue-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="relative p-8 rounded-3xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-3xl" />
          <h2 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-dark-heading dark:text-light-heading placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">Your Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-dark-heading dark:text-light-heading placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or just say hi..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-dark-heading dark:text-light-heading placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Opened!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
