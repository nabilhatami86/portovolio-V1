import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Technologies", "/technologies"],
    ["Projects", "/projects"],
    ["Certificate", "/certificate"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-black/5 dark:border-white/10">
      <div className="container mx-auto max-width px-4 flex justify-between items-center py-4 md:py-6">
        {/* Logo */}
        <NavLink to="/" className="hover:scale-105 transition-transform duration-300">
          <img src={logos.logogradient} alt="logo" className="w-20" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-medium text-dark-heading dark:text-light-heading">
            {navLinks.map(([label, path]) => (
              <li key={label} className="relative group">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${isActive ? "text-blue-500" : ""}`
                  }
                >
                  {label}
                </NavLink>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                    window.location.pathname === path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Social + Theme */}
          <ul className="flex items-center gap-4">
            <li className="hover:scale-110 transition-transform duration-300">
              <a href={twitter} target="_blank" rel="noreferrer noopener" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-dark-heading dark:text-light-heading hover:text-blue-400 transition-colors duration-300" />
              </a>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <a href={linkdein} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-dark-heading dark:text-light-heading hover:text-blue-500 transition-colors duration-300" />
              </a>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <a href={github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <Github className="w-5 h-5 text-dark-heading dark:text-light-heading hover:text-blue-500 transition-colors duration-300" />
              </a>
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark
                  ? <Sun className="w-4 h-4 text-yellow-400" />
                  : <Moon className="w-4 h-4 text-gray-600" />
                }
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800"
            aria-label="Toggle dark mode"
          >
            {isDark
              ? <Sun className="w-4 h-4 text-yellow-400" />
              : <Moon className="w-4 h-4 text-gray-600" />
            }
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-neutral-800 text-dark-heading dark:text-light-heading"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-black/5 dark:border-white/10 px-6 py-4 space-y-3">
          {navLinks.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium transition-colors duration-300 ${
                  isActive ? "text-blue-500" : "text-dark-heading dark:text-light-heading"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-black/5 dark:border-white/10">
            <a href={twitter} target="_blank" rel="noreferrer noopener" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-gray-500 hover:text-blue-400 transition-colors" />
            </a>
            <a href={linkdein} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors" />
            </a>
            <a href={github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
