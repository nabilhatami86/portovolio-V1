import React from "react";
import { BadgeCheck } from "lucide-react";

function Certificate({ title, image, description, techstack, CertificateLink }) {
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
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-blue-500 text-white shadow-lg">
            Certificate
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-sm font-semibold text-dark-heading dark:text-light-heading line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 min-h-[3.5rem]">
          {description}
        </p>

        {techstack && techstack.trim() !== "" && (
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
        )}

        <div className="mt-auto pt-4 flex justify-center border-t border-gray-100 dark:border-neutral-700">
          <a
            href={CertificateLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <BadgeCheck className="w-4 h-4" />
            View Certificate
          </a>
        </div>
      </div>
    </article>
  );
}

export default Certificate;
