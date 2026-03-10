import React, { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Info, Code2, CheckCircle, Rocket,
} from "lucide-react";
import { projectDetails } from "../Details";
import gsap from "gsap";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[parseInt(id)];

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    gsap.from(heroRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(contentRef.current?.children, {
      y: 20, opacity: 0, duration: 0.7, stagger: 0.12, delay: 0.3, ease: "power3.out",
    });
  }, [project]);

  if (!project) {
    return (
      <main className="container mx-auto max-width pt-32 pb-24 text-center">
        <h1 className="text-3xl font-bold text-dark-heading dark:text-light-heading">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block px-6 py-3 rounded-full bg-blue-600 text-white">
          Back to Projects
        </Link>
      </main>
    );
  }

  const techTags = project.techstack.split(",").map((t) => t.trim());

  return (
    <main className="container mx-auto max-width pt-32 pb-24">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        Back
      </button>

      {/* Hero */}
      <div ref={heroRef} className="relative rounded-3xl overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
        <div className="absolute bottom-0 left-0 z-20 p-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight max-w-3xl">
            {project.title}
          </h1>
          {project.role && (
            <span className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-500/80 text-white text-sm font-medium backdrop-blur-sm">
              {project.role}
            </span>
          )}
        </div>
      </div>

      <div ref={contentRef} className="space-y-8">
        {/* Impact + Links */}
        <div className="grid md:grid-cols-3 gap-6">
          {project.impact && (
            <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200/50 dark:border-blue-700/30">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-dark-heading dark:text-light-heading">Impact</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{project.impact}</p>
            </div>
          )}

          <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800 flex flex-col gap-3">
            <h3 className="font-bold text-dark-heading dark:text-light-heading mb-1">Links</h3>
            <a
              href={project.previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
          <h3 className="font-bold text-dark-heading dark:text-light-heading mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" />
            About the Project
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
          <h3 className="font-bold text-dark-heading dark:text-light-heading mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-500" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features && (
          <div className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800">
            <h3 className="font-bold text-dark-heading dark:text-light-heading mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              Key Features
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Other Projects */}
        <div>
          <h3 className="font-bold text-xl text-dark-heading dark:text-light-heading mb-4">Other Projects</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectDetails
              .filter((_, i) => i !== parseInt(id))
              .slice(0, 3)
              .map((p, i) => {
                const originalIndex = projectDetails.indexOf(p);
                return (
                  <Link
                    key={i}
                    to={`/project/${originalIndex}`}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-28 object-cover rounded-xl mb-3 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <h4 className="font-semibold text-sm text-dark-heading dark:text-light-heading line-clamp-2">
                      {p.title}
                    </h4>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetail;
