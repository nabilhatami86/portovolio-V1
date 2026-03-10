import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, FileText } from "lucide-react";
import { projectDetails } from "../Details";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const projectIndex = projectDetails.findIndex((p) => p.title === title);

  return (
    <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-dark-card">
      {/* IMAGE */}
      <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-neutral-800 p-3">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 rounded-lg"
        />
        <a
          href={previewLink}
          target="_blank"
          rel="noreferrer noopener"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 px-2 py-1 rounded-full bg-green-500 text-white text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live
        </a>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-sm font-semibold text-dark-heading dark:text-light-heading line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 min-h-[3.5rem]">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {techstack.split(",").slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            >
              {tech.trim()}
            </span>
          ))}
          {techstack.split(",").length > 3 && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-400">
              +{techstack.split(",").length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100 dark:border-neutral-700">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Preview
          </a>

          <div className="flex items-center gap-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>

            {projectIndex !== -1 && (
              <Link
                to={`/project/${projectIndex}`}
                className="flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
